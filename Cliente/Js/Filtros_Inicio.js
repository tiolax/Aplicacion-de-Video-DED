/* ===========================
   BLOQUE A: Importaciones & Config
   =========================== */
import { renderizarVideos,cargar } from "./Inicio.js"; // (se mantiene por compatibilidad)
import * as FuncionesAuxiliares from "./Fetch_Inicio.js";

const ICON_SEARCH = `<i class="bi bi-search clickable-icon" style="cursor: pointer;"></i>`;

/* ===========================
   BLOQUE B: Estado en memoria
   =========================== */
const Data = { facultades: [], carreras: [], uas: [] };

function setData({ facultades = [], carreras = [], uas = [] }) {
  Data.facultades = facultades;
  Data.carreras = carreras;
  Data.uas = uas;
}

// === Estado UI de filtros para indicador y toggles ===
const UISelections = {
  facultadId: null,
  carreraId: null,
  uaId: null,
  temaId: null,
  date_from: undefined,
  date_to: undefined,
};

// Crea/obtiene el indicador y lo actualiza
function ensureIndicatorEl() {
  let badge = document.getElementById("filtros-activos-ind");
  if (!badge) {
    const header = document.querySelector('.col-12.col-md-3 .d-flex.align-items-center') 
                || document.querySelector('button[title="Reiniciar filtros"]')?.parentElement;
    if (header) {
      badge = document.createElement("span");
      badge.id = "filtros-activos-ind";
      badge.className = "badge text-bg-secondary ms-2";
      badge.textContent = "Filtros activos: 0";
      header.insertBefore(badge, header.querySelector('button[title="Reiniciar filtros"]') || null);
    }
  }
  return badge;
}

function updateIndicator() {
  const badge = ensureIndicatorEl();
  if (!badge) return;
  let count = 0;
  if (UISelections.facultadId) count++;
  if (UISelections.carreraId)  count++;
  if (UISelections.uaId)       count++;
  if (UISelections.temaId)     count++;
  if (UISelections.date_from || UISelections.date_to) count++;

  badge.textContent = `Filtros activos: ${count}`;
  badge.classList.toggle("d-none", count === 0);
}

// Botón reset: limpia UI + llama cargar(...) sin filtros
function wireResetButton() {
  const btn = document.getElementById("btn-reset-filtros") 
           || document.querySelector('button[title="Reiniciar filtros"]');
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Quitar activos en listas
    document.querySelectorAll("#lista-filtros li, #temas li, #fecha > li").forEach(li => li.classList.remove("active"));
    // Limpiar inputs de fecha
    const from = document.getElementById("date-from");
    const to   = document.getElementById("date-to");
    if (from) from.value = "";
    if (to)   to.value   = "";

    // Reset estado UI
    UISelections.facultadId = null;
    UISelections.carreraId  = null;
    UISelections.uaId       = null;
    UISelections.temaId     = null;
    UISelections.date_from  = undefined;
    UISelections.date_to    = undefined;
    updateIndicator();

    // Cargar sin filtros
    cargar({
      page: 1, aprobado: 1,
      facultad_id: undefined,
      carrera_id:  undefined,
      ua_id:       undefined,
      palabras:    undefined,
      date_from:   undefined,
      date_to:     undefined,
    });
  });
}



/* ==========================================
   BLOQUE C: Normalización y construcción árbol
   (facultad -> carreras -> uas)
   ========================================== */
const normalizaCarrera = (c) => {
  const facultadId = c.facultad?.id ?? c.facultadId ?? c.facultad_id;
  const { facultad, ...rest } = c;
  return { ...rest, facultadId };
};

const normalizaUa = (u) => {
  const carreraId = u.carrera?.id ?? u.carreraId ?? u.carrera_id;
  const { carrera, ...rest } = u;
  return { ...rest, carreraId };
};

function buildTree(facultades, carreras, uas) {
  const carrNorm = (carreras ?? []).map(normalizaCarrera);
  const uasNorm = (uas ?? []).map(normalizaUa);

  const uasByCarrera = uasNorm.reduce((acc, ua) => {
    if (!ua.carreraId) return acc;
    (acc[ua.carreraId] ||= []).push(ua);
    return acc;
  }, {});

  const carrerasByFacultad = carrNorm.reduce((acc, c) => {
    if (!c.facultadId) return acc;
    (acc[c.facultadId] ||= []).push({ ...c, uas: uasByCarrera[c.id] || [] });
    return acc;
  }, {});

  return (facultades ?? []).map((f) => ({
    ...f,
    carreras: (carrerasByFacultad[f.id] || []).sort((a, b) =>
      a.nombre?.localeCompare(b.nombre ?? "")
    ),
  }));
}

/* ========================================
   BLOQUE D: Fetch de datos académicos/temas
   ======================================== */
async function obtenerFiltrosArbol() {
  const datos = await FuncionesAuxiliares.ObtenerDatos();
  setData(datos);
  return buildTree(datos.facultades, datos.carreras, datos.uas);
}

