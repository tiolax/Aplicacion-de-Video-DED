import { ObtenerUsuarios, modalaviso, Actualizar } from "./Fetch_ListaDeUsuarios.js";


//==============================//
//------ Bloque 0: Estado ------//
//==============================//
let usuarioSeleccionado = null;
let filaSeleccionada = null;
let modalDarDeBaja = null;
let recargarDespuesAviso = false;

// Cache de elementos del DOM (se llena en initDOM)
const dom = {
  tbody: null,
  btnActualizar: null,

  // Modal actualizar/baja
  modalElement: null,
  modalTitulo: null,
  btnToggleBaja: null,
  inputNombreUsuario: null,
  inputPasswordUsuario: null,
  btnConfirmarActualizar: null,

  // Toggle password
  btnTogglePassword: null,
  iconoPassword: null,

  // Modal aviso
  btnAceptarAviso: null,
  errorNombreUsuario: null,
};

//=============================================//
//------ Bloque A: Inicialización general -----//
//=============================================//
document.addEventListener("DOMContentLoaded", () => {
  initDOM();
  initBootstrap();
  initListenersGlobales();
  cargarUsuarios();
});

//================================================//
//------ Bloque B: Referencias a elementos DOM ----//
//================================================//
function initDOM() {
  dom.tbody = document.querySelector("#tabla-usuarios tbody");
  dom.btnActualizar = document.querySelector("#btn-actualizar");

  dom.modalElement = document.getElementById("modalDarDeBaja");
  dom.modalTitulo = document.getElementById("modalDarDeBajaTitulo");
  dom.btnToggleBaja = document.getElementById("btn-toggle-baja");
  dom.inputNombreUsuario = document.getElementById("input-nombre-usuario");
  dom.inputPasswordUsuario = document.getElementById("input-password-usuario");
  dom.btnConfirmarActualizar = document.getElementById("btn-confirmar-actualizar");
  dom.errorNombreUsuario = document.getElementById("error-nombre-usuario");
  dom.btnTogglePassword = document.getElementById("btn-toggle-password");
  dom.iconoPassword = document.getElementById("icono-password");
  dom.btnAceptarAviso = document.getElementById("btnaceptar");

  if (!dom.tbody) {
    console.error("No se encontró el tbody de la tabla con id 'tabla-usuarios'");
  }

  if (dom.inputNombreUsuario) {
  dom.inputNombreUsuario.addEventListener("input", limpiarErrorNombre);
}

}

//================================================//
//------ Bloque C: Inicialización Bootstrap -------//
//================================================//
function initBootstrap() {
  if (dom.modalElement) {
    modalDarDeBaja = new bootstrap.Modal(dom.modalElement);
  }
}

//================================================//
//------ Bloque D: Listeners globales -------------//
//================================================//
function initListenersGlobales() {
  configurarTogglePasswordUnaVez();
  configurarBotonActualizar();
  configurarConfirmarActualizar();
  configurarToggleBaja();
  configurarAceptarAviso();
}

