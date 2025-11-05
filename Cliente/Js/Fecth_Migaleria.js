export async function ObtenerVideosPorUsuario(id_usuario){
            const res = await fetch(`${window.API_URL}/videos/por-usuario`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id_usuario}),
            })
            const data = await res.json();
            console.log(data.videos);
            return data;
}