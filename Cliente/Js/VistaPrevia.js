import { ObtenerUaporId, ObtenerUsuarioPorId, ActualizarVideoEstado } from "./Fetch_VideosEnEsperaAdmin.js";

document.addEventListener("DOMContentLoaded", initPreview);

async function initPreview() {
  const els = pickEls();
  const id = getParam("id");
  if (!id) {
    renderError("No se proporcionó el id del video.");
    return;
  }



function normalizePalabras(pals) {
  if (!Array.isArray(pals)) return [];
  return pals.map((p) => {
    if (p && typeof p === "object" && "id" in p && "nombre" in p) {
      return { id: Number(p.id), nombre: String(p.nombre) };
    }
    if (p && typeof p === "object" && p.palabra_clave) {
      const pc = p.palabra_clave;
      return { id: Number(pc.id), nombre: String(pc.nombre) };
    }
    if (typeof p === "number") return { id: p, nombre: String(p) };
    if (typeof p === "string") return { id: null, nombre: p };
    return { id: null, nombre: "" };
  });
}




  // 1) payload que venía desde la tabla
  let video = getPreviewFromSession();
  if (!video || Number(video.id) !== Number(id)) {
    // Fallback opcional: si tienes un fetch por id, úsalo aquí:
    // video = await safeObtenerVideoPorId(id);
    // Por ahora, si no hay payload, mostramos error legible:
    if (!video) {
      renderError("Abre esta vista desde la lista de videos para ver los detalles.");
      return;
    }
  }

  // 2) enriquecer usuario (si solo tenemos usuario_id)
  const usuarioNombre = await resolveUsuario(video.usuario_id);

  // 3) enriquecer UA → Carrera
  const uaInfo = await resolveUa(video.ua_id); // {ua_nombre, carrera_nombre}

  // 4) preparar datos visuales
  const titulo       = video.titulo ?? "Sin título";
  const descripcion  = video.descripcion ?? "Sin descripción";
  const fechaISO     = video.fecha ?? video.created_at ?? video.fecha_de_registro;
  const fechaDMY     = isoToDMY(fechaISO) ?? "—";
  const palabras     = normalizePalabras(video.palabras);


  const embedUrl     = buildEmbed(video); // arma URL del reproductor (YouTube)

  // 5) render al DOM
  els.uaNombre.textContent       = uaInfo.ua_nombre ?? "—";
  els.carreraNombre.textContent  = uaInfo.carrera_nombre ?? "—";
  els.usuarioNombre.textContent  = usuarioNombre ?? "—";
  els.videoTitulo.textContent    = titulo;
  els.videoDescripcion.textContent = descripcion;
  els.videoFecha.textContent     = fechaDMY;
  els.facultadNombre.textContent = uaInfo.facultad_nombre ?? "—";
 
  renderTemas(els.temasContainer, palabras);

  // reproductor
  if (embedUrl) {
    els.player.innerHTML = `<iframe width="100%" height="100%" src="${embedUrl}" title="Video" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    els.player.innerHTML = `<div class="d-flex align-items-center justify-content-center bg-dark text-white">
      <div class="p-3">No se pudo construir el reproductor.</div>
    </div>`;
  }
}

/* ---------------- helpers de datos ---------------- */
function getParam(k) {
  const u = new URL(location.href);
  return u.searchParams.get(k);
}
function getPreviewFromSession() {
  try { return JSON.parse(sessionStorage.getItem("previewVideo") || "null"); }
  catch { return null; }
}
async function resolveUsuario(usuario_id) {
  if (!usuario_id) return null;
  try {
    const r = await ObtenerUsuarioPorId(usuario_id);
    // ajusta a tu shape real
    return r?.usuario?.nombre ?? r?.nombre ?? r?.nombre_de_usuario ?? `#${usuario_id}`;
  } catch {
    return `#${usuario_id}`;
  }
}
async function resolveUa(ua_id) {
  if (!ua_id) return { ua_nombre: null, carrera_nombre: null,facultad_nombre: null };
  try {
    const ua = await ObtenerUaporId(ua_id);
    return {
      ua_nombre: ua?.nombre ?? null,
      carrera_nombre: ua?.carrera?.nombre ?? null,
      facultad_nombre:  ua?.carrera?.facultad?.nombre ?? null
    };
  } catch {
    return { ua_nombre: null, carrera_nombre: null,facultad_nombre: null };
  }
}

