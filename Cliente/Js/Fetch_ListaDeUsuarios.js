export async function ObtenerUsuarios(){
            const res = await fetch(`${window.API_URL}/usuarios/todos`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data.usuarios;
}

export async function Actualizar(id, nombreUsuario, password, baja) {
  const data = {};


  if (nombreUsuario && nombreUsuario.trim() !== "") {
    data.nombreUsuario = nombreUsuario.trim();
  }

  if (password && password.trim() !== "") {
    data.password = password.trim();
  }

    if (typeof baja === "boolean") {
    data.baja = baja;
  }


  console.log("Enviando:", { id, data });
  const res = await fetch(`${window.API_URL}/usuarios/actualizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, data })
  });

  const use = await res.json();
  return use;
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

