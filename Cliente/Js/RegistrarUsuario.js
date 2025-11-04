document.addEventListener('DOMContentLoaded', () => {
CargarFacultades();     

  const btnRegistroU = document.getElementById("btnRegistrarUsuario");
  if(btnRegistroU) btnRegistroU.addEventListener("click",RegistrarUsuario);

});
let errorDiv = document.getElementById('error-msg');
async function RegistrarUsuario() 
{
   const facultad = parseInt(document.getElementById('facultad').value, 10)
      const nombre = document.getElementById("nombre").value.trim();
      const password = document.getElementById("password").value.trim();
      const passwordrep = document.getElementById("passwordrep").value.trim();
      

    if( !facultad || !nombre || !password || !passwordrep){
      errorDiv.textContent = "Porfavor, complete todos los campos.";
      return;
    }else if(password != passwordrep){
      errorDiv.textContent = "Confirme correctamente su contraseña";
      return;
    }
    if(validaciones(password,nombre)){
    const res = await fetch (`${window.API_URL}/usuarios/crear`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, password,facultad}),
            })

    const data = await res.json()

    if(data.success){
      modalaviso("Usuario Registrado con éxito");
      document.getElementById("btnaceptar").addEventListener("click", () => window.location.href = "/Cliente/Html/inicio.html", { once: true });

    }else{
      errorDiv.textContent = data.mensaje;
    }
    }


}

async function CargarFacultades() {
    const res = await fetch(`${window.API_URL}/facultades/todos`,{
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })

const data = await res.json();
const facultades = data.Facultades;

const selectFacultad = document.getElementById('facultad');

facultades.forEach(facultad => {
  const option = document.createElement('option');
  option.value = facultad.id;    
  option.textContent = facultad.nombre; 
  selectFacultad.appendChild(option);
});
}

function modalaviso(mensaje){
    const modalElement = document.getElementById('modalAviso');
    const tituloaviso = document.getElementById("textmodalAviso");
    tituloaviso.textContent = mensaje;

    let modalaviso = bootstrap.Modal.getInstance(modalElement);
      if (!modalaviso) {
        modalaviso = new bootstrap.Modal(modalElement);
    }
        modalaviso.show();
}

function validaciones(password,nombre){
  if( password.lenght <= 7 ){
     errorDiv.textContent = "La contraseña debe tener al menos 8 caracteres";
    return false;
    }
  if(nombre.lenght <= 4){
      errorDiv.textContent = "el nombre de usuario debe teer al menos 5 caracteres"
    return false;
  }
  if(!Alfanumerico(nombre)){
      errorDiv.textContent = "el nombre de usuario solo puede contener letras y números"
    return false;
  }
  return true;
}



 function Alfanumerico(texto) {
  const valido = /^[\p{L}\p{N} ]+$/u.test(texto);
  const soloNumeros = /^\d+$/u.test(texto);

  return valido && !soloNumeros;
}