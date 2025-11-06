export async function ObtenerVideosPorUsuario(usuario_id){
            const res = await fetch(`${window.API_URL}/videos/por-usuario`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({usuario_id}),
            })
            const data = await res.json();
            return data;
}

export async function EliminarVideoPorId(id){
            const res = await fetch(`${window.API_URL}/videos/eliminar-por-id`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id}),
            })
            const data = await res.json();
            return data;
}

export async function EditarVideos(id,titulo,descripcion,ua_id,palabras){

        console.log("Esto recibo: ",titulo,id,descripcion,ua_id,palabras);

            const res = await fetch(`${window.API_URL}/videos/actualizar`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, titulo, descripcion, ua_id, palabras}),
            })
            const data = await res.json();
            return data;
}

export async function ObtenerUaporId(id_ua) {
  const res = await fetch(`${window.API_URL}/uas/Obtener-por-id`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_ua }),
  });
  const data = await res.json();
  return data.ua; 
}

