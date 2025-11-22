export async function ObtenerVideosPorUsuario(usuario_id){
            const res = await fetch(`${window.API_URL}/videos/por-usuario`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({usuario_id}),
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

export async function EditarVideos(id,titulo,descripcion,ua_id,palabras,identificador){

            const body = { id, titulo, descripcion, ua_id, palabras };

            if (identificador !== undefined && identificador !== null && identificador !== "") {
              body.identificador = identificador;
            }


            const res = await fetch(`${window.API_URL}/videos/actualizar`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
            })
            const data = await res.json();
            return data;
}