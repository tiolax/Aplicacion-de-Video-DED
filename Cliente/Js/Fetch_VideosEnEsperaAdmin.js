export async function ObtenerVideosEnEspera(){
            const res = await fetch(`${window.API_URL}/videos/en-espera`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data.videos;
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


export async function ObtenerUsuarioPorId(id) {
  const res = await fetch(`${window.API_URL}/usuarios/obtener-por-id`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id }),
  });
  const data = await res.json();
  return data.usuario; 
}

///--Este es propio de Vista Previa pero para no armar otro archivo lo pegue aqui--//

export async function ActualizarVideoEstado(id,aprobado,comentario) {
  const res = await fetch(`${window.API_URL}/videos/actualizar-estado`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, aprobado, comentario: comentario ?? null  }),
  });
  const data = await res.json();
  return data; 
}
