import {ObtenerUsuarios} from "./Fetch_ListaDeUsuarios.js"


document.addEventListener("DOMContentLoaded", async () => {
  const tbody = document.querySelector("#tabla-usuarios tbody");
  if (!tbody) {
    console.error("No se encontró el tbody de la tabla con id 'tabla-usuarios'");
    return;
  }

  try {
    const usuarios = await ObtenerUsuarios();
    console.log("usuarios: ",usuarios);
    tbody.innerHTML = "";
    if (!usuarios || usuarios.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center">No hay usuarios registrados.</td>
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

      tr.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${nombre}</td>
        <td>${facultad}</td>
        <td>${fechaRegistro}</td>
        <td>${totalVideos}</td>
        <td>${conectado ? "Sí" : "No"}</td>
      `;

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="text-center text-danger">
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