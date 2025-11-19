import { ObtenerVideosPorUsuario, EliminarVideoPorId, EditarVideos,ObtenerUaporId } from "./Fetch_VideosEnEspera.js";
import { ObtenerPalabras, ObtenerUas,ObtenerCarreras } from "./Fetch_RegistrarVideos.js";
import {SesionActual} from "./Fetch_Login.js"
const SESSION_KEY = "SesionIniciada";
const sesionActual = JSON.parse(localStorage.getItem(SESSION_KEY));
const usuarioActual = await SesionActual(sesionActual);

/* =========================================================
    ESTADO GLOBAL
   ========================================================= */
let pendingDeleteId = null;
let pendingDeleteBtn = null;

let editingVideo = null;   // objeto del video que se edita
let editingTr = null;      // <tr> asociado en la tabla

/* =========================================================s
    UTILIDADES
   ========================================================= */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
function setHeader(name, faculty, count) {
  const $ = (sel) => document.getElementById(sel);
  const n = $("hdrUserName");
  const f = $("hdrUserFaculty");
  const c = $("hdrVideoCount");
  if (n) n.textContent = name || "Usuario";
  if (f) f.textContent = faculty || "—";
  if (c) c.textContent = String(count ?? 0);
}
function renderHeaderForUser(count) {
  const u = usuarioActual // ya existe en tu archivo
  const name =
    u?.nombre ?? u?.nombre_de_usuario ?? u?.usuarioNombre ?? "Usuario";
  const faculty = 
    u?.facultad_nombre ??
    u?.facultad?.nombre ??
    u?.carrera?.facultad?.nombre ??
    "—";
  setHeader(name, faculty, count);
}


const callEditar = ({ id, titulo, descripcion, ua_id, palabras,fase }) =>
  EditarVideos(id, titulo, descripcion, ua_id, palabras,fase);


const getTbody = () =>
  $("#tbody-pendientes") ||
  $("table.table tbody") ||
  $("tbody");

function getUsuario() {
  try { return JSON.parse(localStorage.getItem("Usuario_SesionIniciada")); }
  catch { return null; }
}