//================================================//
//------ Bloque E: Carga de usuarios --------------//
//================================================//
async function cargarUsuarios() {
  if (!dom.tbody) return;

  try {
    const usuarios = await ObtenerUsuarios();
    renderUsuarios(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    mostrarFilaMensaje("Error al cargar la lista de usuarios.", true);
  }
}

//================================================//
//------ Bloque F: Render de tabla ----------------//
//================================================//
function renderUsuarios(usuarios) {
  dom.tbody.innerHTML = "";

  if (!usuarios || usuarios.length === 0) {
    mostrarFilaMensaje("No hay usuarios registrados.");
    return;
  }

  usuarios.forEach((usuario, index) => {
    const fila = crearFilaUsuario(usuario, index);
    dom.tbody.appendChild(fila);
  });
}

function crearFilaUsuario(usuario, index) {
  const tr = document.createElement("tr");

  const nombre = getNombre(usuario);
  const facultad = getFacultad(usuario);
  const fechaRegistro = getFechaRegistro(usuario);
  const conectado = getConectado(usuario);
  const totalVideos = getTotalVideos(usuario);
  const enBaja = getEnBaja(usuario);

  tr.dataset.userId = usuario.id;
  tr.dataset.nombreUsuario = nombre;
  tr.dataset.nombreFacultad = facultad;
  tr.dataset.baja = enBaja;

  if (enBaja) tr.classList.add("fila-baja");

  tr.innerHTML = `
    <th scope="row">${index + 1}</th>
    <td>${nombre}</td>
    <td>${facultad}</td>
    <td>${fechaRegistro}</td>
    <td>${totalVideos}</td>
    <td>${conectado ? "Sí" : "No"}</td>
    <td>${enBaja ? "Desactivado" : "Activo"}</td>
  `;

  tr.addEventListener("click", () => seleccionarFila(tr, usuario));

  return tr;
}

function seleccionarFila(tr, usuario) {
  document
    .querySelectorAll("#tabla-usuarios tbody tr")
    .forEach((fila) => fila.classList.remove("table-active"));

  tr.classList.add("table-active");
  usuarioSeleccionado = usuario;
  filaSeleccionada = tr;

}

function mostrarFilaMensaje(mensaje, esError = false) {
  dom.tbody.innerHTML = `
    <tr>
      <td colspan="7" class="text-center ${esError ? "text-danger" : ""}">
        ${mensaje}
      </td>
    </tr>
  `;
}

//================================================//
//------ Bloque G: Modal Actualizar / Baja --------//
//================================================//
function configurarBotonActualizar() {
  if (!dom.btnActualizar) return;

  dom.btnActualizar.addEventListener("click", () => {
    if (!usuarioSeleccionado) {
      modalaviso("Seleccione un Usuario");
      return;
    }
    if (!modalDarDeBaja || !dom.btnToggleBaja) {
      console.error("El modal no está correctamente configurado.");
      return;
    }

    prepararModalConUsuario();
    modalDarDeBaja.show();
  });
}

function prepararModalConUsuario() {
  limpiarErrorNombre();
  const enBajaActual = getEnBaja(usuarioSeleccionado);
  const nombreUsuario = usuarioSeleccionado?.nombreUsuario ?? "";

  // Inputs de edición
  if (dom.inputNombreUsuario) {
    dom.inputNombreUsuario.value = nombreUsuario;
  }

  if (dom.inputPasswordUsuario) {
    const passActual =
      usuarioSeleccionado.password ??
      usuarioSeleccionado.contrasena ??
      usuarioSeleccionado.contraseña ??
      usuarioSeleccionado.pass ??
      "";

    dom.inputPasswordUsuario.type = "password";
    dom.inputPasswordUsuario.value = passActual;
  }


  if (enBajaActual) {
    dom.modalTitulo.textContent = `Reactivar usuario: ${nombreUsuario}`;
  } else {
    dom.modalTitulo.textContent = `Actualizar datos de ${nombreUsuario}`;
  }

  // Botón Baja/Reactivar
  if (enBajaActual) {
    dom.btnToggleBaja.textContent = "Reactivar";
    dom.btnToggleBaja.classList.remove("btn-danger");
    dom.btnToggleBaja.classList.add("btn-success");
  } else {
    dom.btnToggleBaja.textContent = "Baja";
    dom.btnToggleBaja.classList.remove("btn-success");
    dom.btnToggleBaja.classList.add("btn-danger");
  }
}

function mostrarErrorNombre(msg) {
  if (!dom.errorNombreUsuario) return;
  dom.errorNombreUsuario.textContent = msg;
  dom.errorNombreUsuario.classList.remove("d-none");
}

function limpiarErrorNombre() {
  if (!dom.errorNombreUsuario) return;
  dom.errorNombreUsuario.textContent = "";
  dom.errorNombreUsuario.classList.add("d-none");
}


//================================================//
//------ Bloque H: Confirmar actualización --------//
//================================================//
function configurarConfirmarActualizar() {
  if (!dom.btnConfirmarActualizar) return;

  dom.btnConfirmarActualizar.addEventListener("click", onConfirmarActualizar);
}

async function onConfirmarActualizar() {
  if (!usuarioSeleccionado) return;

  const nuevoNombre = (dom.inputNombreUsuario?.value ?? "").trim();
  const nuevaPassword = (dom.inputPasswordUsuario?.value ?? "").trim();
  limpiarErrorNombre();
  if (!nuevoNombre) {
    modalaviso("El nombre no puede estar vacío.");
    return;
  }

  try {
   const status = await Actualizar(usuarioSeleccionado.id, nuevoNombre, nuevaPassword);

    if(!status.success){
      mostrarErrorNombre("Ya existe un usuario con ese nombre.");
      return;
    }

    // Actualiza
    modalDarDeBaja.hide();
    recargarDespuesAviso = true;
    modalaviso("Usuario actualizado correctamente.");
  } catch (e) {
    console.error(e);
    modalaviso("No se pudo actualizar el usuario.");
  }
}
//================================================//
//------ Bloque I: Baja / Reactivar ---------------//
//================================================//
function configurarToggleBaja() {
  if (!dom.btnToggleBaja) return;
  dom.btnToggleBaja.addEventListener("click", onToggleBaja);
}

async function onToggleBaja() {
  if (!usuarioSeleccionado) return;
  if (usuarioSeleccionado.admin) {
    modalaviso("No puedes actualizar el estatus del usuario administrador.");
    return;
  }
  const enBajaActual = getEnBaja(usuarioSeleccionado);
  const nuevoEstatus = !enBajaActual;
  try {
    const usuarioActualizado = await Actualizar(
      usuarioSeleccionado.id,
      null,
      null,
      nuevoEstatus
    );

    if (usuarioActualizado?.success) {
      modalDarDeBaja.hide();
      recargarDespuesAviso = true;
      modalaviso("El estatus del usuario ha sido modificado.");
    } else {
      modalaviso("No se pudo actualizar el estatus del usuario.");
    }
  } catch (e) {
    console.error(e);
    modalaviso("No se pudo actualizar el estatus del usuario.");
  }
}

//================================================//
//------ Bloque J: Toggle mostrar contraseña -------//
//================================================//
function configurarTogglePasswordUnaVez() {
  const inputPassword = dom.inputPasswordUsuario;
  const btnTogglePassword = dom.btnTogglePassword;
  const iconoPassword = dom.iconoPassword;

  if (!inputPassword || !btnTogglePassword || !iconoPassword) return;
  btnTogglePassword.addEventListener("click", () => {
    const esPassword = inputPassword.type === "password";
    inputPassword.type = esPassword ? "text" : "password";
    iconoPassword.classList.toggle("bi-eye");
    iconoPassword.classList.toggle("bi-eye-slash");
  });
}
//================================================//
//------ Bloque K: Aviso y recarga controlada ------//
//================================================//
function configurarAceptarAviso() {
  if (!dom.btnAceptarAviso) return;

  dom.btnAceptarAviso.addEventListener("click", () => {
    if (recargarDespuesAviso) {
      recargarDespuesAviso = false;
      window.location.reload();
    }
  });
}
//================================================//
//------ Bloque L: Helpers de usuario --------------//
//================================================//
function getNombre(usuario) {
  return usuario.nombreUsuario ?? "";
}
function getFacultad(usuario) {
  // verifica si es cuenta de administrador
  return usuario.admin
    ? "Cuenta de administrador"
    : (usuario.nombreFacultad ?? "");
}
function getFechaRegistro(usuario) {
  return formatearFecha(usuario.fechaRegistro || usuario.fecha_de_registro);
}
function getConectado(usuario) {
  return usuario.tieneSesionActiva ?? usuario.online ?? false;
}
function getTotalVideos(usuario) {
  return usuario.totalVideos ?? usuario.total_videos ?? 0;
}
function getEnBaja(usuario) {
  return (
    usuario.baja ??
    usuario.Baja ??
    usuario.bajaUsuario ??
    usuario.baja_flag ??
    false
  );
}
//================================================//
//------ Bloque M: Utilidades ---------------------//
//================================================//
function formatearFecha(fechaRaw) {
  if (!fechaRaw) return "";
  const fecha = new Date(fechaRaw);
  if (isNaN(fecha.getTime())) return fechaRaw;

  return fecha.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

