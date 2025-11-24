import { ObtenerUsuarios, modalaviso, Actualizar } from "./Fetch_ListaDeUsuarios.js";

let usuarioSeleccionado = null;
let filaSeleccionada = null;
let modalDarDeBaja = null;

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tabla-usuarios tbody");
  const btnActualizar = document.querySelector("#btn-actualizar");

  const modalElement = document.getElementById("modalDarDeBaja");
  const modalUsuarioNombre = document.getElementById("modalDarDeBajaUsuarioNombre");
  const modalUsuarioEstatus = document.getElementById("modalDarDeBajaUsuarioEstatus");
  const modalTitulo = document.getElementById("modalDarDeBajaTitulo");
  const btnToggleBaja = document.getElementById("btn-toggle-baja");
  const inputNombreUsuario = document.getElementById("input-nombre-usuario");
const inputPasswordUsuario = document.getElementById("input-password-usuario");
const btnConfirmarActualizar = document.getElementById("btn-confirmar-actualizar");
let passwordOriginalSeleccionado = "";


  if (!tbody) {
    console.error("No se encontró el tbody de la tabla con id 'tabla-usuarios'");
    return;
  }

  if (modalElement) {
    modalDarDeBaja = new bootstrap.Modal(modalElement);
  }

  try {
    const usuarios = await ObtenerUsuarios();
    console.log("usuarios: ", usuarios);

    tbody.innerHTML = "";

    if (!usuarios || usuarios.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" class="text-center">No hay usuarios registrados.</td>
        </tr>
      `;
      return;
    }

    usuarios.forEach((usuario, index) => {
      const tr = document.createElement("tr");

      const nombre = usuario.nombreUsuario ?? "";
      const facultad = usuario.nombreFacultad ?? "";
      const fechaRegistro = formatearFecha(usuario.fechaRegistro || usuario.fecha_de_registro);
      const conectado = usuario.tieneSesionActiva ?? usuario.online ?? false;
      const totalVideos = usuario.totalVideos ?? usuario.total_videos ?? 0;

      const enBaja = usuario.baja ?? usuario.Baja ?? usuario.bajaUsuario ?? usuario.baja_flag ?? false;

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

      tr.addEventListener("click", () => {
        document.querySelectorAll("#tabla-usuarios tbody tr")
          .forEach((fila) => fila.classList.remove("table-active"));

        tr.classList.add("table-active");
        usuarioSeleccionado = usuario;
        filaSeleccionada = tr;

        console.log("Usuario seleccionado:", usuarioSeleccionado);
      });

      tbody.appendChild(tr);
    });
    if (btnActualizar) {
      btnActualizar.addEventListener("click", () => {
        if (!usuarioSeleccionado) {
          modalaviso("Seleccione un Usuario");
          return;
        }
        if (!modalDarDeBaja || !modalUsuarioNombre || !btnToggleBaja) {
          console.error("El modal no está correctamente configurado.");
          return;
        }
          
        const enBajaActual =
          usuarioSeleccionado.baja ??
          usuarioSeleccionado.Baja ??
          usuarioSeleccionado.bajaUsuario ??
          usuarioSeleccionado.baja_flag ??
          false;

if (inputNombreUsuario) {
  inputNombreUsuario.value = usuarioSeleccionado.nombreUsuario ?? "";
}
if (inputPasswordUsuario) {
  const passActual =
    usuarioSeleccionado.password ??
    usuarioSeleccionado.contrasena ??
    usuarioSeleccionado.contraseña ??
    usuarioSeleccionado.pass ??
    "";

  passwordOriginalSeleccionado = passActual;

  inputPasswordUsuario.type = "password";
  inputPasswordUsuario.value = passActual;
}

        modalUsuarioNombre.textContent = usuarioSeleccionado.nombreUsuario ?? "";
        modalUsuarioEstatus.textContent = enBajaActual ? "Baja" : "Activo";

        if (enBajaActual) {
          modalTitulo.textContent = "Reactivar usuario";
          btnToggleBaja.textContent = "Reactivar";
          btnToggleBaja.classList.remove("btn-danger");
          btnToggleBaja.classList.add("btn-success");
        } else {
          modalTitulo.textContent = "Dar de baja usuario";
          btnToggleBaja.textContent = "Baja";
          btnToggleBaja.classList.remove("btn-success");
          btnToggleBaja.classList.add("btn-danger");
        }
const inputPassword = document.getElementById('input-password-usuario');
const btnTogglePassword = document.getElementById('btn-toggle-password');
const iconoPassword = document.getElementById('icono-password');

if (inputPassword && btnTogglePassword && iconoPassword) {
  btnTogglePassword.addEventListener('click', () => {
    const esPassword = inputPassword.type === 'password';
    inputPassword.type = esPassword ? 'text' : 'password';
    iconoPassword.classList.toggle('bi-eye');
    iconoPassword.classList.toggle('bi-eye-slash');
  });
}

        modalDarDeBaja.show();
      });
    }


///bton para actualizar los datos del usuario
if (btnConfirmarActualizar) {
  btnConfirmarActualizar.addEventListener("click", async () => {
    if (!usuarioSeleccionado) return;

    const nuevoNombre = (inputNombreUsuario?.value ?? "").trim();
    const nuevaPassword = (inputPasswordUsuario?.value ?? "").trim();

    if (!nuevoNombre) {
      modalaviso("El nombre no puede estar vacío.");
      return;
    }

    const enBajaActual =
      usuarioSeleccionado.baja ??
      usuarioSeleccionado.Baja ??
      usuarioSeleccionado.bajaUsuario ??
      usuarioSeleccionado.baja_flag ??
      false;

  console.log("nombre: ",nuevoNombre);
  console.log("contra: ",nuevaPassword);
  console.log("baja: ",enBajaActual);
  
    try {



const UsuarioId = usuarioSeleccionado.id;
const nuevoNombre = (inputNombreUsuario?.value ?? "").trim();
const nuevaPassword = (inputPasswordUsuario?.value ?? "").trim();

await Actualizar(UsuarioId, nuevoNombre, nuevaPassword);
      usuarioSeleccionado.nombreUsuario = nuevoNombre;
      if (filaSeleccionada) {
        filaSeleccionada.dataset.nombreUsuario = nuevoNombre;

        // td:nth-child(2) es "Nombre"
        const tdNombre = filaSeleccionada.querySelector("td:nth-child(2)");
        if (tdNombre) tdNombre.textContent = nuevoNombre;
      }
      modalDarDeBaja.hide();
    } catch (e) {
      console.error(e);
      modalaviso("No se pudo actualizar el usuario.");
    }
  });
}
    if (btnToggleBaja) {
      btnToggleBaja.addEventListener("click", async () => {
        if (!usuarioSeleccionado) return;

        const enBajaActual =
          usuarioSeleccionado.baja ??
          usuarioSeleccionado.Baja ??
          usuarioSeleccionado.bajaUsuario ??
          usuarioSeleccionado.baja_flag ??
          false;

        const nuevoEstatus = !enBajaActual;

        try { 
         const usuarioActualizado = await Actualizar(usuarioSeleccionado.id, null,null,nuevoEstatus);
        if(usuarioActualizado.success){

          usuarioSeleccionado.baja = nuevoEstatus;
          if (filaSeleccionada) {
            filaSeleccionada.dataset.baja = nuevoEstatus;
            filaSeleccionada.classList.toggle("fila-baja", nuevoEstatus);
          }

            modalElement.addEventListener(
              "hidden.bs.modal",
              async () => {
                modalaviso("El estatus del usuario ha sido modificado");
              },
                { once: true }
            );
        }
    

          modalDarDeBaja.hide();
        } catch (e) {
          console.error(e);
          modalaviso("No se pudo actualizar el estatus del usuario.");
        }
      });
    }

  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="text-center text-danger">
          Error al cargar la lista de usuarios.
        </td>
      </tr>
    `;
  }
});

////------Utilidades------///////
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


