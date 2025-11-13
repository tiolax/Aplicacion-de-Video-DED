import {CrearSesion} from "./Fetch_Login.js"



document.querySelector('form').addEventListener("submit", async(e) =>{
      e.preventDefault();
      localStorage.clear();
    
      const nombre = document.getElementById("usuario").value.trim();
      const password = document.getElementById("contra").value.trim();
       const errorDiv = document.getElementById('error-msg');
       errorDiv.textContent = '';
      if (!nombre || !password) {
        errorDiv.textContent = 'Por favor, complete todos los campos.';
        return;
          }else{

            const res = await fetch(`${window.API_URL}/usuarios/login`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre, password }),
            })
            const data = await res.json();


              if(data.success){
                const usuarioId = data.usuarioEcontrado.id
                const sesion = await CrearSesion(usuarioId);
                localStorage.setItem("SesionIniciada",JSON.stringify(sesion.SesionId));
                console.log(sesion.SesionId);
              window.location.href = "/Cliente/Html/inicio.html";
              }else{
                errorDiv.textContent = data.mensaje;
              }
          }
    });


    document.addEventListener('DOMContentLoaded' ,() => {

      const SESSION_KEY = "Usuario_SesionIniciada";
      try { localStorage.removeItem(SESSION_KEY); } catch (_) {}

    })