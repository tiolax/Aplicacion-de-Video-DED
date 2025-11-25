import * as FuncionesAuxiliares from "./Fetch_AdminFilltros.js"

document.addEventListener('DOMContentLoaded', () => {
  cargarFiltros();
  cargarPalabras();
  ///////////////Botones de los modales////////////
//Click Guardar Palabra//
const btnPalabra = document.getElementById("btnAgregarPalabra");
if(btnPalabra) btnPalabra.addEventListener("click",ValidarPalabra);

///Click Guardar Facu//
const btnFacu = document.getElementById("btnGuardarFacultad");
  if (btnFacu) btnFacu.addEventListener("click", ValidarFacultad);

//Click Guardar Programa
const btnGuardarPrograma = document.getElementById('btnGuardarPrograma');
if (btnGuardarPrograma) btnGuardarPrograma.addEventListener('click', ValidarCarrera);

//click Guardar UA//
const btnGuardarUA =  document.getElementById('btnGuardarUA');
if(btnGuardarUA) btnGuardarUA.addEventListener('click', ValidarUa); 

//Click actualizar Facu
const btnEditFacu = document.getElementById('btnEditarFacultad');
if(btnEditFacu) btnEditFacu.addEventListener('click',ValidarEditarFacu);

///click actualizar Programa///
const btnEditCarrera = document.getElementById('btnEditarPrograma');
if(btnEditCarrera) btnEditCarrera.addEventListener('click', ValidarEditarCarrera);

////click actualizar UA
const btnEditUA = document.getElementById('btnEditarUa');
if(btnEditUA) btnEditUA.addEventListener('click',ValidarEditarUa);

///barra de busqueda///
const btnBusqueda = document.getElementById('btnbuscar');
if(btnBusqueda) btnBusqueda.addEventListener('click',Filtrar);
    
///Modificadores de Titulos///
const modalAgregarPrograma = document.getElementById("modalAgregarPrograma");
  if (modalAgregarPrograma) {
    modalAgregarPrograma.addEventListener("show.bs.modal", () => {
      const titulo = document.getElementById("tituloModalAgregarCarrera");
      if (titulo) titulo.textContent = "Agregar programa a " + (facultadSeleccionada ?? "");
    });
  }

  const modalAgregarUa = document.getElementById("modalAgregarUA");
  if (modalAgregarUa) {
    modalAgregarUa.addEventListener("show.bs.modal", () => {
      const titulo = document.getElementById("tituloModalAgregarUa");
      if (titulo) titulo.textContent = "Agregar Unidad de Aprendizaje a " + (carreraSeleccionada ?? "");
    });
  }
});

let facultadSeleccionada = null; let idfacultadSeleccionada = null;
let carreraSeleccionada = null; let carreraSelecId = null;
let uaSeleccionada = null; let uaSeleccionadaid = null;
let nombreSeleccion = null; let tipoSeleccion = null;
let palabras = null; let palabraselect = null;

const Data = {
  facultades: [],
  carreras: [],
  uas: []
};

