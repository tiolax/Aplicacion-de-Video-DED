export async function ObtenerUsuarios(){
            const res = await fetch(`${window.API_URL}/usuarios/todos`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data.usuarios;
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