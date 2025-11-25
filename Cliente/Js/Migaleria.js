//==================================================
//--- BLOQUE A: Imports y sesión de usuario
//==================================================
import {ObtenerVideosPorUsuario,ObtenerFacultadporId,ObtenerUaporId,EditarVideos,EliminarVideo,} from "./Fecth_Migaleria.js";
import { modalaviso } from "./Fetch_ListaDeUsuarios.js";
import { SesionActual } from "./Fetch_Login.js";

const SESSION_KEY = "SesionIniciada";
const sesionActual = JSON.parse(localStorage.getItem(SESSION_KEY));
const usuarioActual = await SesionActual(sesionActual);

//==================================================
//--- BLOQUE B: Cachés y helpers de datos (UA / Carrera)
//==================================================

// Caché de UAs para no pedir lo mismo muchas veces
const uaCache = new Map();
async function getUaNombreById(id) {
  if (!id) return { uaNombre: "UA no encontrada", carreraNombre: "Carrera no encontrada" };

  if (uaCache.has(id)) return uaCache.get(id);

  const ua = await ObtenerUaporId(id);

  const info = {
    uaNombre: ua?.nombre || "UA no encontrada",
    carreraNombre: ua?.carrera?.nombre || "Carrera no encontrada",
  };

  uaCache.set(id, info);
  return info;
}

// Helpers por si cambian nombres de campo en futuros datos
function getUA(video) {
  return video.uaNombre || "UA no encontrada";
}

function getCarrera(video) {
  return video.carreraNombre ?? "Carrera no especificada";
}
//==================================================
//--- BLOQUE C: DOM principal (perfil, grid, búsqueda, modal)
//==================================================
const contenedorPerfil = document.getElementById("datos_perfil");
let nombreFacultadUsuario = null;
let facultadUsuario = null;
const grid = document.getElementById("grid_videos");
const inputBusqueda = document.getElementById("search_input");
const btnBuscar = document.getElementById("search_btn");
const btnReset = document.getElementById("reset_btn");
const modalEditarEl = document.getElementById("modal_editar_video");
const formEditar = document.getElementById("form_editar_video");
const inputEditId = document.getElementById("edit_id");
const inputEditTitulo = document.getElementById("edit_titulo");
const inputEditDescripcion = document.getElementById("edit_descripcion");
const inputEditCarrera = document.getElementById("edit_carrera");
const inputEditUrl = document.getElementById("edit_url");
const inputEditUa = document.getElementById("edit_ua");
const errorBox = document.getElementById("error");

let modalEditar;
if (modalEditarEl) {
  modalEditar = new bootstrap.Modal(modalEditarEl);
}

const modalConfirmEliminarEl = document.getElementById("modal_confirm_eliminar");
const btnConfirmEliminar = document.getElementById("btn_confirm_eliminar");
let modalConfirmEliminar;
let idVideoAEliminar = null;

if (modalConfirmEliminarEl) {
  modalConfirmEliminar = new bootstrap.Modal(modalConfirmEliminarEl);
}

//==================================================
//--- BLOQUE D: Perfil de usuario
//==================================================

if (usuarioActual?.admin) {
  nombreFacultadUsuario = "Cuenta de Administrador";
} else {
  const idFacultadUsuario = usuarioActual?.facultad_id;
  if (idFacultadUsuario) {
    facultadUsuario = await ObtenerFacultadporId(idFacultadUsuario);
    nombreFacultadUsuario = facultadUsuario?.nombre ?? "";
  }
}
function pintarPerfil(totalVideos = 0) {
  contenedorPerfil.innerHTML = "";

  const col = document.createElement("div");
  col.className = "p-4";

  col.innerHTML = `
    <h1 class="m-0">${usuarioActual?.usuarioNombre ?? "Mi perfil"}</h1>
    <h5 class="m-0">${nombreFacultadUsuario ?? ""}</h5>
    ${totalVideos} ${totalVideos === 1 ? "Video" : "Videos"}
  `;
  contenedorPerfil.appendChild(col);
}

//==================================================
//--- BLOQUE E: Render de tarjetas de video
//==================================================

