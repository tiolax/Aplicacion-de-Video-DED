

export async function ObtenerVideos(params = {}){
  const sp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    if (Array.isArray(v)) v.forEach(val => sp.append(k, String(val)));
    else sp.append(k, String(v));
  });

const url = `${window.API_URL}/videos/?${sp.toString()}`;

  const res = await fetch(url, { method: "GET", headers: { "Content-Type": "application/json" } });
  if (!res.ok) throw new Error(`Error ${res.status}`);
  return await res.json();
}

export async function ObtenerDatos() {
    const [facultadesRes, carrerasRes, uasRes] = await Promise.all([
    fetch(`${window.API_URL}/facultades/info`, { headers: { "Content-Type": "application/json" } }),
    fetch(`${window.API_URL}/carreras/info`,   { headers: { "Content-Type": "application/json" } }),
    fetch(`${window.API_URL}/UAs/info`,        { headers: { "Content-Type": "application/json" } })
  ]);

  const facultades = (await facultadesRes.json()).Facultades;
  const carreras   = (await carrerasRes.json()).Carreras;
  const uas        = (await uasRes.json()).Uas;

  return { facultades, carreras, uas };
}

export async function obtenerTemas(){
            const res = await fetch(`${window.API_URL}/palabras/todos`,{
            method: "GET",
            headers: { "Content-Type": "application/json" },
            })
            const data = await res.json();
            return data;
}