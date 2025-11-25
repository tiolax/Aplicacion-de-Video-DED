// /Cliente/Js/VideosEnEsperaAdmin.js
import { ObtenerVideosEnEspera, ObtenerUaporId, ObtenerUsuarioPorId } from "./Fetch_VideosEnEsperaAdmin.js";

document.addEventListener("DOMContentLoaded", () => {
  initTablaAdmin();
});



function normalizePalabras(pals) {
  if (!Array.isArray(pals)) return [];
  return pals.map((p) => {
    // Caso recomendado del modelo: { id, nombre }
    if (p && typeof p === "object" && "id" in p && "nombre" in p) {
      return { id: Number(p.id), nombre: String(p.nombre) };
    }
    // Caso crudo Prisma con tabla intermedia: { palabra_clave: { id, nombre } }
    if (p && typeof p === "object" && p.palabra_clave) {
      const pc = p.palabra_clave;
      return { id: Number(pc.id), nombre: String(pc.nombre) };
    }
    // Fallbacks por si viniera un número o un string
    if (typeof p === "number") return { id: p, nombre: String(p) };
    if (typeof p === "string") return { id: null, nombre: p };
    return { id: null, nombre: "" };
  });
}


async function initTablaAdmin() {
  const tbody = document.getElementById("tbody-admin")
            || document.querySelector("table.table tbody");
  if (!tbody) return;

  renderLoading(tbody);

  try {
    // 1) Trae videos en espera 
    const lista = await ObtenerVideosEnEspera(); // ← await al fetch
    const videos = Array.isArray(lista) ? lista : [];
    renderHeader(videos.length);
    if (!videos.length) {
      renderEmpty(tbody, "No hay videos en espera.");
      return;
    }

    // 2) Enriquecer con UA → Carrera usando caché
    const uaCache = new Map(); 
    const uaIds = [...new Set(videos.map(v => v.ua_id).filter(Boolean))];

    await Promise.all(uaIds.map(async (uaId) => {
      if (uaCache.has(uaId)) return;
      const ua = await ObtenerUaporId(uaId);
      uaCache.set(uaId, {
        ua_nombre: ua?.nombre ?? null,
        carrera_nombre: ua?.carrera?.nombre ?? null,
      });
    }));

// 2.1) Enriquecer USUARIO con caché por id
const userCache = new Map(); 
const userIds = [...new Set(videos.map(v => v.usuario_id).filter(Boolean))];

await Promise.all(userIds.map(async (uid) => {
  if (userCache.has(uid)) return;
  const u = await ObtenerUsuarioPorId(uid);
  // ajusta si tu API usa otro campo (nombre, full_name, etc.)
  userCache.set(uid, u?.nombre ?? u?.nombre_de_usuario ?? u?.name ?? `#${uid}`);
}));

    // 3) Render filas
    tbody.innerHTML = videos.map((v, i) => {
    const palabrasNorm = normalizePalabras(v.palabras);
      const info = uaCache.get(v.ua_id) || {};
      const num = i + 1;

      const titulo   = safe(v.titulo) || "Sin título";
      const usuario  = userCache.get(v.usuario_id) 
              ?? v.usuario?.nombre 
              ?? v.nombre_de_usuario 
              ?? "—";
      const uaNom    = info.ua_nombre ?? v.ua_nombre ?? "—";
      const licNom   = info.carrera_nombre ?? v.carrera_nombre ?? "—";

      // Ajusta el campo de fecha según tu API: created_at / fecha_envio / fecha_registro
      const fechaISO = v.created_at ?? v.fecha_envio ?? v.fecha_de_registro ?? v.fecha;
      const fecha    = isoToDMY(fechaISO) ?? "—";

      const thumb = getThumb(v);


      return `
        <tr data-video='${safe(JSON.stringify({
          id: v.id,
          ua_id: v.ua_id,
          titulo: v.titulo,
          descripcion: v.descripcion,
          usuario: usuario,
          usuario_id: v.usuario_id,
          identificador: v.identificador,
          fecha: v.fecha_de_registro,          
          palabras: palabrasNorm  || [] 
          
        }))}'>
          <th scope="row">${num}</th>
          <td class="align-middle">
            <div class="d-flex align-items-center gap-3">
              <img src="${thumb}" class="rounded" style="width:120px;height:auto;object-fit:cover" alt="Video">
              <div class="fw-semibold">${titulo}</div>
            </div>
          </td>
          <td class="align-middle">${safe(usuario)}</td>
          <td class="align-middle">${safe(licNom)}</td>
          <td class="align-middle">${safe(uaNom)}</td>
          <td class="align-middle">${fecha}</td>
        </tr>
      `;
    }).join("");

    // tras hacer tbody.innerHTML = ...;
[...tbody.querySelectorAll("tr[data-video]")].forEach(tr => {
  tr.style.cursor = "pointer";
  tr.addEventListener("click", () => {
    const data = tr.getAttribute("data-video"); // viene del template
    try {
      const video = JSON.parse(data);
      // Guarda el payload para la vista previa (minimizamos futuras consultas)
      sessionStorage.setItem("previewVideo", JSON.stringify(video));
      // navega con el id
      const id = video.id || video.video_id;
      window.location.href = "/Cliente/Html/VistaPrevia.html?id=" + encodeURIComponent(id);
    } catch {
      // si algo falla, igual navega con el id (la vista previa intentará resolver)
      const maybeId = tr.getAttribute("data-id") || "";
      window.location.href = "/Cliente/Html/VistaPrevia.html?id=" + encodeURIComponent(maybeId);
    }
  });
});



  } catch (err) {
    console.error("Error cargando videos en espera:", err);
    renderEmpty(tbody, "Ocurrió un error al cargar los videos.");
  }
}

/* ----------------- Helpers UI ----------------- */
function renderLoading(tbody) {
  tbody.innerHTML = `
    <tr><td colspan="6" class="text-center py-4">Cargando…</td></tr>
  `;
}
function renderEmpty(tbody, msg) {
  tbody.innerHTML = `
    <tr><td colspan="6" class="text-center py-4 text-muted">${safe(msg)}</td></tr>
  `;
}
function isoToDMY(iso) {
  if (!iso) return null;
  const d = new Date(iso);
  if (isNaN(d)) return null;
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}
function getThumb(v) {
  if (v?.identificador) {
    return `https://img.youtube.com/vi/${encodeURIComponent(v.identificador)}/hqdefault.jpg`;
  }
  if (v?.thumbnail) return v.thumbnail;
  return "/Cliente/Recursos/gente_LOW.jpg";
}
function safe(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function getUsuarioSesion() {
  try { return JSON.parse(localStorage.getItem("Usuario_SesionIniciada")); }
  catch { return null; }
}
function setHeader(name, faculty, count) {
  const $ = (sel) => document.getElementById(sel);
  const n = $("hdrUserName");
  const f = $("hdrUserFaculty");
  const c = $("hdrVideoCount");
  if (n) n.textContent = name || "Usuario";
  if (f) f.textContent = faculty || "—";
  if (c) c.textContent = String(count ?? 0);
}
function renderHeader(count) {
  const u = getUsuarioSesion() || {};
  const name =
    u.nombre ?? u.nombre_de_usuario ?? u.name ?? "Usuario";
  const faculty =
    u?.facultadnombre ??
    u?.facultad?.nombre ??
    u?.carrera?.facultad?.nombre ??
    "—";
  setHeader(name, faculty, count);
}
