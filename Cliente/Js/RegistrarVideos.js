import * as FuncionesAuxiliares from "./Fetch_RegistrarVideos.js"
import {SesionActual} from "./Fetch_Login.js"

let usuarioActual = null;



document.addEventListener('DOMContentLoaded', async() => {

const SESSION_KEY = "SesionIniciada";
const sesionActual = JSON.parse(localStorage.getItem(SESSION_KEY));
const DatosUsuario =  await SesionActual(sesionActual);
usuarioActual = DatosUsuario;
console.log("Datos del usuario: ",DatosUsuario);

GenerarFacultades();
GenerarPalabras();
const btnsubirVideo = document.getElementById("btnsubirvideo");
if(btnsubirVideo) btnsubirVideo.addEventListener("click",ValidarVideo);

const selCarrera = document.getElementById("carreraSelect");
  if (selCarrera) resetearSelect(selCarrera, "Selecciona un Programa");
  const selUa = document.getElementById("UaSelect");
  if (selUa) resetearSelect(selUa, "Selecciona una Unidad de Aprendizaje");

})


async function ValidarVideo() {

    const error = document.getElementById('error');
    const titulo = document.getElementById('titulo').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const fase = document.getElementById('Fase')
    const faseSelect = fase.options[fase.selectedIndex].text;

 
    const palabrasSelect = obtenerPalabrasSeleccionadas();

    const Uaselect = document.getElementById('UaSelect').value;

    if(!titulo) {
        sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Escriba un titulo";
    }

    if(!descripcion) {
        sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Escriba una descripcion";
    }

     let idF = null;
    let Facultad = null;

  if (usuarioActual?.admin) {
    const selF = document.getElementById("Facultad");
    if (!selF) { sacudirBoton("btnsubirvideo"); return error.innerHTML = "Seleccione una Facultad"; }
    const rawValue = selF.value;
    idF = Number.parseInt(rawValue, 10);
    if (!idF) { sacudirBoton("btnsubirvideo"); return error.innerHTML = "Seleccione una Facultad"; }
    Facultad = selF.options[selF.selectedIndex].text;
  } else {
    idF = getUserFacultyId(usuarioActual);
    Facultad = usuarioActual?.facultadnombre ?? "Mi facultad";
    if (!idF) { sacudirBoton("btnsubirvideo"); return error.innerHTML = "No se pudo determinar la facultad del usuario"; }
  }

    const selC = document.getElementById("carreraSelect")
  
    const rawValueC = selC.value;
    const idC = Number.parseInt(rawValueC,10);
      if(!idC){
         sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Seleccione un Programa";
    }

    const idU = Number.parseInt(Uaselect,10);
    if(!idU) {
        sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Seleccione una unidad de aprendizaje";
    }
    
    if(palabrasSelect.length == 0){
         sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Debe seleccionar a menos una palabra clave";
    }


    const enlace = document.getElementById('enlace').value.trim();

    if(!enlace) {
        sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Escriba el enlace al video";
    }
    const url = ObtenerIdYoutube(enlace);
    if(!url) {
        sacudirBoton("btnsubirvideo");
        return error.innerHTML = "Enlace no valido";
    }
    const IdUsuario = usuarioActual.usuarioId;
    console.log("Datos del video: ",url,titulo,descripcion,idU,palabrasSelect,faseSelect,IdUsuario,usuarioActual.admin);
    const dataVideoNuevo = await FuncionesAuxiliares.RegistrarVideo(url,titulo,descripcion,idU,palabrasSelect,faseSelect,IdUsuario,usuarioActual.admin);
   if (dataVideoNuevo.success == true) {
  if (usuarioActual.admin) {
    FuncionesAuxiliares.modalaviso("Video cargado con exito");
  } else {
    const msg = 'Video subido para su revision de forma correcta, puede revisar si estatus en la ventana de "Videos Pendientes"';
    // pone el texto en el modal
    FuncionesAuxiliares.modalaviso(msg);

    // asegúrate de redirigir con el botón "Aceptar"
    const btnAceptar = document.getElementById("btnaceptar");
    if (btnAceptar) {
      btnAceptar.onclick = null; // limpia handlers previos
      btnAceptar.addEventListener(
        "click",
        () => (window.location.href = "/Cliente/Html/inicio.html"),
        { once: true }
      );
    }

    // por si tu modalaviso no hace el "show", lo forzamos con Bootstrap
    const modalEl = document.getElementById("modalAviso");
    if (modalEl && window.bootstrap) {
      const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  }
} else {
  FuncionesAuxiliares.modalaviso(dataVideoNuevo.mensaje);
}

    











}

async function GenerarCarreras(idFacuSelect){

    const select = document.getElementById('carreraSelect');
    const selectUa = document.getElementById('UaSelect');


    resetearSelect(select,"Seleccione un Programa");
    if(selectUa) resetearSelect(selectUa,"Selccione una Unidad de Aprendizaje");

    const carreras = await FuncionesAuxiliares.ObtenerCarreras(idFacuSelect)
    carreras
        .forEach(c => {
         const option = document.createElement('option');
        option.value = c.id;
        option.textContent = c.nombre;
        select.appendChild(option);
        })

    select.onchange = (e) => {
        const sel = e.target;
        const raw = sel.value.trim();  
        const carreraid = Number.parseInt(raw, 10);
        if(carreraid) GenerarUas(carreraid);
        else if (selectUa) resetearSelect(selectUa,"Seleccione una Unidad de Aprendizaje"); 
        
    };
}

async function GenerarUas(idcarrera){

    const select = document.getElementById('UaSelect');
    resetearSelect(select,"Seleccione una Unidad de Aprendizaje");

    const uas = await FuncionesAuxiliares.ObtenerUas(idcarrera);
    uas
    .forEach(u => {
        const option = document.createElement('option');
        option.value = u.id;
        option.textContent = u.nombre;
        select.appendChild(option);
    })

}


async function GenerarFacultades(){
const contenedor = document.getElementById("facuformulario");
 if (usuarioActual.admin) {
    const facultades = await FuncionesAuxiliares.ObtenerFacultades();
    const div = document.createElement("div");
    div.classList.add("mb-3");

    const label = document.createElement("label");
    label.setAttribute("for", "Facultad");
    label.classList.add("form-label");
    label.textContent = "Facultad";

    const select = document.createElement("select");
    select.classList.add("form-select");
    select.id = "Facultad";

    const opcionInicial = document.createElement("option");
    opcionInicial.textContent = "Selecciona una Facultad";
    opcionInicial.disabled = true;
    opcionInicial.selected = true;
    opcionInicial.value = "";
    select.appendChild(opcionInicial);

    facultades.forEach(f => {
    const option = document.createElement("option");
    option.value = f.id;
    option.textContent = f.nombre;
    select.appendChild(option);
    });
    select.onchange = (e) => {
        const sel = e.target;
        const raw = sel.value.trim();
        const facultadId = Number.parseInt(raw,10);

        const selCarrera = document.getElementById("carreraSelect");
        const selUa = document.getElementById("UaSelect");
        if (selCarrera) resetearSelect(selCarrera, "Selecciona un Programa");
        if (selUa) resetearSelect(selUa, "Selecciona una Unidad de Aprendizaje");
        if (facultadId) GenerarCarreras(facultadId);
    };

    div.appendChild(label);
    div.appendChild(select);

   contenedor.appendChild(div);
}else {
    const facuId = getUserFacultyId(usuarioActual);
    const selCarrera = document.getElementById("carreraSelect");
    const selUa = document.getElementById("UaSelect");
    if (selCarrera) resetearSelect(selCarrera, "Selecciona un Programa");
    if (selUa) resetearSelect(selUa, "Selecciona una Unidad de Aprendizaje");

    if (facuId) {
      await GenerarCarreras(facuId);
    } else {
      console.warn("No se encontró facultadId en el usuario de sesión.");
    }
  }
    
}

async function GenerarPalabras(){
    const contenedor = document.getElementById('temasContainer');
    contenedor.innerHTML = '';
    const palabras = await FuncionesAuxiliares.ObtenerPalabras();

    palabras.forEach((p) => {
        const idValor = p.id;
        const texto = p.nombre;
        const wrap = document.createElement('div');
        wrap.className = 'form-check';

        const input = document.createElement('input');
        input.type = 'checkbox';
        input.className = 'form-check-input'

        input.id = `tema_${idValor}`;
        input.name = 'temas[]';
        input.value = idValor;
        
      const label = document.createElement('label');
      label.className = 'form-check-label';
      label.setAttribute('for', input.id);
      label.textContent = texto;

      wrap.append(input, label);
      contenedor.appendChild(wrap);

    input.addEventListener('change',limitarSeleccion); 
    });
}


////////-------HELPERS--------///////////
function limitarSeleccion(){
const checkboxs = document.querySelectorAll('input[name="temas[]"]');
const seleccionados = Array.from(checkboxs).filter(cb => cb.checked);
if(seleccionados.length >= 3 ){
    checkboxs.forEach(cb => {
        if (!cb.checked) cb.disabled = true;
    });
}else{
    checkboxs.forEach(cb =>  cb.disabled = false );
}

}

function ObtenerIdYoutube(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[&?].*)?$/;

    const match = url.match(regex); 
    if(match && match[1]){
        return match[1];
    }
    return null;
    
}

function obtenerPalabrasSeleccionadas() {
    return Array.from(
      document.querySelectorAll('#temasContainer input[type="checkbox"]:checked')
    ).map(i => parseInt(i.value, 10));
}

function sacudirBoton(idBoton) {
    const boton = document.getElementById(idBoton);
    if (!boton) return;
    boton.classList.add("shake");
    setTimeout(() => {
        boton.classList.remove("shake");
    }, 400); 
}

function resetearSelect(select, opciontext) {
  select.innerHTML = "";
  const opt = document.createElement("option");
  opt.textContent = opciontext;
  opt.disabled = true;
  opt.selected = true;
  opt.value = "";
  select.appendChild(opt);
}

function getUserFacultyId(usuarioActual) {
  return (
    usuarioActual?.facultad_id ??
    usuarioActual?.facultadid ??
    null
  );
}
