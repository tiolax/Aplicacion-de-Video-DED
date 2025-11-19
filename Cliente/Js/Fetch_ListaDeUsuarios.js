export async function ObtenerUsuarios(){
            const res = await fetch(`${window.API_URL}/usuarios/todos`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data.usuarios;
}