async function obtenerTemasLimpios() {
  const data = await FuncionesAuxiliares.obtenerTemas();
  return (data?.palabras ?? []).map((t) => ({ id: t.id, nombre: t.nombre }));
}

/* =======================================
   BLOQUE E: Utilidades de creación de DOM
   ======================================= */
 function createCollapsibleItem(label, targetId, data = {}) {
   const li = document.createElement("li");
   li.className =
     "list-group-item list-group-item-action d-flex justify-content-between align-items-center";
   li.innerHTML = `
     <span class="item-label">${label}</span>
     <i class="bi bi-chevron-down toggle-collapse" style="cursor:pointer"
        data-bs-toggle="collapse" data-bs-target="#${targetId}"
        aria-expanded="false" aria-controls="${targetId}"></i>
   `;
   if (data.tipo) li.dataset.tipo = data.tipo;
   if (data.id != null) li.dataset.id = String(data.id);
   return li;
 }

function createCollapseList(id) {
  const ul = document.createElement("ul");
  ul.className = "list-group collapse ps-3 list-group-flush";
  ul.id = id;
  return ul;
}

function createUaItem(nombre,id) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.innerHTML = `<span>${nombre}</span>${ICON_SEARCH}`;
  li.dataset.tipo = "ua";
  if (id != null) li.dataset.id = String(id);
  return li;
}


function bindChevronToggle(collapseEl, iconEl) {
  collapseEl.addEventListener("shown.bs.collapse", () => {
    iconEl.classList.remove("bi-chevron-down");
    iconEl.classList.add("bi-chevron-up");
    iconEl.setAttribute("aria-expanded", "true");
  });
  collapseEl.addEventListener("hidden.bs.collapse", () => {
    iconEl.classList.remove("bi-chevron-up");
    iconEl.classList.add("bi-chevron-down");
    iconEl.setAttribute("aria-expanded", "false");
  });
}




/* ==========================================
   BLOQUE F: Render de filtros y de temas (UI)
   ========================================== */
function renderFiltros(arbol, contenedor) {
  const frag = document.createDocumentFragment();

  arbol.forEach((f, fIdx) => {
    const facultadId = `facultad-${fIdx}`;
    const liFacultad = createCollapsibleItem(f.nombre, facultadId,{ tipo: "facultad", id: f.id });
    const ulCarreras = createCollapseList(facultadId);
    const iconFac = liFacultad.querySelector(".toggle-collapse");
   bindChevronToggle(ulCarreras, iconFac);

    (f.carreras ?? []).forEach((c, cIdx) => {
      const carreraId = `${facultadId}-carrera-${cIdx}`;
      const liCarrera = createCollapsibleItem(c.nombre, carreraId, { tipo: "carrera", id: c.id });
      const ulUas = createCollapseList(carreraId);
      const iconCar = liCarrera.querySelector(".toggle-collapse");
     bindChevronToggle(ulUas, iconCar);

      (c.uas ?? []).forEach((u) => ulUas.appendChild(createUaItem(u.nombre,u.id)));

      ulCarreras.appendChild(liCarrera);
      ulCarreras.appendChild(ulUas);
    });

    frag.appendChild(liFacultad);
    frag.appendChild(ulCarreras);
  });

  contenedor.appendChild(frag);
}

function renderTemas(temas, contenedor) {
  contenedor.innerHTML = "";
  temas.forEach((tema, index) => {
    const li = document.createElement("li");
    li.id = `tema-${tema.id}`;
    li.dataset.temaId = String(tema.id);
    li.className = "list-group-item";
    li.dataset.tipo = "tema";
    li.textContent = tema.nombre;
    li.setAttribute("data-index", index);
    contenedor.appendChild(li);
  });
}

/* ==========================================
   BLOQUE G: Eventos de UI (búsqueda/selección)
   ========================================== */
function wireBusquedaPorIcono(contenedorFiltros) {
  contenedorFiltros.addEventListener("click", (e) => {
    if (e.target.closest(".toggle-collapse")) return;

    const li = e.target.closest("li.list-group-item");
    if (!li || !contenedorFiltros.contains(li)) return;

    const yaActivo = li.classList.contains("active");
    const tipo = li.dataset.tipo;
    const id   = li.dataset.id;

    // Si vuelven a clickear el que ya está activo: deseleccionar y limpiar filtros relacionados
    if (yaActivo) {
      li.classList.remove("active");
      UISelections.facultadId = null;
      UISelections.carreraId  = null;
      UISelections.uaId       = null;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, facultad_id: undefined, carrera_id: undefined, ua_id: undefined });
      return;
    }

    // Selección normal (solo uno activo a la vez)
    contenedorFiltros.querySelectorAll("li").forEach((it) => it.classList.remove("active"));
    li.classList.add("active");

    if (tipo === "ua" && id) {
      UISelections.uaId = id;
      UISelections.carreraId = null;
      UISelections.facultadId = null;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, ua_id: id, carrera_id: undefined, facultad_id: undefined });
      return;
    }
    if (tipo === "carrera" && id) {
      UISelections.carreraId = id;
      UISelections.uaId = null;
      UISelections.facultadId = null;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, carrera_id: id, ua_id: undefined, facultad_id: undefined });
      return;
    }
    if (tipo === "facultad" && id) {
      UISelections.facultadId = id;
      UISelections.carreraId = null;
      UISelections.uaId = null;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, facultad_id: id, carrera_id: undefined, ua_id: undefined });
      return;
    }
  });
}


