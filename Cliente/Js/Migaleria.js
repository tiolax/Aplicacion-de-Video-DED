// /Cliente/Js/Migaleria.js
import { ObtenerVideosPorUsuario,ObtenerFacultadporId ,ObtenerUaporId,EditarVideos} from "./Fecth_Migaleria.js";
import {SesionActual} from "./Fetch_Login.js"
const SESSION_KEY = "SesionIniciada";
const sesionActual = JSON.parse(localStorage.getItem(SESSION_KEY));
const usuarioActual = await SesionActual(sesionActual);

// --- caché de UAs por id ---
const uaCache = new Map();
async function getUaNombreById(id) {
  if (!id ) return "UA no encontrada";
  if (uaCache.has(id)) return uaCache.get(id);
  const ua = await ObtenerUaporId(id);          
 const info = {
    uaNombre: ua?.nombre || "UA no encontrada",
    carreraNombre: ua?.carrera?.nombre || "Carrera no encontrada",
  };
  uaCache.set(id,info);
  return info;
}

// --- Perfil / encabezado ---
const contenedorPerfil = document.getElementById("datos_perfil");

let NombredelaFacultaddelUsusario = null;
let FacultaddelUsuario = null;


if(usuarioActual.admin){
  NombredelaFacultaddelUsusario = "Cuenta de Administrador";
}else{
const idFacultadelusuario = usuarioActual.facultad_id;
FacultaddelUsuario = await ObtenerFacultadporId(idFacultadelusuario);
NombredelaFacultaddelUsusario = FacultaddelUsuario.nombre;
}


function pintarPerfil(totalVideos = 0) {
  contenedorPerfil.innerHTML = "";
  const col = document.createElement("div");
  col.innerHTML = `
    <div class="p-4">
      <h1 class="m-0">${usuarioActual?.nombre ?? "Mi perfil"}</h1>
      <h5 class="m-0">${NombredelaFacultaddelUsusario ?? ""}</h5>
      ${totalVideos} ${totalVideos === 1 ? "Video" : "Videos"}
    </div>
  `;
  contenedorPerfil.appendChild(col);
}

// --- Render de tarjetas ---
const grid = document.getElementById("grid_videos");

//--Modal Editar
const modalEditarEl = document.getElementById("modal_editar_video");
const formEditar = document.getElementById("form_editar_video");

const inputEditId = document.getElementById("edit_id");
const inputEditTitulo = document.getElementById("edit_titulo");
const inputEditDescripcion = document.getElementById("edit_descripcion");
const inputEditCarrera = document.getElementById("edit_carrera");
const inputEditUrl = document.getElementById("edit_url");
const inputEditUa = document.getElementById("edit_ua");




let modalEditar;
if (modalEditarEl) {
  modalEditar = new bootstrap.Modal(modalEditarEl);
}





// Helpers para tomar ua y carrera aunque cambien los nombres de campo
function getUA(video) {
  return video.uaNombre || "UA no encontrada";
}

function getCarrera(video) {
  return (
    video.carreraNombre ??
    "Carrera no especificada"
  );
}

function plantillaTarjeta(video) {
  const idYT = video.identificador;
  const titulo = video.titulo || "Sin título";
  const ua = getUA(video);
  const carrera = getCarrera(video);

  const thumb = `https://img.youtube.com/vi/${idYT}/hqdefault.jpg`;
  const href = `/Cliente/Html/Video.html?id=${video.id}`;


 const enRevision = Number(video.aprobado) !== 1;

  const cardRevisionClass = enRevision ? "border border-warning" : "";
  // Etiqueta que se mostrará solo si está en revisión
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
        <!-- BOTONES EDITAR / BORRAR EN ESQUINA SUPERIOR DERECHA -->
        <div class="position-absolute top-0 end-0 m-2 d-flex gap-1 z-3">
          <button 
            type="button" 
            class="btn btn-sm btn-light btn-edit" 
            data-id="${video.id}" 
            title="Editar"
          >
            <i class="bi bi-pencil"></i>
          </button>
          <button 
            type="button" 
            class="btn btn-sm btn-danger btn-delete" 
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

//Estado para filtro 
let videosOriginal = [];
let videosFiltrados = [];

//Lógica de búsqueda 
const input = document.getElementById("search_input");
const btnBuscar = document.getElementById("search_btn");
const btnReset = document.getElementById("reset_btn");

//Manejo de clicks en los botones de editar / borrar dentro del grid
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
    const id = btnDelete.dataset.id;
    manejarEliminarVideo(id);
    return;
  }
});


