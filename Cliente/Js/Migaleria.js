// /Cliente/Js/Migaleria.js
import { ObtenerVideosPorUsuario,ObtenerFacultadporId ,ObtenerUaporId} from "./Fecth_Migaleria.js";


// --- caché de UAs por id ---
const uaCache = new Map();
async function getUaNombreById(id) {
  if (!id) return "UA no encontrada";
  if (uaCache.has(id)) return uaCache.get(id);
  const ua = await ObtenerUaporId(id);               // ← trae { id, nombre, ... }
 const info = {
    uaNombre: ua?.nombre || "UA no encontrada",
    carreraNombre: ua?.carrera?.nombre || "Carrera no encontrada",
  };
  uaCache.set(id,info);
  return info;
}

// --- Perfil / encabezado ---
const contenedorPerfil = document.getElementById("datos_perfil");
const usuarioActual = (() => {
  try {
    return JSON.parse(localStorage.getItem("Usuario_SesionIniciada")) || {};
  } catch {
    return {};
  }
})();

console.log("Usuario actual: ",usuarioActual);

let NombredelaFacultaddelUsusario = null;
let FacultaddelUsuario = null;


if(usuarioActual.admin){
  NombredelaFacultaddelUsusario = "Cuenta de Administrador";
}else{
const idFacultadelusuario = usuarioActual.facultad;
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

// Helpers para tomar autor y carrera aunque cambien los nombres de campo
function getAutor(video) {
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
  const autor = getAutor(video);
  const carrera = getCarrera(video);

  const thumb = `https://img.youtube.com/vi/${idYT}/hqdefault.jpg`;
  const href = `/Cliente/Html/Video copy.html?v=${encodeURIComponent(idYT)}&id=${encodeURIComponent(video.id)}`;

  return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
      <a href="${href}" class="card-link text-decoration-none">
        <div class="card hover-border h-100">
          <div class="video-img-wrapper">
            <img src="${thumb}" loading="lazy" class="card-img-top" alt="${titulo}">
          </div>
          <div class="card-body">
            <h6 class="card-title mb-1 text-truncate" title="${titulo}">${titulo}</h6>
            <p class="mb-0 small text-muted text-truncate" title="${autor}">UA: ${autor}</p>
            <p class="mb-0 small text-muted text-truncate" title="${carrera}">Programa: ${carrera}</p>
          </div>
        </div>
      </a>
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

// --- Estado para filtro ---
let videosOriginal = [];
let videosFiltrados = [];

// --- Lógica de búsqueda ---
const input = document.getElementById("search_input");
const btnBuscar = document.getElementById("search_btn");
const btnReset = document.getElementById("reset_btn");

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
      getAutor(v),
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
      console.log("usuario actual id: ",usuarioActual.id);
    const idUsuario = usuarioActual?.id ?? 1;
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
