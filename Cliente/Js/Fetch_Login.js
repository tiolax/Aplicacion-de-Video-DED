
export async function RegistrarUsuario(nombre,password){
            const res = await fetch(`${window.API_URL}/usuarios/login`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, password }),
            })
            const data = await res.json();
            return data;
            }