function manejarEliminarVideo(idVideo) {
  console.log("Eliminar video:", idVideo);
}

function manejarEditarVideo(idVideo) {
  if (!modalEditar) return;

  const video = videosOriginal.find(v => String(v.id) === String(idVideo));
  if (!video) {
    console.warn("No encontré el video con id:", idVideo);
    return;
  }

  inputEditId.value = video.id;
  inputEditTitulo.value = video.titulo ?? "";
  inputEditDescripcion.value = video.descripcion ?? "";
  inputEditCarrera.value = video.carreraNombre ?? "";
  inputEditCarrera.disabled = true;
  inputEditUa.value = video.uaNombre ?? "";
  inputEditUa.disabled =true;

  modalEditar.show();
}

if (formEditar) {
  formEditar.addEventListener("submit", async (e) => {
    e.preventDefault();

    const id = inputEditId.value;
    const idx = videosOriginal.findIndex(v => String(v.id) === String(id));
    if (idx === -1) {
      console.warn("No encontré el video a actualizar:", id);
      return;
    }

    const video =videosOriginal[idx];

    const nuevoTitulo = inputEditTitulo.value.trim();
    const nuevaDescripcion = inputEditDescripcion.value.trim();
    const nuevaURL = inputEditUrl.value.trim();
    const identificador = ObtenerIdYoutube(nuevaURL);
    if(identificador == null){
      const error = document.getElementById("error").innerHTML = "URL no valida";
     return
    }



    const ua_id = video.ua_id;    
    const palabras = video.palabras;  

    const VideoEditado = await EditarVideos(id,nuevoTitulo,nuevaDescripcion,ua_id,palabras,identificador);

    if(VideoEditado.success == false){
     const error = document.getElementById("error").innerHTML = VideoEditado.mensaje;
     return
    }
    videosOriginal[idx] = video;

    const q = input.value.trim();
    videosFiltrados = aplicaFiltro(q);
    renderVideos(videosFiltrados);

    modalEditar.hide();
  });
}



function ObtenerIdYoutube(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[&?].*)?$/;

    const match = url.match(regex); 
    if(match && match[1]){
        return match[1];
    }
    return null;
    
}


function normalizar(str) {
  return (str ?? "").toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
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
    return campos.includes(n) || campos.indexOf(n) >= 0 || campos.match ? campos.match(n) : campos.includes(n);
  });
}

// Pequeño debounce
let t;
function onBuscar() {
  clearTimeout(t);
  t = setTimeout(() => {
    const q = input.value.trim();
    videosFiltrados = aplicaFiltro(q);
    renderVideos(videosFiltrados);
  }, 180);
}

btnBuscar?.addEventListener("click", onBuscar);
input?.addEventListener("input", onBuscar);
input?.addEventListener("keydown", (e) => {
  if (e.key === "Enter") onBuscar();
});

btnReset?.addEventListener("click", () => {
  input.value = "";
  videosFiltrados = [...videosOriginal];
  renderVideos(videosFiltrados);
  input.focus();
});

// --- Cargar videos ---
(async () => {
  try {
    renderSkeleton(8);
    const idUsuario = usuarioActual?.usuarioId ?? 1;

    console.log("Id del usuario: ",idUsuario);

    const respuesta = await ObtenerVideosPorUsuario(idUsuario);
    const videos = respuesta?.videos ?? respuesta ?? [];

    videosOriginal = Array.isArray(videos) ? videos : [];
    const uaIds = [...new Set(videosOriginal.map(v => v.ua_id).filter(Boolean))];

    //precarga nombres y llena caché
    await Promise.all(uaIds.map(id => getUaNombreById(id)));
    videosOriginal = videosOriginal.map(v => ({
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