// ==== FUNCION PRINCIPAL ====
async function cargarFiltros() {
  const datos = await FuncionesAuxiliares.ObtenerDatos();
  SetData(datos);
  renderTabla(Data);
  bindEventosTabla();
  bindBotonesAccion();
}
async function cargarPalabras(){
const data = await FuncionesAuxiliares.ObtenerPalabras();

palabras = Array.isArray(data.palabras) ? data.palabras.map(p => p.nombre).filter(Boolean) : [];

const listaPalabras = document.getElementById('listaPalabras');
const emptyBankMsg  = document.getElementById('emptyBankMsg');

listaPalabras.innerHTML = "";

if(palabras.length === 0){
  emptyBankMsg.classList.remove('d-node');
  return
}else{
  emptyBankMsg.classList.add('d-node');
}

palabras.forEach((palabra) => {
  const col = document.createElement('div');
  col.className = "col-md-4 mb-2"; 
  col.innerHTML = `
    <div class="d-flex justify-content-between align-items-center border rounded p-2">
      <span>${palabra}</span>
       <div class="btn-group">
      <button  class="btn-editark" style="display:block;" data-palabra="${palabra}">
        <i class="bi bi-pencil"></i>
      </button>
      <button  class="btn-eliminark" style="display:block;" data-palabra="${palabra}">
        <i class="bi bi-trash"></i>
      </button>
    </div>
     
    </div>
  `; 
  listaPalabras.appendChild(col);
});

//botones de las palabras
// Botones "eliminar"
document.querySelectorAll('.btn-eliminark').forEach(btn => {
  btn.addEventListener('click', (e) => {
    palabraselect = e.currentTarget.dataset.palabra;
    document.getElementById('textModalnivel1').innerText =
      `¿Desea eliminar: "${palabraselect}"?`;

    const modal = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
    modal.show();
  });
});

// Botones "editar"
document.querySelectorAll('.btn-editark').forEach(btn => {
  btn.addEventListener('click', (e) => {
    palabraselect = e.currentTarget.dataset.palabra;
    document.getElementById('titulomodalEditarPalabra').innerText =
      `Modificar entrada: "${palabraselect}"`;

    // (opcional) precargar el input con la palabra actual
    const input = document.getElementById('nombrePalabraEditada');
    if (input) input.value = palabraselect || '';

    const modal = new bootstrap.Modal(document.getElementById('modalEditarPalabra'));
    modal.show();
  });
});

// === EDITAR PALABRA ===
const btnne = document.getElementById("btnEditarPalabra");
const onClicke = async (e) => {
  const btn = e.currentTarget;
  btn.disabled = true; 
  try {
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarPalabra'));
    if (modal) modal.hide(); 

    const ok = await modalContra();
    if (!ok) return;

    const errorDiv = document.getElementById('error-msgep');
    if (errorDiv) errorDiv.textContent = "";

    const input = document.getElementById('nombrePalabraEditada');
    const palabranueva = (input?.value ?? "").trim();

    if (!FuncionesAuxiliares.Alfanumerico(palabranueva)) {
      if (errorDiv) errorDiv.textContent = "Formato no permitido";
      return;
    }

    const data = await FuncionesAuxiliares.EditarPalabra(palabraselect, palabranueva);

    if (data?.success) {
      const modal2 = bootstrap.Modal.getInstance(document.getElementById('modalEditarPalabra'));
      if (modal2) modal2.hide();
      FuncionesAuxiliares.modalaviso("Palabra actualizada con éxito");
      document.getElementById("btnaceptar")
        .addEventListener("click", () => location.reload(), { once: true });
    }
  } finally {
    btn.disabled = false;
  }
};


btnne.addEventListener("click", onClicke);

// === CONFIRMAR ELIMINACIÓN ===
const bttn = document.getElementById("btnConfirmar");
const onClick = async () => {
  bttn.removeEventListener("click", onClick);
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalConfirmacion'));
  if (modal) modal.hide();

  const ok = await modalContra();
  if (!ok) return;

  await FuncionesAuxiliares.EliminarPalabra(palabraselect);
  FuncionesAuxiliares.modalaviso("Palabra eliminada con éxito");
  document.getElementById("btnaceptar")
    .addEventListener("click", () => location.reload(), { once: true });
};
bttn.addEventListener("click", onClick, { once: true });


}


