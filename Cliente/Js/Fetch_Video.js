export async function ObtenerVideoPorId(id){
const res = await fetch(`${window.API_URL}/videos/obtener-por-id`, {
method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id})
});
const data = await res.json();
return data;
}