function getUserFacultyId() {
  try {
    const u = JSON.parse(localStorage.getItem("Usuario_SesionIniciada"));
    return u?.facultad_id ?? u?.facultadId ?? u?.facultadid ?? null;
  } catch { return null; }
}
function escapeHtml(s) {
  return String(s ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getThumb(v) {
  if (v?.identificador) return `https://img.youtube.com/vi/${encodeURIComponent(v.identificador)}/hqdefault.jpg`;
  if (v?.thumbnail)     return v.thumbnail;
  return "/Cliente/Recursos/gente_LOW.jpg";
}
// --- caché de UA por id ---
const uaCache = new Map();

/** Devuelve info { ua_id, ua_nombre, carrera_id, carrera_nombre } */
async function getUaInfo(ua_id) {
  if (!ua_id) return null;
  if (uaCache.has(ua_id)) return uaCache.get(ua_id);

  // tu fetch ya actualizado:
  // debe regresar { id, nombre, carrera: { id, nombre } }
  const ua = await ObtenerUaporId(ua_id);
  const info = ua ? {
    ua_id: ua.id,
    ua_nombre: ua.nombre,
    carrera_id: ua.carrera?.id ?? null,
    carrera_nombre: ua.carrera?.nombre ?? null,
  } : null;

  uaCache.set(ua_id, info);
  return info;
}




/* =========================================================
    RENDER BÁSICO
   ========================================================= */
function renderLoading(tbody) {
  tbody.innerHTML = `
    <tr>
      <td colspan="4" class="text-center py-4">Cargando videos...</td>
    </tr>`;
}

function renderEmpty(tbody, msg) {
  tbody.innerHTML = `
    <tr>
      <td colspan="4" class="text-center py-4 text-muted">${escapeHtml(msg)}</td>
    </tr>`;
}

/* =========================================================
    FILA / BOTONES
   ========================================================= */
function badgeFor(aprobado) {
  if (aprobado === 2) return `<span class="badge text-bg-danger">Rechazado</span>`;
  if (aprobado === 0) return `<span class="badge text-bg-warning">En revisión</span>`;
  return `<span class="badge text-bg-secondary">—</span>`;
}

function editBtn(id, title) {
  return `
    <button type="button"
            class="btn btn-outline-primary btn-sm"
            data-action="edit"
            data-id="${String(id)}"
            data-title="${escapeHtml(title)}"
            title="Editar">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-9.5 9.5a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9.5-9.5zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zM10.5 3.207 2 11.707V14h2.293l8.5-8.5-2.293-2.293z"/>
      </svg>
      <span class="ms-1">Editar</span>
    </button>`;
}

function deleteBtn(id, title) {
  return `
    <button type="button"
            class="btn btn-outline-danger btn-sm"
            data-action="delete"
            data-id="${String(id)}"
            data-title="${escapeHtml(title)}"
            title="Eliminar">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" aria-hidden="true" viewBox="0 0 16 16" fill="currentColor">
        <path d="M5.5 5.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2H5V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2.5a1 1 0 0 1 1 1M6 1v1h4V1zm6 3H4v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z"/>
      </svg>
      <span class="ms-1">Eliminar</span>
    </button>`;
}

function rowTemplate(video, index) {
  const aprobado   = Number(video.aprobado);
  const titulo     = video.titulo || "Sin título";
  const thumb      = getThumb(video);
  const comentario = (aprobado === 2) ? (video.comentarios ?? video.comentario ?? "") : "";
  const trStyle    = (aprobado === 2) ? ' style="background-color:#fbeaea;"' : "";

  return `
<tr${trStyle} data-video='${escapeHtml(JSON.stringify({
    id: video.id,
    titulo: video.titulo,
    descripcion: video.descripcion,
    ua_id: video.ua_id,                 // 👈
    ua_nombre: video.ua_nombre,         // 👈 (útil para mostrar)
    carrera_id: video.carrera_id,       // 👈
    carrera_nombre: video.carrera_nombre, // 👈
    palabras: video.palabras || []
  }))}'>
  <th scope="row">${index}</th>
  <td class="align-middle">
    <div class="d-flex align-items-center gap-3">
      <img src="${thumb}" class="rounded" style="width:120px;height:auto;object-fit:cover" alt="Video">
      <div class="fw-semibold">${escapeHtml(titulo)}</div>
    </div>
  </td>
  <td class="align-middle">${escapeHtml(comentario)}</td>
  <td class="align-middle">
    <div class="d-flex align-items-center gap-2">
      ${badgeFor(aprobado)}
      ${editBtn(video.id, titulo)}
      ${deleteBtn(video.id, titulo)}
    </div>
  </td>
</tr>`;
}

/* =========================================================
    RENDER DE LISTA + ENGANCHES
   ========================================================= */
async function initVideosPendientes() {
  const tbody = getTbody();
  if (!tbody) return;

  renderLoading(tbody);

  try {
    const usuario = getUsuario();
    if (!usuario?.id) { renderEmpty(tbody, "No se encontró el usuario en la sesión."); return; }
    const resp  = await ObtenerVideosPorUsuario(usuario.id);
    const lista = resp?.videos ?? resp?.data ?? resp?.items ?? resp ?? [];
    const videos = lista.filter(v => Number(v.aprobado) === 0 || Number(v.aprobado) === 2);
    renderHeaderForUser(videos.length);
    if (!videos.length) { renderEmpty(tbody, "No tienes videos en revisión o rechazados."); return; }

    // ... ya tienes 'videos' filtrados por aprobado 0/2

// precarga UA únicas
const uaIds = [...new Set(videos.map(v => v.ua_id).filter(Boolean))];
await Promise.all(uaIds.map(id => getUaInfo(id)));

// enriquece cada video
const videosEnriquecidos = videos.map(v => {
  const info = uaCache.get(v.ua_id) || null;
  return {
    ...v,
    ua_id: v.ua_id ?? info?.ua_id ?? null,
    ua_nombre: info?.ua_nombre ?? v.ua_nombre ?? null,
    carrera_id: info?.carrera_id ?? v.carrera_id ?? null,
    carrera_nombre: info?.carrera_nombre ?? v.carrera_nombre ?? null,
  };
});


tbody.innerHTML = videosEnriquecidos.map((v, i) => rowTemplate(v, i + 1)).join("");
    $$('button[data-action="delete"]', tbody).forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault(); e.stopPropagation();
        pendingDeleteId  = btn.getAttribute("data-id");
        pendingDeleteBtn = btn;

        const spanTitle = $("#deleteModalVideoTitle");
        if (spanTitle) spanTitle.textContent = btn.getAttribute("data-title") || "Sin título";

        const msg = $("#deleteModalMsg");
        if (msg) { msg.style.display = "none"; msg.textContent = ""; }

        const modal = bootstrap.Modal.getOrCreateInstance($("#deleteModal"));
        modal.show();
      });
    });