function SetData( {facultades,carreras,uas}){
  Data.facultades = facultades || [];
  Data.carreras = carreras || [];
  Data.uas =  uas || [];
}
function renderTabla(data) {
  const tbody = document.getElementById("tablafacu");
  if (!tbody) return;
  tbody.innerHTML = "";

  data.facultades.forEach((facultad, index) => {
    // Fila principal de facultad
    const trFacu = document.createElement('tr');
    trFacu.classList.add('fila-principal');
    trFacu.dataset.id = facultad.id;
    trFacu.dataset.nombre = facultad.nombre;
    const numCarreras = facultad._count.carreras;
    const nombresUsuarios = facultad.usuarios.map(u => u.nombre_de_usuario).join(', ');

    trFacu.innerHTML = `
      <th scope="row">${index + 1}</th>
      <td>${facultad.nombre}</td>
      <td>${nombresUsuarios}</td>
      <td>${numCarreras}</td>
      <td>
        <button class="btn-editar" style="display:none;"> <i class="bi bi-pencil"></i></button>
        <button class="btn-eliminar" style="display:none;"> <i class="bi bi-trash"></i></button>
      </td>
    `;
    tbody.appendChild(trFacu);

    // Subtabla de carreras
    const trSubCarreras = document.createElement('tr');
    trSubCarreras.classList.add('subtabla-carreras');
    trSubCarreras.style.display = 'none';
    const carrerasFacu = data.carreras.filter(c => c.facultad && c.facultad.nombre === facultad.nombre);
    let htmlCarreras = `
      <td colspan="4">
        <table class="table table-sm mb-0">
          <thead class="thead-dark bg-dark-subtle">
            <tr>
              <th>Nombre del Programa</th>
              <th>Cantidad de Materias</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
    `;

    if (carrerasFacu.length) {
      carrerasFacu.forEach(carrera => {
        const uasDeCarrera = data.uas.filter(u => u.carrera && u.carrera.nombre === carrera.nombre);
        htmlCarreras += `
          <tr class="fila-carrera" data-nombre="${carrera.nombre}" data-id="${carrera.id}">
            <td style="cursor:pointer">${carrera.nombre}</td>
            <td>${carrera._count.ua}</td>
            <td>
              <button class="btn-editar" style="display:none;"> <i class="bi bi-pencil"></i></button>
              <button class="btn-eliminar" style="display:none;"> <i class="bi bi-trash"></i></button>
            </td>
          </tr>
          <tr class="subtabla-ua" data-carrera="${carrera.nombre}" style="display:none;">
            <td colspan="2">
              <table class="table table-bordered table-sm mb-0">
                <thead class="thead-dark bg-dark-subtle">
                  <tr>
                    <th>Nombre UA</th>
                    <th>Modalidad</th>
                    <th>Videos</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${
                    uasDeCarrera.length
                      ? uasDeCarrera.map(ua => `
                        <tr class="fila-ua" data-nombre="${ua.nombre}" data-id="${ua.id}">
                          <td>${ua.nombre}</td>
                          <td>${ua.modalidad}</td>
                          <td>${ua._count.videos}</td>
                          <td>
                            <button class="btn-editar" style="display:none;"> <i class="bi bi-pencil"></i></button>
                            <button class="btn-eliminar" style="display:none;"> <i class="bi bi-trash"></i></button>
                          </td>
                        </tr>
                      `).join('')
                      : `<tr><td colspan="2">Sin UAs registradas</td></tr>`
                  }
                  <tr>
                    <td colspan="4" class="text-center">
                      <button class="btn btn-secondary btn-agregar-ua" data-carrera="${carrera.nombre}" data-id="${carrera.id}" data-bs-toggle="modal" data-bs-target="#modalAgregarUA">
                        <i class="bi bi-plus-lg">UA</i> 
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        `;
      });
    } else {
      htmlCarreras += `<tr><td colspan="2">Sin programas registrados</td></tr>`;
    }

    // Botón para agregar carreras
    htmlCarreras += `
      <tr>
        <td colspan="3" class="text-center">
          <button id="btn-agregarCarrera" class="btn btn-secondary btn-agregar-carrera" data-id="${facultad.id}" data-facultad="${facultad.nombre}" data-bs-toggle="modal" data-bs-target="#modalAgregarPrograma">
            <i class="bi bi-plus-lg"> Programa</i>
          </button>
        </td>
      </tr>
    `;

    htmlCarreras += `</tbody></table></td>`;
    trSubCarreras.innerHTML = htmlCarreras;
    tbody.appendChild(trSubCarreras);
  });
}
function bindEventosTabla() {
  // FACULTAD
  document.querySelectorAll('.fila-principal').forEach(trFacu => {
    trFacu.addEventListener('click', () => {
      const trSubCarreras = trFacu.nextElementSibling; // su subtabla correspondiente
      const expandida = trSubCarreras && trSubCarreras.style.display === 'table-row';

      document.querySelectorAll('.subtabla-carreras').forEach(sub => {
        sub.style.display = 'none';
        sub.querySelectorAll('.fila-carrera.selected').forEach(f => f.classList.remove('selected'));
        sub.querySelectorAll('.subtabla-ua').forEach(subUa => subUa.style.display = 'none');
        sub.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
      });
      document.querySelectorAll('.fila-principal').forEach(fila => fila.classList.remove('selected'));

      if (!expandida && trSubCarreras) {
        trSubCarreras.style.display = 'table-row';
        trFacu.classList.add('selected');
      }
      actualizarVisibilidadBotonesEdicion();

      facultadSeleccionada = trFacu.dataset.nombre;
      idfacultadSeleccionada = Number(trFacu.dataset.id);
    });
  });

  // CARRERA
  document.querySelectorAll('.fila-carrera').forEach(filaCarrera => {
    filaCarrera.addEventListener('click', function(e) {
      e.stopPropagation();
      const carreraNombre = this.dataset.nombre;
      // La subtabla-ua es la siguiente fila:
      let uaRow = this.nextElementSibling;
      while (uaRow && !uaRow.classList.contains('subtabla-ua')) {
        uaRow = uaRow.nextElementSibling;
      }
      const estabaExpandida = uaRow && uaRow.style.display === 'table-row';

      const contenedor = this.closest('.subtabla-carreras');
      if (contenedor) {
        contenedor.querySelectorAll('.subtabla-ua').forEach(subUa => {
          subUa.style.display = 'none';
          subUa.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
        });
        contenedor.querySelectorAll('.fila-carrera.selected').forEach(f => f.classList.remove('selected'));
      }

      if (!estabaExpandida && uaRow) {
        uaRow.style.display = 'table-row';
        this.classList.add('selected');
        carreraSeleccionada = carreraNombre;
        carreraSelecId = Number(this.dataset.id);
      }
      actualizarVisibilidadBotonesEdicion();
    });
  });

  // UA
  document.querySelectorAll('.subtabla-ua').forEach(subUa => {
    subUa.querySelectorAll('tbody tr.fila-ua').forEach(filaUa => {
      filaUa.addEventListener('click', function(e) {
        e.stopPropagation();
        const yaSeleccionada = this.classList.contains('selected');
        subUa.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
        if (!yaSeleccionada) {
          this.classList.add('selected');
          uaSeleccionada = this.dataset.nombre;
          uaSeleccionadaid = Number(this.dataset.id);
        }
        actualizarVisibilidadBotonesEdicion();
      });
    });
  });
}
function bindBotonesAccion() {
  document.querySelectorAll('.btn-editar').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();

      const fila = this.closest('tr');
      if (fila) {
        nombreSeleccion = fila.dataset.nombre || '';
        let modalEditar = null;

        ///Botones Editar
        if (fila.classList.contains('fila-principal')) {
          tipoSeleccion = 1; // Facultad
          document.getElementById('TitulomodalEditarFacultad').innerText = `Editar ${nombreSeleccion}`;
          modalEditar = new bootstrap.Modal(document.getElementById('modalEditarFacultad'));
        } else if (fila.classList.contains('fila-carrera')) {
          tipoSeleccion = 2; // Carrera
          document.getElementById('tituloModalEditarCarrera').innerText = `Editar ${nombreSeleccion}`;
          modalEditar = new bootstrap.Modal(document.getElementById('modalEditarPrograma'));
        } else if (fila.classList.contains('fila-ua')) {
          tipoSeleccion = 3; // UA
          document.getElementById('tituloModalEditarUa').innerText = `Editar ${nombreSeleccion}`;
          modalEditar = new bootstrap.Modal(document.getElementById('modalEditarUA'));
        } else {
          tipoSeleccion = null;
        }
        modalEditar.show();
      }
    });
  });

  document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const fila = this.closest('tr');

      if (fila.classList.contains('fila-principal')) {
        tipoSeleccion = 1; // Facultad
        ValidarEliminacionFacultad();

      } else if (fila.classList.contains('fila-carrera')){
        tipoSeleccion = 2; // Carrera
        ValidaEliminacionCarrera();

      } else if (fila.classList.contains('fila-ua')) {
        tipoSeleccion = 3; //ua
        ValidarEliminarUa();
      }
    });
  });
}
///////Validaciones Creacion////////
async function ValidarFacultad() {
  const errorDiv = document.getElementById('error-msgf');
  const nombre = document.getElementById('nombreFacultad').value;

  if(!nombre) return (errorDiv.textContent = "Porfavor rellene el campo");   
  if(!FuncionesAuxiliares.Alfanumerico(nombre)) return ( errorDiv.textContent = "Formato no permitido");
  errorDiv.textContent = ""; 

const ok = await modalContra();
if(!ok) return;

  const data = await FuncionesAuxiliares.RegistrarFacultad(nombre);



 if (data.success) {
    document.getElementById('nombreFacultad').value = "";
    bootstrap.Modal.getInstance(document.getElementById("modalAgregarFacultad")).hide();
    FuncionesAuxiliares.modalaviso("Facultad registrada con exito");
    document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }

}
async function ValidarCarrera() {
const errorDiv = document.getElementById('error-msgc');
const nombre = document.getElementById('nombrePrograma').value;
if(!nombre) return (errorDiv.textContent = "Porfavor rellene el campo");
if(!FuncionesAuxiliares.Alfanumerico(nombre))return (errorDiv.textContent = "Formato no permitido");
errorDiv.textContent = "";

const facuId = Number(idfacultadSeleccionada);

const ok = await modalContra();
if(!ok) return;

const data = await FuncionesAuxiliares.RegistrarCarrera(nombre,facuId);

  if (data.success) {
    document.getElementById('nombrePrograma').value = "";
     bootstrap.Modal.getInstance(document.getElementById("modalAgregarPrograma")).hide();
    FuncionesAuxiliares.modalaviso("Programa registrado con éxito");
     document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }
}
async function ValidarUa() {
const errorDiv = document.getElementById('error-msgu');
const nombre = document.getElementById('nombreUA').value.trim();
const modalidad = document.getElementById('modalidad').value;

if (!nombre || !modalidad) return (errorDiv.textContent = "Por favor, rellena los campos faltantes");
  if (!FuncionesAuxiliares.Alfanumerico(nombre)) return (errorDiv.textContent = "Formato no permitido");
  errorDiv.textContent = "";

  const ok = await modalContra();
if(!ok) return;

  const data = await FuncionesAuxiliares.RegistrarUa(nombre,modalidad,carreraSelecId);
  if (data.success) {
    document.getElementById('nombreUA').value = "";
    bootstrap.Modal.getInstance(document.getElementById("modalAgregarUA")).hide();
    FuncionesAuxiliares.modalaviso("Unidad de Aprendzaje registrada con éxito");
    document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
      } else {
        errorDiv.textContent = data.mensaje || "Error en el servidor";
      }
}
async function ValidarPalabra() {
const nuevaPalabra = document.getElementById('inputNuevaPalabra').value.trim();
const error = document.getElementById("error-msgp");
if(!nuevaPalabra) {
  error.innerText = "Rellene el campo";
  return;
}
palabras.forEach((palabra) => {
    if(palabra == nuevaPalabra){
    error.innerHTML = "Palabra ya existente";
    return;
  }
})
    const ok = await modalContra();
      if (!ok) return;

  const data = await FuncionesAuxiliares.RegistrarPalabra(nuevaPalabra);
  
  if(data.success){
    FuncionesAuxiliares.modalaviso("Palabra creada con éxito");
    document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
  }

}