// Filtros_Inicio.js
function wireTemas(contenedorTemas) {
  contenedorTemas.addEventListener("click", (e) => {
    const li = e.target.closest("li.list-group-item");
    if (!li || !contenedorTemas.contains(li)) return;

    const yaActivo = li.classList.contains("active");

    // toggle off
    if (yaActivo) {
      li.classList.remove("active");
      UISelections.temaId = null;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, palabras: undefined });
      return;
    }

    // activar seleccion
    contenedorTemas.querySelectorAll("li").forEach((it) => it.classList.remove("active"));
    li.classList.add("active");

    const temaId = parseInt(li.dataset.temaId, 10);
    if (Number.isFinite(temaId)) {
      UISelections.temaId = temaId;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, palabras: [temaId] });
    }
  });
}


function wireFiltroFecha() {
  const cont = document.getElementById("fecha");
  if (!cont) return;

  const items = Array.from(cont.querySelectorAll(":scope > li.list-group-item"));
  const norm = (t) => t?.textContent?.trim().toLowerCase() || "";
  const map = {
    semana: items.find(li => norm(li).includes("última semana") || norm(li).includes("ultima semana")),
    mes:    items.find(li => norm(li).includes("último mes") || norm(li).includes("ultimo mes")),
    selector: items.find(li => norm(li).includes("seleccionar rango")),
  };

  [map.semana, map.mes].forEach(li => {
    if (!li) return;
    li.dataset.range = li === map.semana ? "semana" : "mes";
    li.classList.add("list-group-item-action");
    li.style.cursor = "pointer";
  });

  const from = document.getElementById("date-from");
  const to   = document.getElementById("date-to");
  const btn  = document.getElementById("date-apply");

  const fmt = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const setActive = (li) => {
    cont.querySelectorAll("li").forEach(it => it.classList.remove("active"));
    if (li) li.classList.add("active");
  };

  const applyRange = (fromDate, toDate, activeLi) => {
    const date_from = fmt(fromDate);
    const date_to   = fmt(toDate);
    setActive(activeLi || null);
    if (from) from.value = "";
    if (to)   to.value   = "";

    UISelections.date_from = date_from;
    UISelections.date_to   = date_to;
    updateIndicator();

    cargar({ page: 1, aprobado: 1, date_from, date_to });
  };

  // Clicks rápidos con toggle
  cont.addEventListener("click", (e) => {
    const li = e.target.closest("li.list-group-item");
    if (!li || !cont.contains(li)) return;

    const key = li.dataset.range;
    if (!key) return; // deja que el collapse maneje "Seleccionar rango"

    // Si ya estaba activo -> desactivar y limpiar fechas
    if (li.classList.contains("active")) {
      li.classList.remove("active");
      UISelections.date_from = undefined;
      UISelections.date_to   = undefined;
      updateIndicator();
      cargar({ page: 1, aprobado: 1, date_from: undefined, date_to: undefined });
      return;
    }

    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 1); // mantengo tu lógica original

    if (key === "semana") {
      const inicio = new Date(hoy);
      inicio.setDate(hoy.getDate() - 6);
      applyRange(inicio, hoy, li);
    } else if (key === "mes") {
      const inicio = new Date(hoy);
      inicio.setDate(hoy.getDate() - 29);
      applyRange(inicio, hoy, li);
    }
  });

  // Rango personalizado
  if (btn && from && to) {
    btn.addEventListener("click", () => {
      const date_from = from.value || undefined;
      const date_to   = to.value   || undefined;

      // al usar rango manual, ningún quick activo
      cont.querySelectorAll(":scope > li.list-group-item").forEach(li => li.classList.remove("active"));

      UISelections.date_from = date_from;
      UISelections.date_to   = date_to;
      updateIndicator();

      cargar({ page: 1, aprobado: 1, date_from, date_to });
    });
  }
}





/* ===========================
   BLOQUE H: Inicialización
   =========================== */
document.addEventListener("DOMContentLoaded", async () => {
  // Contenedores del DOM
  const listaFiltros = document.getElementById("lista-filtros");
  const listaTemas = document.getElementById("temas");

  // 1) Cargar y renderizar filtros (facultad -> carreras -> UAs)
  const arbol = await obtenerFiltrosArbol();
  renderFiltros(arbol, listaFiltros);

  // 2) Conectar eventos de búsqueda por icono
  wireBusquedaPorIcono(listaFiltros);

  // 3) Cargar y renderizar temas
  const temas = await obtenerTemasLimpios();
  renderTemas(temas, listaTemas);

  wireTemas(listaTemas);                      
  wireFiltroFecha(); 

  ensureIndicatorEl();
  wireResetButton();
});
