import { ObtenerUsuarios,modalaviso } from "./Fetch_ListaDeUsuarios.js";

let usuarioSeleccionado = null;
let modalDarDeBaja = null;

document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tabla-usuarios tbody");
  const btnDarBaja = document.querySelector("#btn-dar-baja");
  const modalElement = document.getElementById("modalDarDeBaja");
  const modalUsuarioNombre = document.getElementById("modalDarDeBajaUsuarioNombre");
  const btnConfirmarDarBaja = document.getElementById("btn-confirmar-dar-baja");

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
      const fechaRegistro = formatearFecha(
        usuario.fechaRegistro || usuario.fecha_de_registro
      );
      const conectado = usuario.tieneSesionActiva ?? usuario.online ?? false;
      const totalVideos = usuario.totalVideos ?? usuario.total_videos ?? 0;
      tr.dataset.userId = usuario.id;
      tr.dataset.nombreUsuario = nombre;
      tr.dataset.nombreFacultad = facultad;

      tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${nombre}</td>
        <td>${facultad}</td>
        <td>${fechaRegistro}</td>
        <td>${totalVideos}</td>
        <td>${conectado ? "Sí" : "No"}</td>
      `;

      tr.addEventListener("click", () => {
        document
          .querySelectorAll("#tabla-usuarios tbody tr")
          .forEach((fila) => fila.classList.remove("table-active"));
        tr.classList.add("table-active");
        usuarioSeleccionado = usuario;
        console.log("Usuario seleccionado:", usuarioSeleccionado);
      });

      tbody.appendChild(tr);
    });
    if (btnDarBaja) {
      btnDarBaja.addEventListener("click", () => {
        if (!usuarioSeleccionado) {
         modalaviso("Seleccione un Usuario");
          return;
        }

        if (!modalDarDeBaja || !modalUsuarioNombre) {
          console.error("El modal de dar de baja no está correctamente configurado.");
          return;
        }

        // Poner el nombre del usuario en el modal
        modalUsuarioNombre.textContent = usuarioSeleccionado.nombreUsuario;

        // Mostrar modal
        modalDarDeBaja.show();
      });
    }

    // Botón "Sí, dar de baja" dentro del modal
    if (btnConfirmarDarBaja) {
      btnConfirmarDarBaja.addEventListener("click", async () => {
        if (!usuarioSeleccionado) return;

        console.log("Dar de baja a:", usuarioSeleccionado);

        // Por ahora solo cerramos el modal
        modalDarDeBaja.hide();

        // Opcional: feedback rápido
        alert(`(Demo) Usuario "${usuarioSeleccionado.nombreUsuario}" dado de baja.`);
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
