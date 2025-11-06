export async function ObtenerVideosPorUsuario(id_usuario){
            const res = await fetch(`${window.API_URL}/videos/por-usuario`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id_usuario}),
            })
            const data = await res.json();
            return data;
}

export async function ObtenerFacultadporId(id_facultad){
            const res = await fetch(`${window.API_URL}/facultades/Obtener-por-id`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id_facultad}),
            })
            const data = await res.json();
            return data.facultad;
}
export async function ObtenerUaporId(id_ua){
            const res = await fetch(`${window.API_URL}/uas/Obtener-por-id`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id_ua}),
            })
            const data = await res.json();
            return data.ua;
}