function plantillaTarjeta(video) {
  const idYT = video.identificador;
  const titulo = video.titulo || "Sin título";
  const ua = getUA(video);
  const carrera = getCarrera(video);

  const thumb = `https://img.youtube.com/vi/${idYT}/hqdefault.jpg`;
  const href = `/Cliente/Html/Video.html?id=${video.id}`;

  const enRevision = Number(video.aprobado) !== 1;
  const cardRevisionClass = enRevision ? "border border-warning" : "";
  const etiquetaRevision = enRevision
    ? `
      <div class="position-absolute top-0 start-0 m-2">
        <span class="badge bg-warning text-dark small">Video en revisión</span>
      </div>
    `
    : "";

  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <div class="position-relative h-100">

        <a href="${href}" class="card-link text-decoration-none d-block h-100">
          <div class="card hover-border h-100 ${cardRevisionClass}">
            <div class="video-img-wrapper">
              <img src="${thumb}" loading="lazy" class="card-img-top" alt="${titulo}">
            </div>
            <div class="card-body">
              <h6 class="card-title mb-1 text-truncate" title="${titulo}">${titulo}</h6>
              <p class="mb-0 small text-muted text-truncate" title="${ua}">${ua}</p>
              <p class="mb-0 small text-muted text-truncate" title="${carrera}">
                <i class="bi bi-journal-bookmark"></i> ${carrera}
              </p>
            </div>
          </div>
        </a>

        ${etiquetaRevision}

        <div class="position-absolute top-0 end-0 m-2 d-flex gap-1 z-3">
          <button 
            type="button" 
            class="btn btn-sm bg-white btn-outline-dark btn-edit" 
            data-id="${video.id}" 
            title="Editar"
          >
            <i class="bi bi-pencil"></i>
          </button>
          <button 
            type="button" 
            class="btn btn-sm bg-white btn-outline-dark btn-delete" 
            data-id="${video.id}" 
            title="Borrar"
          >
            <i class="bi bi-trash"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderVideos(lista = []) {
  if (!Array.isArray(lista) || lista.length === 0) {
    grid.innerHTML = `
      <div class="col-12 p-4 text-center text-muted">
        No hay videos para mostrar.
      </div>
    `;
    pintarPerfil(0);
    return;
  }

  const ordenados = [...lista].sort((a, b) => {
    const da = Date.parse(a.fecha_de_registro || "") || 0;
    const db = Date.parse(b.fecha_de_registro || "") || 0;
    return db - da;
  });

  grid.innerHTML = ordenados.map(plantillaTarjeta).join("");
  pintarPerfil(ordenados.length);
}
function renderSkeleton(cantidad = 8) {
  grid.innerHTML = Array.from({ length: cantidad })
    .map(
      () => `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
        <div class="card">
          <div class="ratio ratio-16x9 bg-secondary-subtle"></div>
          <div class="card-body">
            <div class="placeholder-wave">
              <span class="placeholder col-8"></span>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");
}

//==================================================
//--- BLOQUE F: Estado y lógica de búsqueda/filtro
//==================================================

let videosOriginal = [];
let videosFiltrados = [];

function normalizar(str) {
  return (str ?? "")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function aplicaFiltro(q) {
  const n = normalizar(q);
  if (!n) return [...videosOriginal];

  return videosOriginal.filter((v) => {
    const campos = [
      v.titulo,
      v.descripcion,
      v.uaNombre,
      getUA(v),
      getCarrera(v),
    ]
      .map(normalizar)
      .join(" ");

    return campos.includes(n);
  });
}
let timeoutBusqueda;

function onBuscar() {
  clearTimeout(timeoutBusqueda);
  timeoutBusqueda = setTimeout(() => {
    const q = inputBusqueda?.value.trim() ?? "";
    videosFiltrados = aplicaFiltro(q);
    renderVideos(videosFiltrados);
  }, 180);
}

btnBuscar?.addEventListener("click", onBuscar);

inputBusqueda?.addEventListener("input", onBuscar);

inputBusqueda?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") onBuscar();
});

btnReset?.addEventListener("click", () => {
  if (!inputBusqueda) return;
  inputBusqueda.value = "";
  videosFiltrados = [...videosOriginal];
  renderVideos(videosFiltrados);
  inputBusqueda.focus();
});

//==================================================
//--- BLOQUE G: Manejo de clics (editar / borrar)
//==================================================
function manejarEditarVideo(idVideo) {
  if (!modalEditar) return;

  const video = videosOriginal.find((v) => String(v.id) === String(idVideo));
  if (!video) {
    console.warn("No encontré el video con id:", idVideo);
    return;
  }

  if (errorBox) errorBox.textContent = "";

  inputEditId.value = video.id;
  inputEditTitulo.value = video.titulo ?? "";
  inputEditDescripcion.value = video.descripcion ?? "";
  inputEditCarrera.value = video.carreraNombre ?? "";
  inputEditCarrera.disabled = true;
  inputEditUa.value = video.uaNombre ?? "";
  inputEditUa.disabled = true;
  inputEditUrl.value = "";

  modalEditar.show();
}


async function manejarEliminarVideo(idVideo) {
  idVideoAEliminar = idVideo;
  if (modalConfirmEliminar) {
    modalConfirmEliminar.show();
    return;
  }
  await ejecutarEliminacion(idVideo);
}

if (btnConfirmEliminar) {
  btnConfirmEliminar.addEventListener("click", async () => {
    if (!idVideoAEliminar) return;

    await ejecutarEliminacion(idVideoAEliminar);

    idVideoAEliminar = null;
    if (modalConfirmEliminar) {
      modalConfirmEliminar.hide();
    }
  });
}

async function ejecutarEliminacion(idVideo) {
  const status = await EliminarVideo(idVideo);
  if (!status.success) {
    modalaviso("Error al eliminar el video");
    return;
  }
  modalaviso("Video eliminado correctamente");
  videosOriginal = videosOriginal.filter(v => String(v.id) !== String(idVideo));
  videosFiltrados = videosFiltrados.filter(v => String(v.id) !== String(idVideo));

  renderVideos(videosFiltrados);
}


grid.addEventListener("click", (e) => {
  const btnEdit = e.target.closest(".btn-edit");
  const btnDelete = e.target.closest(".btn-delete");

  if (!btnEdit && !btnDelete) return;

  e.preventDefault();
  e.stopPropagation();

  if (btnEdit) {
    const id = btnEdit.dataset.id;
    manejarEditarVideo(id);
    return;
  }

  if (btnDelete) {
   const id = parseInt(btnDelete.dataset.id, 10); 
    
    manejarEliminarVideo(id);
    return;
  }
});

//==================================================
//--- BLOQUE H: Edición de video (submit del modal)
//==================================================

function ObtenerIdYoutube(url) {
  
  const regex =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[&?].*)?$/;

  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

if (formEditar) {
  formEditar.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (errorBox) errorBox.textContent = "";

    const id = inputEditId.value;
    const idx = videosOriginal.findIndex((v) => String(v.id) === String(id));
    if (idx === -1) {
      console.warn("No encontré el video a actualizar:", id);
      return;
    }

    const video = videosOriginal[idx];

    const nuevoTitulo = inputEditTitulo.value.trim();
    const nuevaDescripcion = inputEditDescripcion.value.trim();
    const nuevaURL = inputEditUrl.value.trim();
    let identificador = null;

  if (nuevaURL === "") {
    identificador = null;
  } else {
    identificador = ObtenerIdYoutube(nuevaURL);
    if (!identificador) {
      if (errorBox) errorBox.textContent = "URL no válida";
      return;
    }
  }

    const ua_id = video.ua_id;
    const palabras = video.palabras;

    const VideoEditado = await EditarVideos(
      id,
      nuevoTitulo,
      nuevaDescripcion,
      ua_id,
      palabras,
      identificador
    );

    if (VideoEditado.success === false) {
      if (errorBox) errorBox.textContent = VideoEditado.mensaje;
      return;
    }
    // Actualizar el video en memoria
    videosOriginal[idx] = {
      ...video,
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
    };

    const q = inputBusqueda?.value.trim() ?? "";
    videosFiltrados = aplicaFiltro(q);
    renderVideos(videosFiltrados);

    modalEditar.hide();
  });
}

//==================================================
//--- BLOQUE I: Carga inicial de videos
//==================================================

(async () => {
  try {
    renderSkeleton(8);

    const idUsuario = usuarioActual?.usuarioId ?? 1;


    const respuesta = await ObtenerVideosPorUsuario(idUsuario);
    const videos = respuesta?.videos ?? respuesta ?? [];

    videosOriginal = Array.isArray(videos) ? videos : [];

    const uaIds = [...new Set(videosOriginal.map((v) => v.ua_id).filter(Boolean))];

    // precarga nombres y llena caché
    await Promise.all(uaIds.map((id) => getUaNombreById(id)));

    // enriquecer cada video con uaNombre y carreraNombre desde la caché
    videosOriginal = videosOriginal.map((v) => ({
      ...v,
      ...(uaCache.get(v.ua_id) || {
        uaNombre: "UA no encontrada",
        carreraNombre: "Carrera no encontrada",
      }),
    }));

    videosFiltrados = [...videosOriginal];
    renderVideos(videosFiltrados);
  } catch (err) {
    console.error("Error cargando videos:", err);
    grid.innerHTML = `
      <div class="col-12 p-4 text-center text-danger">
        Ocurrió un error al cargar los videos. Intenta nuevamente.
      </div>
    `;
    pintarPerfil(0);
  }
})();