$$('button[data-action="edit"]', tbody).forEach(btn => {
  btn.addEventListener("click", async (e) => {
    e.preventDefault(); e.stopPropagation();

    const tr = btn.closest("tr");
    if (!tr) return;

    try {
      editingTr    = tr;
      editingVideo = JSON.parse(tr.getAttribute("data-video") || "{}");

      // Prefill de campos base
      $("#editVideoId").value      = editingVideo.id || "";
      $("#editTitulo").value       = editingVideo.titulo || "";
      $("#editDescripcion").value  = editingVideo.descripcion || "";

      // Palabras (checkboxes)
      await renderPalabrasEnModal(editingVideo.palabras || []);

      // Carrera/UA desde los datos guardados en la fila
      const carreraId  = editingVideo.carrera_id ?? null;
      const carreraNom = editingVideo.carrera_nombre ?? null;
      const uaActualId = editingVideo.ua_id ?? null;

      await renderCarrerasEnModal(carreraId, carreraNom);
      await renderUasEnModal(uaActualId, carreraId);

      // Al cambiar carrera → recargar UAs
      const selCarrera = document.getElementById("editCarreraSelect");
      if (selCarrera) {
        selCarrera.onchange = async (ev) => {
          const nuevaCarreraId = Number(ev.target.value) || null;
          await renderUasEnModal(null, nuevaCarreraId);
        };
      }

      // Limpia error
      const err = $("#editError");
      if (err) err.textContent = "";

      // Abre modal de edición
      bootstrap.Modal.getOrCreateInstance($("#editModal")).show();
    } catch (err) {
      console.error("Error preparando edición:", err);
    }
  });
});


  } catch (err) {
    console.error("Error cargando videos pendientes:", err);
    renderEmpty(getTbody(), "Ocurrió un error al cargar los videos.");
  }
}

/* =========================================================
    MODAL ELIMINAR
   ========================================================= */
function wireDeleteModal() {
  const btnConfirm = $("#btnConfirmDelete");
  const btnCancel  = $("#btnCancelDelete");
  const modalEl    = $("#deleteModal");

  if (!modalEl || !btnConfirm) return;

  btnConfirm.addEventListener("click", async () => {
    if (!pendingDeleteId) return;

    try {
      btnConfirm.disabled = true;
      btnConfirm.textContent = "Eliminando…";

      const res = await EliminarVideoPorId(Number(pendingDeleteId));
      if (!res?.success) {
        const msg = $("#deleteModalMsg");
        if (msg) {
          msg.textContent = res?.mensaje || "No se pudo eliminar el video.";
          msg.style.display = "block";
        }
        return;
      }

      bootstrap.Modal.getOrCreateInstance(modalEl).hide();

      // eliminar fila
      if (pendingDeleteBtn) {
        const tr = pendingDeleteBtn.closest("tr");
        if (tr) tr.remove();
      }

      const tbody = getTbody();
      if (tbody && tbody.children.length === 0) {
        renderEmpty(tbody, "Ya no hay videos en revisión o rechazados.");
      }
    } catch {
      const msg = $("#deleteModalMsg");
      if (msg) {
        msg.textContent = "Error de red al eliminar. Intenta de nuevo.";
        msg.style.display = "block";
      }
    } finally {
      btnConfirm.disabled = false;
      btnConfirm.textContent = "Eliminar";
      pendingDeleteId = null;
      pendingDeleteBtn = null;
    }
  });

  btnCancel?.addEventListener("click", () => {
    pendingDeleteId = null;
    pendingDeleteBtn = null;
    const msg = $("#deleteModalMsg");
    if (msg) { msg.style.display = "none"; msg.textContent = ""; }
  });
}