///////Validaciones Eliminacion//////
async function ValidaEliminacionCarrera(){
  const id = carreraSelecId;
  const data = await FuncionesAuxiliares.ObtenerUasporCarrera(id);
  const uas = data.Uas;

  const modalConfirmacion = new bootstrap.Modal(document.getElementById("modalConfirmacion"));
  const titulo1 = document.getElementById("textModalnivel1");

  if (uas.length == 0) {
    if (titulo1) titulo1.innerHTML = `¿Desea eliminar el programa <b>${carreraSeleccionada}</b>?`;
    modalConfirmacion.show();

    const btn = document.getElementById("btnConfirmar");
    const onClick = async () => {
      btn.removeEventListener("click", onClick);
      modalConfirmacion.hide();

      const ok = await modalContra();
      if (!ok) return;

      await FuncionesAuxiliares.EliminarCarrera(id);
      FuncionesAuxiliares.modalaviso("Programa eliminado con éxito");
      document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
    };
    btn.addEventListener("click", onClick, { once: true });

  } else {
    if (titulo1) titulo1.innerHTML = `¿Desea eliminar el programa <b>${carreraSeleccionada}</b>?`;
    modalConfirmacion.show();

    const btn1 = document.getElementById("btnConfirmar");
    btn1.addEventListener("click", () => {
      modalConfirmacion.hide();

      const modalConfirmacion2 = new bootstrap.Modal(document.getElementById("modalConfirmacion2"));
      const titulo2 = document.getElementById("textomodalEliminarCarreraCascada");
      if (titulo2) titulo2.textContent = carreraSeleccionada;
      modalConfirmacion2.show();

      const btn2 = document.getElementById("btnConfirmar2");
      const onClick2 = async () => {
        btn2.removeEventListener("click", onClick2);
        modalConfirmacion2.hide();

        const ok = await modalContra();
        if (!ok) return;

        await FuncionesAuxiliares.EliminarCarreraCascada(id);
        FuncionesAuxiliares.modalaviso("Carrera eliminada con éxito");
        document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
      };
      btn2.addEventListener("click", onClick2, { once: true });

    }, { once: true });
  }
}
async function ValidarEliminacionFacultad() {
  const facu = idfacultadSeleccionada;
  const data = await FuncionesAuxiliares.ObtenerCarreraporFacu(facu);
  const carreras = data.carreras;

  if (carreras.length == 0) {
    const modalConfirmacion = document.getElementById('modalConfirmacion');
    const modal = new bootstrap.Modal(modalConfirmacion);
    document.getElementById('textModalnivel1').innerHTML = '¿Desea eliminar la  <b>' + facultadSeleccionada + '</b>?';
    modal.show();

    const btn = document.getElementById("btnConfirmar");
    const onClick = async () => {
      btn.removeEventListener("click", onClick);
      modal.hide();

      const ok = await modalContra();
      if (!ok) return;

      await FuncionesAuxiliares.EliminarFacultad(idfacultadSeleccionada);
      FuncionesAuxiliares.modalaviso("Facultad Eliminada con exito");
      document.getElementById("btnaceptar").addEventListener("click", () => {
        location.reload();
      }, { once: true });
    };

    btn.addEventListener("click", onClick, { once: true });

  } else {
    FuncionesAuxiliares.modalaviso("Esta Facultad contiene Carreras y Unidades de Aprendizaje. Elimínelas antes de proseguir con la acción.")
  }
}
async function ValidarEliminarUa(){
  const modalConfirmacion = new bootstrap.Modal(document.getElementById('modalConfirmacion'));
  const titulo1 = document.getElementById('textModalnivel1');
  if (titulo1) titulo1.innerHTML = `¿Desea eliminar la Unidad de Aprendizaje <b>${uaSeleccionada}</b>?`;
  modalConfirmacion.show();

  const btn = document.getElementById("btnConfirmar");

  const onClick = async () => {
    btn.removeEventListener("click", onClick);
    modalConfirmacion.hide();
    const ok = await modalContra();  
    if (!ok) return;                 
    try {
      await FuncionesAuxiliares.EliminarUa(uaSeleccionadaid);

      FuncionesAuxiliares.modalaviso("Unidad de Aprendizaje eliminada con exito");
      document.getElementById("btnaceptar").addEventListener("click", () => location.reload(), { once: true });
    } catch (e) {
      console.error(e);
      FuncionesAuxiliares.modalaviso("Error al eliminar la Unidad de Aprendizaje");
    }
  };
  btn.addEventListener("click", onClick, { once: true });
}

