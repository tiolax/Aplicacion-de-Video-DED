import { ObtenerVideosPorUsuario } from "./Fecth_Migaleria.js";
///---Nombre del Usuario---///
const contenedor = document.getElementById("datos_perfil");
const usuarioActual = JSON.parse(localStorage.getItem("Usuario_SesionIniciada"));
 const col =  document.createElement('div');
 col.innerHTML = ` <div class="p-4"><h1 class="m-0">${usuarioActual.nombre}</h1><h5 class="m-0">${usuarioActual.facultad}</h5>0 Videos </div>
  `;
contenedor.appendChild(col);


///--Cargar Videos---///
const Videos = await ObtenerVideosPorUsuario(1);

console.log(Videos.videos);