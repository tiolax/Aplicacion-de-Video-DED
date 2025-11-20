export async function ObtenerUsuarios(){
            const res = await fetch(`${window.API_URL}/usuarios/todos`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data.usuarios;
}

export async function Actualizar(id, nombreUsuario, password, baja) {
  const data = {
    nombreUsuario,
  };
  if (password && password.trim() !== "") {
    data.password = password.trim();
  }
    //verificar si el dato "baja" se envió
  //sí se envipo entonces agregarlo a la data
  //Otra cosa, verifica por que el nombre de usuario se esta leyendo como "true"
  
  console.log("Enviando:", { id, data });
  const res = await fetch(`${window.API_URL}/usuarios/actualizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, data })
  });

  const use = await res.json();
  return use.usuarios;
}



export function modalaviso(mensaje){
    const modalElement = document.getElementById('modalAviso');
    const tituloaviso = document.getElementById("textmodalAviso");
    tituloaviso.textContent = mensaje;

    let modalaviso = bootstrap.Modal.getInstance(modalElement);
      if (!modalaviso) {
        modalaviso = new bootstrap.Modal(modalElement);
    }
        modalaviso.show();
}