/* =========================================================
    MODAL EDITAR: Temas y UAs
   ========================================================= */
async function renderPalabrasEnModal(idsSeleccionadas = []) {
  const cont = $("#editTemasContainer");
  cont.innerHTML = "Cargando temas...";

  const palabras = await ObtenerPalabras();
  cont.innerHTML = "";

  palabras.forEach(p => {
    const wrap  = document.createElement("div");
    wrap.className = "form-check";

    const input = document.createElement("input");
    input.type    = "checkbox";
    input.className = "form-check-input";
    input.id      = `edit_tema_${p.id}`;
    input.value   = p.id;
    input.checked = idsSeleccionadas.includes(p.id);

    const label = document.createElement("label");
    label.className = "form-check-label";
    label.setAttribute("for", input.id);
    label.textContent = p.nombre;

    wrap.append(input, label);
    cont.appendChild(wrap);
  });
}
async function renderCarrerasEnModal(carreraActualId, carreraActualNombre) {
  const sel  = document.getElementById("editCarreraSelect");
  const hint = document.getElementById("editCarreraHint");
  sel.innerHTML = "";
  hint.textContent = "";

  const facuId = getUserFacultyId();

  if (facuId) {
    // carga TODAS las carreras de la facultad del usuario
    const carreras = await ObtenerCarreras(facuId);
    if (!carreras?.length) {
      sel.appendChild(new Option("No hay programas para tu facultad", "", true, true));
      return;
    }
    sel.appendChild(new Option("Selecciona un programa", "", true, false));
    carreras.forEach(c =>
      sel.appendChild(new Option(c.nombre, c.id, false, c.id === carreraActualId))
    );
  } else {
    // fallback: no sabemos la facultad → mostramos solo la carrera actual
    sel.appendChild(new Option(carreraActualNombre || "Programa actual", carreraActualId ?? "", true, true));
    hint.textContent = "No se detectó tu facultad. Si necesitas cambiar de programa, expón facultad_id en sesión.";
  }
}

async function renderUasEnModal(uaActualId, carreraId) {
  const sel  = document.getElementById("editUaSelect");
  const hint = document.getElementById("editUaHint");
  sel.innerHTML = "";
  hint.textContent = "";

  if (!carreraId) {
    // sin carrera, no podemos cambiar UA; muestra la actual solamente
    sel.appendChild(new Option("UA actual", uaActualId ?? "", true, true));
    hint.textContent = "Selecciona primero un programa para listar sus UAs.";
    return;
  }

  // trae UAs de la carrera seleccionada
  const resp = await ObtenerUas(carreraId);
  const uas =
    resp?.uas ??
    resp?.data ??
    resp?.items ??
    resp ?? [];

  if (!Array.isArray(uas) || uas.length === 0) {
    sel.appendChild(new Option("No hay UAs para este programa", "", true, true));
    return;
  }

  // opción “placeholder”
  sel.appendChild(new Option("Selecciona una UA", "", true, false));

  // pinta opciones y preselecciona si coincide con la actual
  for (const u of uas) {
    const id   = Number(u.id ?? u.ua_id ?? u.value);
    const name = String(u.nombre ?? u.name ?? "UA");
    sel.appendChild(new Option(name, id, false, id === uaActualId));
  }
}







