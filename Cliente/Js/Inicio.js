import { ObtenerVideos } from "./Fetch_Inicio.js";

const contenedor = document.getElementById("ContenedrodeVideos");
const paginador = document.getElementById("Paginacion"); 
const searchBanner = document.getElementById("SearchBanner");


  const state = {
    page: 1,
    per_page: 16,
    sort_by: "fecha_de_registro",
    sort_dir: "desc",
     q: null,
     aprobado: 1,
     carrera_id: null,
     facultad_id:null,
     ua_id:null,
    // date_from: ..., date_to: ...
  };

export function renderizarVideos(lista) {
  contenedor.innerHTML = "";
  if (!Array.isArray(lista) || lista.length === 0) {
    const col = document.createElement('div');
    col.className = 'col-12';
    col.innerHTML = `
      <div class="alert alert-secondary text-center m-0">
        Sin videos registrados
      </div>
    `;
    contenedor.appendChild(col);
     if (paginador) paginador.innerHTML = "";
    return;
  }


  lista.forEach(video => {


    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 p-2';

    col.innerHTML = `
    <a href="/Cliente/Html/Video.html?id=${video.id}"
   class="card-link text-decoration-none" aria-label="Ver video: ${video.titulo}">
  <div class="card hover-border video-card h-100">
    <div class="ratio ratio-16x9 video-thumb">
      <img
        src="https://img.youtube.com/vi/${video.identificador}/hqdefault.jpg"
        class="card-img-top" alt="Miniatura de ${video.titulo}" loading="lazy" decoding="async">
    </div>

    <div class="card-body">
      <h6 class="card-title text-truncate mb-1" title="${video.titulo}">
        ${video.titulo}
      </h6>

      <div class="video-meta small text-muted">
        <div class="text-truncate" title="Unidad de aprendizaje">
          <i class="bi bi-journal-bookmark"></i>
          ${video?.ua?.nombre ?? 'Unidad no especificada'}
        </div>
        <div class="text-truncate" title="Facultad">
          <i class="bi bi-building"></i>
          ${video?.ua?.carrera?.facultad?.nombre ?? 'Facultad no especificada'}
        </div>
      </div>
    </div>
  </div>
</a>
    `;
    contenedor.appendChild(col);
  });
}

function getInitialQuery() {
  const sp = new URLSearchParams(window.location.search);
    const q = sp.get("q")?.trim() || sp.get("search")?.trim();
  return q || undefined;
}

function renderPaginacion(meta, links) {
  if (!paginador) return;
  paginador.innerHTML = `
    <nav aria-label="Paginación de videos">
      <ul class="pagination mb-0">
        <li class="page-item ${meta.page <= 1 ? "disabled" : ""}">
          <a class="page-link" href="#" data-page="${meta.page - 1}">Anterior</a>
        </li>
        <li class="page-item disabled">
          <span class="page-link">Página ${meta.page} de ${meta.total_pages}</span>
        </li>
        <li class="page-item ${meta.page >= meta.total_pages ? "disabled" : ""}">
          <a class="page-link" href="#" data-page="${meta.page + 1}">Siguiente</a>
        </li>
      </ul>
    </nav>
  `;
  paginador.querySelectorAll("[data-page]").forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const p = parseInt(a.getAttribute("data-page"), 10);
      if (p >= 1 && p <= meta.total_pages) {
        // Mantener la búsqueda activa en la paginación
        cargar({ page: p, q: state.q });
      }
    });
  });
}

export async function cargar(override = {}) {
  const params = { ...state, ...override };

  // Normaliza q y guárdala en el state
  if (typeof params.q === "string") {
    params.q = params.q.trim();
    state.q = params.q || undefined;
  }

  if (params.q) params.per_page = Math.max(params.per_page ?? 10, 50);

  const resp = await ObtenerVideos(params);


  const norm = (s) => (s ?? "").toString().toLowerCase();
  const term = norm(params.q);

// --- Mostrar/Ocultar franja gris con el término ---
if (searchBanner) {
  if (term) {
    searchBanner.classList.remove("d-none");
    searchBanner.innerHTML = `
      <i class="bi bi-funnel"></i>
      Resultado de búsqueda personalizada: <strong>${escapeHtml(term)}</strong>
    `;
  } else {
    searchBanner.classList.add("d-none");
    searchBanner.innerHTML = "";
  }
}

  let lista = resp.data;

  // --- Búsqueda en cliente (titulo, descripcion, UA, carrera, facultad)
  let filteredClientSide = false;
  


  if (term) {
    const matches = (v) => {
      return [
        v?.descripcion,
        v?.titulo,
        v?.ua?.nombre,
        v?.ua?.carrera?.nombre,
        v?.ua?.carrera?.facultad?.nombre,
      ].some((x) => norm(x).includes(term));
    };
    const before = lista.length;
    lista = lista.filter(matches);
    filteredClientSide = lista.length !== before;
  }

  renderizarVideos(lista);

  if (filteredClientSide) {
    if (paginador) paginador.innerHTML = "";
  } else {
    renderPaginacion(resp.meta, resp.links);
  }

  state.page = resp.meta.page;
  state.per_page = resp.meta.per_page;
  state.sort_by = resp.meta.sort_by;
  state.sort_dir = resp.meta.sort_dir;

  // Si el backend manda filtros aplicados, sincronízalos también
  if (resp.meta?.applied_filters) {
    Object.assign(state, resp.meta.applied_filters);
  }
}


(async function boot() {
  const q = getInitialQuery();
  state.q = q; // guarda la búsqueda inicial en el estado
  await cargar({ page: 1, aprobado: 1, q });
})();

//////Funcion para evitar xss(mensaje de info de busqueda)//////
const escapeHtml = (s = "") =>
  s.replace(/[&<>"'`=\/]/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;","`":"&#x60;","=":"&#x3D;","/":"&#x2F;"
  }[c]));



  /////////Logica para limpiar los filtros////////
const resetBtn = document.getElementById("btn-reset-filtros");
const navbarSearchInput = document.getElementById("navbar-search-input");

// helper para limpiar el URL (quita ?q y ?search)
function clearSearchParamsFromURL() {
  const sp = new URLSearchParams(window.location.search);
  sp.delete("q");
  sp.delete("search");
  const newUrl = window.location.pathname + (sp.toString() ? `?${sp}` : "");
  window.history.replaceState({}, "", newUrl);
}

// función principal de reset (filtros + término)
async function resetFiltrosYBusqueda() {
  // 1) limpiar estado (ajústalo a tus defaults reales)
  state.page = 1;
  state.q = null;
  state.aprobado = 1;
  state.carrera_id = null;
  state.facultad_id = null;
  state.ua_id = null;
  state.date_from = undefined;
  state.date_to = undefined;


  // 3) limpiar input de la barra
  if (navbarSearchInput) navbarSearchInput.value = "";

  // 4) ocultar banner de búsqueda
  if (searchBanner) {
    searchBanner.classList.add("d-none");
    searchBanner.innerHTML = "";
  }

  // 5) quitar q/search del URL
  clearSearchParamsFromURL();

  // 6) recargar resultados (sin término ni filtros)
  await cargar({
    page: 1,
    q: undefined,
    aprobado: 1,
    carrera_id: null,
    facultad_id: null,
    ua_id: null,
    date_from: undefined,
    date_to: undefined,
    palabra: undefined,
  });
}

// wire del botón
resetBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  resetFiltrosYBusqueda();
});



