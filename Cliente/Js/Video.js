

import {ObtenerVideoPorId } from "./Fetch_Video.js";
document.addEventListener("DOMContentLoaded", initVideoPage);

async function initVideoPage() {
  const els = pickEls();

  // 1) leer parámetros
  const id = getParam("id");
  const identificador = getParam("identificador");

  if (!id && !identificador) {
    return renderError("Falta el parámetro 'id' o 'identificador'.");
  }

  try {
    // 2) fetch al endpoint ideal
    const data = await fetchVideoDetalle({ id, identificador });
    const v = data?.video;
    if (!v) return renderError("No se encontró el video.");

    // 3) preparar campos
    const titulo      = v.titulo ?? "Sin título";
    const descripcion = v.descripcion ?? "Sin descripción";
    const fechaDMY    = isoToDMY(v.fecha_de_registro) ?? "—";
    const usuarioNom  = v.usuario?.nombre ?? "—";
    const uaNom       = v.ua?.nombre ?? "—";
    const carrNom     = v.ua?.carrera?.nombre ?? "—";
    const facNom      = v.ua?.carrera?.facultad?.nombre ?? "—";
    const palabras    = Array.isArray(v.palabras) ? v.palabras : [];
    const embedUrl    = buildYouTubeEmbed(v.identificador ?? identificador);

    // 4) pintar
    els.videoTitulo.textContent     = titulo;
    els.videoDescripcion.textContent = descripcion;
    els.videoFecha.textContent      = fechaDMY;

    els.usuarioNombre.textContent   = usuarioNom;
    els.uaNombre.textContent        = uaNom;
    els.carreraNombre.textContent   = carrNom;
    els.facultadNombre.textContent  = facNom;

    renderPalabras(els.temasContainer, palabras);

    if (embedUrl) {
      els.player.innerHTML = `<iframe width="100%" height="100%" src="${embedUrl}" title="Video" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    } else {
      els.player.innerHTML = `<div class="d-flex align-items-center justify-content-center bg-dark text-white p-3">
        No fue posible embeder el video.
      </div>`;
    }

    // 5) copiar enlace
    const btnCopy = document.getElementById("btnCopyLink");
    btnCopy?.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(location.href);
        btnCopy.textContent = "¡Copiado!";
        setTimeout(() => (btnCopy.textContent = "Copiar enlace"), 1200);
      } catch {
        alert("No se pudo copiar. Copia manualmente la URL del navegador.");
      }
    });
  } catch (e) {
    console.error(e);
    renderError("Ocurrió un error al cargar el video.");
  }
}

/* ---------------- helpers de datos ---------------- */
async function fetchVideoDetalle({ id, identificador }) {



const data = ObtenerVideoPorId(id);
return data;
 /* const base = (window.API_URL || "").replace(/\/+$/, "");
  const url = id
    ? `${base}/videos/obtener-por-id?id=${id}`
    : null;

  const res = await fetch(url, { headers: { "Accept": "application/json" } });
  if (!res.ok) throw new Error("Fetch error");
  return await res.json();*/
}

/* ---------------- helpers visuales ---------------- */
function pickEls() {
  return {
    uaNombre:        byId("uaNombre"),
    carreraNombre:   byId("carreraNombre"),
    facultadNombre:  byId("facultadNombre"),
    usuarioNombre:   byId("usuarioNombre"),
    videoTitulo:     byId("videoTitulo"),
    videoDescripcion:byId("videoDescripcion"),
    videoFecha:      byId("videoFecha"),
    temasContainer:  byId("temasContainer"),
    player:          byId("player"),
  };
}
function renderError(msg) {
  const main = document.querySelector("main") || document.body;
  main.innerHTML = `<div class="container py-5">
    <div class="alert alert-warning">${safe(msg)}</div>
  </div>`;
}
function renderPalabras(container, palabras) {
  container.innerHTML = "";
  if (!palabras || !palabras.length) return;
  palabras.forEach(p => {
    // backend ya devuelve [{id,nombre}]
    const label = p?.nombre ?? "";
    const pill = document.createElement("div");
    pill.className = "p-2";
    pill.innerHTML = `<p class="mb-0" style="color: gray; font-size: small;">${safe(label)}</p>`;
    container.appendChild(pill);
  });
}

/* ---------------- utilidades ---------------- */
function getParam(k) {
  return new URL(location.href).searchParams.get(k);
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
function buildYouTubeEmbed(id) {
  if (!id) return null;
  return `https://www.youtube.com/embed/${encodeURIComponent(id)}`;
}
function byId(id) { return document.getElementById(id); }
function safe(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