/* =========================================================
    CONFIRMAR EDICIÓN
   ========================================================= */
$("#btnSubmitEdit")?.addEventListener("click", () => {
  const err = $("#editError");
  if (err) err.textContent = "";

  const id           = Number($("#editVideoId").value);
  const titulo       = $("#editTitulo").value.trim();
  const descripcion  = $("#editDescripcion").value.trim();
  const ua_id        = Number($("#editUaSelect").value);
  const palabras     = $$(`#editTemasContainer input[type="checkbox"]:checked`).map(i => Number(i.value));


 
  // Validaciones mínimas
  if (!id)          { err.textContent = "ID de video inválido."; return; }
  if (!titulo)      { err.textContent = "Escribe un título.";    return; }
  if (!descripcion) { err.textContent = "Escribe una descripción."; return; }
  if (!ua_id)       { err.textContent = "Selecciona una UA.";    return; }
  if (!palabras.length) { err.textContent = "Selecciona al menos un tema."; return; }

  editingVideo = { ...editingVideo, id, titulo, descripcion, ua_id, palabras };
  bootstrap.Modal.getOrCreateInstance($("#confirmEditModal")).show();
});

$("#btnConfirmEdit")?.addEventListener("click", async () => {
  const btn       = $("#btnConfirmEdit");
  const confirmEl = $("#confirmEditModal");
  const editEl    = $("#editModal");

  // Lee selects por si usuario los cambió tras validar:
  const carrera_id = Number($("#editCarreraSelect")?.value) || null;
  const ua_id      = Number($("#editUaSelect")?.value) || editingVideo.ua_id;

  try {
    btn.disabled = true;
    btn.textContent = "Guardando…";

    // Llamada POSICIONAL al fetch (usa el helper)
    const res = await callEditar({
      id:          editingVideo.id,
      titulo:      editingVideo.titulo,
      descripcion: editingVideo.descripcion,
      ua_id,
      palabras:    editingVideo.palabras,
    });

    if (!res?.success) {
      const err = $("#editError");
      if (err) err.textContent = res?.message || "No se pudo guardar la edición.";
      bootstrap.Modal.getOrCreateInstance(confirmEl).hide();
      return;
    }

    // Cierra modales
    bootstrap.Modal.getOrCreateInstance(confirmEl).hide();
    bootstrap.Modal.getOrCreateInstance(editEl).hide();

    // Refresco mínimo de la fila
    if (editingTr) {
      const titleDiv = $(".fw-semibold", editingTr);
      if (titleDiv) titleDiv.textContent = editingVideo.titulo;

      // opcional: nombre de carrera/ua desde los selects
      const selCarr = $("#editCarreraSelect");
      const selUa   = $("#editUaSelect");

      const nuevoDataVideo = {
        ...JSON.parse(editingTr.getAttribute("data-video") || "{}"),
        titulo:          editingVideo.titulo,
        descripcion:     editingVideo.descripcion,
        ua_id,           // la UA guardada
        carrera_id,      // si decides persistirla o al menos conservarla en la fila
        carrera_nombre:  selCarr?.selectedOptions?.[0]?.text ?? editingVideo.carrera_nombre ?? null,
        // ua_nombre:     selUa?.selectedOptions?.[0]?.text ?? editingVideo.ua_nombre ?? null, // si lo quieres
        palabras:        editingVideo.palabras,
      };
      editingTr.setAttribute("data-video", JSON.stringify(nuevoDataVideo));
    }
  } catch (e) {
    const err = $("#editError");
    if (err) err.textContent = "Error de red al guardar. Intenta de nuevo.";
  } finally {
    btn.disabled = false;
    btn.textContent = "Sí, guardar";
  }
});

/* =========================================================
    ARRANQUE
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  initVideosPendientes();
  wireDeleteModal();
});
