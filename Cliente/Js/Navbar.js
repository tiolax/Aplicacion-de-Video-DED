
const SESSION_KEY = "Usuario_SesionIniciada";

const usuarioActual = JSON.parse(localStorage.getItem(SESSION_KEY));
if (!usuarioActual && !/\/login\.html$/i.test(location.pathname)) {
  window.location.replace("/Cliente/Html/login.html");
}
///Boton Cerrar Sesion///
document.addEventListener("click", (e) => {
  let node = e.target;
  if (node && node.nodeType !== 1) node = node.parentNode; // 1 = ELEMENT_NODE

  while (node && node !== document) {
    if (node.nodeType === 1 && node.id === "cerrarSesion") {
      e.preventDefault();
      // --- lógica de logout ---
      const SESSION_KEY = "Usuario_SesionIniciada";
      try { localStorage.removeItem(SESSION_KEY); } catch (_) {}
      window.location.replace("/Cliente/Html/login.html");
      return; 
    }
    node = node.parentElement || node.parentNode;
  }
});


export function NombredeUsuario_Sesion(){
    document.getElementById("Nombre_UsuarioSesion").textContent = usuarioActual.nombre;
}
export function FacultadUsuario_Sesion(){
    
    //document.getElementById("Facultad_UsuaruiSesion").textContent = usuarioActual.facultadnombre;

    const navbar = document.getElementById("navbar");
    const navbarinicio = document.getElementById("navbarinicio") 
    const opciones_navbar = document.getElementById("Opciones_Navbar");

      const opciones = document.createElement("li");
        const misvideos = document.createElement("a");
        misvideos.className = "dropdown-item";
        misvideos.href = "/Cliente/Html/migaleria.html";
        misvideos.textContent = "Mis videos";  

        opciones.appendChild(misvideos);


    if(usuarioActual.admin == true){
    navbar.style.backgroundColor = "rgba(30, 32, 61, 1)";
    navbar.style.color = "white";
    navbar.style.borderColor = "rgba(0, 0, 0, 1)";
    navbarinicio.style.color = "white";

        const videosespera = document.createElement("a");
        videosespera.className = "dropdown-item";
        videosespera.href = "/Cliente/Html/VideoPendientesAdmin.html";
        videosespera.textContent = "Videos en espera";  

        const usuarios = document.createElement("a");
        usuarios.className = "dropdown-item";
        usuarios.href = "/Cliente/Html/ListaDeUsuarios.html";
        usuarios.textContent = "Lista de usuarios"; 

        const registrarUsuario = document.createElement("a");
        registrarUsuario.className = "dropdown-item";
        registrarUsuario.href = "/Cliente/Html/Registrarusuario.html";
        registrarUsuario.textContent = "Agregar usuario"; 
        
         const registrarvideo = document.createElement("a");
        registrarvideo.className = "dropdown-item";
        registrarvideo.href = "/Cliente/Html/registrarvideo.html";
        registrarvideo.textContent = "Subir Video"; 

        const administrarFiltros = document.createElement("a");
        administrarFiltros.className = "dropdown-item";
        administrarFiltros.href = "/Cliente/Html/AdministrarFiltros.html";
        administrarFiltros.textContent = "Administrar filtros"; 
        
   
        opciones.appendChild(videosespera);
        opciones.appendChild(usuarios);
        opciones.appendChild(registrarvideo);
        opciones.appendChild(registrarUsuario);
        opciones.appendChild(administrarFiltros);
        
        
        
    }else{
    navbar.style.backgroundColor = "rgb(207, 207, 207)";
    
        const videosespera = document.createElement("a");
        videosespera.className = "dropdown-item";
        videosespera.href = "/Cliente/Html/Videospendientes.html";
        videosespera.textContent = "Videos en espera";  


        const registrarvideo = document.createElement("a");
        registrarvideo.className = "dropdown-item";
        registrarvideo.href = "/Cliente/Html/Videopendientes.html";
        registrarvideo.textContent = "Registrar Video";  


        opciones.appendChild(videosespera);
        opciones.appendChild(registrarvideo);


    }


    opciones_navbar.appendChild(opciones);


}

////---Logica de Barra de navegacion ---///
let _navbarSearchBound = false;

export function initNavbarSearch() {
  if (_navbarSearchBound) return; // evita duplicados

  document.addEventListener("click", (e) => {
    let node = e.target;
    if (node && node.nodeType !== 1) node = node.parentNode;

    //¿Se clickeó el botón de buscar?
    while (node && node !== document) {
      if (node.nodeType === 1 && node.id === "navbar-search-btn") {
        e.preventDefault();
        const input = document.getElementById("navbar-search-input");
        const q = (input?.value ?? "").trim();
        if (!q) return;

        const target = `/Cliente/Html/inicio.html?search=${encodeURIComponent(q)}`;

        // Si ya estamos en inicio, navega igual (simple y consistente)
        window.location.href = target;
        return;
      }
      node = node.parentElement || node.parentNode;
    }
  });

  // 2) Enter dentro del input
  document.addEventListener("keydown", (e) => {
    const el = e.target;
    if (el && el.id === "navbar-search-input" && e.key === "Enter") {
      e.preventDefault();
      const q = (el.value ?? "").trim();
      if (!q) return;
      const target = `/Cliente/Html/inicio.html?search=${encodeURIComponent(q)}`;
      window.location.href = target;
    }
  });

  _navbarSearchBound = true;
}




