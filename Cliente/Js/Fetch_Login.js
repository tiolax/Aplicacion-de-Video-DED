export async function CrearSesion(usuarioId){
    const res = await fetch(`${window.API_URL}/sessions/crear`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({usuarioId}),
    })
    const data = await res.json();
    return data;
    }
export async function SesionActual(sesionID){
    const res = await fetch(`${window.API_URL}/sessions/actual`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({sesionID}),
    })
    const data = await res.json();
    return data;
    }

export async function CerrarSesion(sesionID){
    const res = await fetch(`${window.API_URL}/sessions/cerrar`,{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({sesionID}),
    })
    const data = await res.json();
    return data;
    }
