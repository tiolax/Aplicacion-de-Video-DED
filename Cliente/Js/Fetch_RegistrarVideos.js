export async function ObtenerFacultades(){
const res = await fetch(`${window.API_URL}/facultades/todos`, {
method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
});
const data = await res.json();
return data.Facultades;
}


export async function ObtenerCarreras(facu){
    const res = await fetch (`${window.API_URL}/carreras/porfacu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({facu})
});
const data = await res.json();
return data.carreras;
}

export async function ObtenerPalabras() {
     const res = await fetch (`${window.API_URL}/palabras/todos`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify()
});
const data = await res.json();
return data.palabras;
}

export async function ObtenerUas(id){
     const res = await fetch (`${window.API_URL}/uas/carreras`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id})
});
const data = await res.json();
return data.Uas;
}

export async function RegistrarVideo(identificador,titulo,descripcion,ua_id,palabras,fase,usuario_id,admin) {
       const res = await fetch (`${window.API_URL}/videos/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({identificador,titulo,descripcion,ua_id,palabras,fase,usuario_id,admin})
});

const data = await res.json();
return data;
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