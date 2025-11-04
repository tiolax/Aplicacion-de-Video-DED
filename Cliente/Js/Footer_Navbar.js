import { NombredeUsuario_Sesion, FacultadUsuario_Sesion, initNavbarSearch } from "./Navbar.js";

     fetch('footer.html')
        .then(response => response.text())
        .then(html =>{
            document.getElementById('footer').innerHTML = html;
        });

    fetch('Navbar.html')
        .then(response => response.text())
        .then(html =>{
            document.getElementById('navbar').innerHTML = html;
            NombredeUsuario_Sesion();
            FacultadUsuario_Sesion();
            initNavbarSearch();
        });