///////Validacion Editar///////////
async function ValidarEditarFacu() {
    const errorDiv = document.getElementById('error-msgef');
    const nombre = document.getElementById('nombreEditFacultad').value;
    const id = idfacultadSeleccionada;

   if(!FuncionesAuxiliares.Alfanumerico(nombre)){
      errorDiv.textContent = "Formato no permitido";
      return;
   }
    const data = await FuncionesAuxiliares.EditarFacultad(nombre,id);
  if (data.success) {
    document.getElementById('TitulomodalEditarFacultad').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarFacultad'));
    modal.hide();

    FuncionesAuxiliares.modalaviso("Facultad actualizada con exito");
     document.getElementById("btnaceptar").addEventListener("click",() => {
        location.reload();
        }) 
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }
}
async function ValidarEditarCarrera(){
    const errorDiv = document.getElementById('error-msgec');
    const nombre = document.getElementById('nombreEditarPrograma').value;
    const id = carreraSelecId;
  if(!FuncionesAuxiliares.Alfanumerico(nombre)){
      errorDiv.textContent = "Formato no permitido";
      return;
   }
    const data = await FuncionesAuxiliares.EditarCarrera(nombre,id,);
  if (data.success) {
    document.getElementById('nombreEditarPrograma').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarPrograma'));
    modal.hide();

    FuncionesAuxiliares.modalaviso("Programa actualizado con exito");
     document.getElementById("btnaceptar").addEventListener("click",() => {
        location.reload();
        }) 
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }
}
async function ValidarEditarUa(){
    const errorDiv = document.getElementById('error-msgeu');
    const nombre = document.getElementById('nombreUAedit').value;
    const modalidad = document.getElementById('modalidadedit').value;
    const id = uaSeleccionadaid;

  if(!FuncionesAuxiliares.Alfanumerico(nombre)){
    errorDiv.textContent = "Formato no permitido";
      return;
  }
    const data = await FuncionesAuxiliares.EditarUa(id,nombre,modalidad,carreraSelecId);
     if (data.success) {
    document.getElementById('nombreUAedit').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalEditarUA'));
    modal.hide();
    FuncionesAuxiliares.modalaviso("Unidad de Aprendzaje actualizada con éxito");
       document.getElementById("btnaceptar").addEventListener("click",() => {
        location.reload();
        }) 
  } else {
    errorDiv.textContent = data.mensaje || "Error en el servidor";
  }

}
async function ValidarContra(){
  const contra = document.getElementById("nombreModalContra").value.trim();
  const errorDiv = document.getElementById('error-msgcontra');
  errorDiv.textContent = "";

const ok = await FuncionesAuxiliares.Validarcontradmin(contra);

 if(!ok){
  errorDiv.textContent = "Contraseña incorrecta";
  return false;
 }
 return true; 
}
function actualizarVisibilidadBotonesEdicion() {
  document.querySelectorAll('.btn-editar, .btn-eliminar').forEach(btn => {
    btn.style.display = 'none';
  });
  document.querySelectorAll('.selected').forEach(fila => {
    fila.querySelectorAll('.btn-editar, .btn-eliminar').forEach(btn => {
      btn.style.display = '';
    });
  });
}
function Filtrar(){
  const palabra = document.getElementById("PalabraFiltro").value.trim();
  const dataFiltrada = FuncionesAuxiliares.filtrarData(palabra,Data);
  if(dataFiltrada.facultades.length === 0){
    FuncionesAuxiliares.modalaviso("Sin coincidencias, revise el uso de acentos")
  }
  renderTabla(dataFiltrada);
  bindEventosTabla();
  bindBotonesAccion();
}
 function modalContra(){
  const modalContra = document.getElementById("modalContra");
  let modalaviso = bootstrap.Modal.getInstance(modalContra) || new bootstrap.Modal(modalContra, { backdrop: 'static' });

  const btnContra  = document.getElementById('btnConfirmarContra');
  const inputContra = document.getElementById('nombreModalContra');
  const errorDiv   = document.getElementById('error-msgcontra');

  if (errorDiv) errorDiv.textContent = "";
  if (inputContra) inputContra.value = "";

  modalaviso.show();
  inputContra?.focus();

  return new Promise((resolve) => {
    const onHidden = () => { cleanup(); resolve(false); };

    const onClick = async () => {
      btnContra.disabled = true;
      const ok = await ValidarContra();     
      btnContra.disabled = false;

      if (ok) {
        modalaviso.hide();
        cleanup();
        resolve(true);                   
      } else {
        inputContra?.focus();
        inputContra?.select?.();
      }
    };

    function cleanup(){
      modalContra.removeEventListener('hidden.bs.modal', onHidden);
      btnContra.removeEventListener('click', onClick);
    }

    modalContra.addEventListener('hidden.bs.modal', onHidden, { once: true });
    btnContra.addEventListener('click', onClick); 
    inputContra?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); btnContra.click(); }
    }, { once: true });
  });
}