/* ---------------- helpers visuales ---------------- */
function pickEls() {
  return {
    uaNombre:       document.getElementById("uaNombre"),
    carreraNombre:  document.getElementById("carreraNombre"),
    usuarioNombre:  document.getElementById("usuarioNombre"),
    videoTitulo:    document.getElementById("videoTitulo"),
    videoDescripcion: document.getElementById("videoDescripcion"),
    videoFecha:     document.getElementById("videoFecha"),
    temasContainer: document.getElementById("temasContainer"),
    player:         document.getElementById("player"),
    facultadNombre: document.getElementById("facultadNombre")
  };
}
function renderError(msg) {
  const main = document.querySelector("main") || document.body;
  main.innerHTML = `<div class="container py-5"><div class="alert alert-warning">${safe(msg)}</div></div>`;
}
function renderTemas(container, palabras) {
  container.innerHTML = "";
  if (!palabras || !palabras.length) return;
  palabras.forEach(p => {
    const label = (p && typeof p === "object") ? (p.nombre ?? "") : String(p ?? "");
    const pill = document.createElement("div");
    pill.className = "p-2";
    pill.innerHTML = `<p class="mb-0" style="color: gray; font-size: small;">${safe(label)}</p>`;
    container.appendChild(pill);
  });
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
function buildEmbed(v) {
  // Caso típico: guardas el identificador de YouTube (p.ej. "ZpDqxUKZ3GE")
  if (v?.identificador) {
    return `https://www.youtube.com/embed/${encodeURIComponent(v.identificador)}`;
  }
  // Si en tu modelo guardas URL completa, intenta extraer el ID
  const url = v?.url || v?.enlace || v?.link;
  if (url) {
    const id = extractYouTubeId(url);
    if (id) return `https://www.youtube.com/embed/${encodeURIComponent(id)}`;
  }
  return null;
}
function extractYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/embed\/([^/?]+)/);
    return m ? m[1] : null;
  } catch { return null; }
}
function safe(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}





function goBackToList() {
  window.location.href = "/Cliente/Html/VideoPendientesAdmin.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const id = getParam("id");
  const btnAprobar = document.getElementById("btnAprobar");
  const btnRechazar = document.getElementById("btnRechazar");
  const btnConfirmAprobar = document.getElementById("btnConfirmAprobar");
  const btnConfirmRechazar = document.getElementById("btnConfirmRechazar");
  const modalAprobar = new bootstrap.Modal(document.getElementById("modalAprobar"));
  const modalRechazar = new bootstrap.Modal(document.getElementById("modalRechazar"));

  if (!id) return;

  // abrir modales
  btnAprobar?.addEventListener("click", () => modalAprobar.show());
  btnRechazar?.addEventListener("click", () => {
    document.getElementById("rejError").textContent = "";
    modalRechazar.show();
  });

  // confirmar aprobar
  btnConfirmAprobar?.addEventListener("click", async () => {
    try {
      btnConfirmAprobar.disabled = true;
      btnConfirmAprobar.textContent = "Guardando...";
      await ActualizarVideoEstado(Number(id), 1, null);
      modalAprobar.hide();
      goBackToList();
    } catch (e) {
      alert(e.message || "Error al aprobar");
    } finally {
      btnConfirmAprobar.disabled = false;
      btnConfirmAprobar.textContent = "Sí, aprobar";
    }
  });

  // confirmar rechazar
  btnConfirmRechazar?.addEventListener("click", async () => {
    const txt = document.getElementById("txtMotivo");
    const err = document.getElementById("rejError");
    const motivo = (txt.value || "").trim();

    if (!motivo) {
      err.textContent = "Por favor escribe la razón del rechazo.";
      txt.focus();
      return;
    }

    try {
      btnConfirmRechazar.disabled = true;
      btnConfirmRechazar.textContent = "Guardando...";
      await ActualizarVideoEstado(Number(id), 2, motivo);
      modalRechazar.hide();
      goBackToList();
    } catch (e) {
      err.textContent = e.message || "Error al rechazar";
    } finally {
      btnConfirmRechazar.disabled = false;
      btnConfirmRechazar.textContent = "Rechazar";
    }
  });
});