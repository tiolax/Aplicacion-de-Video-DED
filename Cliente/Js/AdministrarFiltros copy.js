document.addEventListener('DOMContentLoaded', () => {
  cargarFiltros();

  const formfacu = document.getElementById('formAgregarFacultad');
  if(formfacu) {
    formfacu.addEventListener('submit', async function(e) {
      e.preventDefault();
      await RegistrarFacultad();
    });
  }else{
    console.log("no se cargo el elemento")
  }

    const formcarrera = document.getElementById('formAgregaPrograma');
  if(formcarrera) {
    formcarrera.addEventListener('submit', async function(e) {
      e.preventDefault();
      await RegistrarCarrera();
    });
  }else{
    console.log("no se cargo el elemento")
  }

    const formua = document.getElementById('modalAgregarUA');
  if(formua) {
    formua.addEventListener('submit', async function(e) {
      e.preventDefault();
      await RegistrarUa();
    });
  }else{
    console.log("no se cargo el elemento")
  }

     const fomrEditFacu = document.getElementById('formEditarFacultad');
  if(fomrEditFacu) {
    formua.addEventListener('submit', async function(e) {
      e.preventDefault();
      console.log("clik al boton")
      await EditarFacu();
    });
  }else{
    console.log("no se cargo el elemento4512")
  }



});
document.addEventListener('click', ()=>{
  console.log("tamaño de seleccion:",document.querySelectorAll('.Last-selected').length)
  if(document.querySelectorAll('.Last-selected').length == 1){
    let selec = document.querySelectorAll('.Last-selected')[0];
    UltimaSeleccion = selec.dataset.nombre;
    console.log('Ultima seleccion:',UltimaSeleccion);
    document.getElementById('btnEditarSeleccion').disabled = false;
  }else{
     document.getElementById('btnEditarSeleccion').disabled = true;
  }

  if(UltimaSeleccionTipo){
      GenerarModal();
  }
});



let facultadSeleccionada = null;
let facuId = null;

let carreraSeleccionad = null;
let carreraSelecId = null;

let UltimaSeleccion = null;
let UltimaSeleccionId = null;
let UltimaSeleccionTipo = null;

document.getElementById('btnAgregarPrograma').addEventListener('click', function() {
  document.getElementById('tituloModalAgregarCarrera').innerText =
    `${facultadSeleccionada}`;
});

document.getElementById('btnAgregarUa').addEventListener('click', function() {
  document.getElementById('tituloModalAgregarUa').innerText =
    `${carreraSeleccionad}`;
});

document.getElementById('btnEditarSeleccion').addEventListener('click', function() {
  document.getElementById('tituloModalEditar').innerText =
    `${UltimaSeleccion}`;
});

async function cargarFiltros() {
  const [facultadesRes, carrerasRes, uasRes] = await Promise.all([
    fetch(`${window.API_URL}/facultades/info`, { headers: { "Content-Type": "application/json" } }),
    fetch(`${window.API_URL}/carreras/info`,   { headers: { "Content-Type": "application/json" } }),
    fetch(`${window.API_URL}/UAs/info`,         { headers: { "Content-Type": "application/json" } })
  ]);

  const facultades = (await facultadesRes.json()).Facultades;
  const carreras   = (await carrerasRes.json()).Carreras;
  const uas        = (await uasRes.json()).Uas;

  const tbody = document.getElementById("tablafacu");

  facultades.forEach((facultad, index) => {
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
    `;
    tbody.appendChild(trFacu);

    const trSubCarreras = document.createElement('tr');
    trSubCarreras.classList.add('subtabla-carreras');
    trSubCarreras.style.display = 'none';

    const carrerasFacu = carreras.filter(c => c.facultad && c.facultad.nombre === facultad.nombre);
    let htmlCarreras = `
      <td colspan="4">
        <table class="table table-sm mb-0">
          <thead class="thead-dark bg-dark-subtle">
            <tr>
              <th>Nombre de la Carrera</th>
              <th>Cantidad de Materias</th>
            </tr>
          </thead>
          <tbody>
    `;

    if (carrerasFacu.length) {
      carrerasFacu.forEach(carrera => {
        htmlCarreras += `
          <tr class="fila-carrera" data-nombre="${carrera.nombre}" data-id="${carrera.id}">
            <td style="cursor:pointer">${carrera.nombre}</td>
            <td>${carrera._count.ua}</td>
          </tr>
          <tr class="subtabla-ua" data-carrera="${carrera.nombre}" style="display:none;">
            <td colspan="2">
              <table class="table table-bordered table-sm mb-0">
                <thead class="thead-dark bg-dark-subtle">
                  <tr>
                    <th>Nombre UA</th>
                    <th>Modalidad</th>
                    <th>Videos</th>
                  </tr>
                </thead>
                <tbody>
                  ${
                    uas.filter(u => u.carrera && u.carrera.nombre === carrera.nombre).length
                      ? uas.filter(u => u.carrera && u.carrera.nombre === carrera.nombre).map(ua => `
                        <tr class="fila-ua"  data-nombre="${ua.nombre}" data-id="${ua.id}">
                          <td>${ua.nombre}</td>
                          <td>${ua.modalidad}</td>
                          <td>${ua._count.videos}</td>
                        </tr>
                      `).join('')
                      : `<tr><td colspan="2">Sin UAs registradas</td></tr>`
                  }
                </tbody>
              </table>
            </td>
          </tr>
        `;
      });
    } else {
      htmlCarreras += `<tr><td colspan="2">Sin carreras registradas</td></tr>`;
    }
    htmlCarreras += `</tbody></table></td>`;
    trSubCarreras.innerHTML = htmlCarreras;
    tbody.appendChild(trSubCarreras);

    // TOGGLE FACULTAD - CARRERA
    trFacu.addEventListener('click', () => {
      const expandida = trSubCarreras.style.display === 'table-row';
      document.querySelectorAll('.subtabla-carreras').forEach(sub => {
        sub.style.display = 'none';
        sub.querySelectorAll('.fila-carrera.selected').forEach(f => f.classList.remove('selected'));
        sub.querySelectorAll('.subtabla-ua').forEach(subUa => subUa.style.display = 'none');
        sub.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
      });
      document.querySelectorAll('.fila-principal').forEach(fila => fila.classList.remove('selected'));

      // Toggle
      if (!expandida) {
        trSubCarreras.style.display = 'table-row';
        trFacu.classList.add('selected');
        document.getElementById('btnAgregarPrograma').disabled = false;
        facultadSeleccionada = facultad.nombre;
        facuId = Number(trFacu.dataset.id);
        //manejo de ultima seleccion:
        document.querySelectorAll('.Last-selected').forEach(el => el.classList.remove('Last-selected'));
        trFacu.classList.add('Last-selected');
        UltimaSeleccion = facultad.nombre;
        UltimaSeleccionId = facuId;
        UltimaSeleccionTipo = 1;

      } else {
      document.getElementById('btnAgregarPrograma').disabled = true;
      trFacu.classList.remove('Last-selected')
      document.querySelectorAll('.Last-selected').forEach(el => el.classList.remove('Last-selected'));
      }
setTimeout(() => {
  const algunaSeleccionada = document.querySelector('.fila-principal.selected');
  document.getElementById('btnAgregarPrograma').disabled = !algunaSeleccionada;
}, 0);
    });

    setTimeout(() => {
      // TOGGLE CARRERA - UA
      trSubCarreras.querySelectorAll('.fila-carrera').forEach(filaCarrera => {
        filaCarrera.addEventListener('click', function(e) {
          e.stopPropagation();
          const carreraNombre = this.dataset.nombre;
          const carreraId = this.dataset.id;

          const uaRow = trSubCarreras.querySelector(`.subtabla-ua[data-carrera="${carreraNombre}"]`);
          const estabaExpandida = uaRow && uaRow.style.display === 'table-row';

          trSubCarreras.querySelectorAll('.subtabla-ua').forEach(subUa => {
            subUa.style.display = 'none';
            subUa.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
          });
          trSubCarreras.querySelectorAll('.fila-carrera.selected').forEach(f => f.classList.remove('selected'));

          // Toggle
          if (!estabaExpandida && uaRow) {
            uaRow.style.display = 'table-row';
            this.classList.add('selected');
            document.getElementById('btnAgregarUa').disabled = false;
            carreraSeleccionad = carreraNombre
            carreraSelecId = Number(carreraId);
                   //manejo de ultima seleccion:
        document.querySelectorAll('.Last-selected').forEach(el => el.classList.remove('Last-selected'));
        this.classList.add('Last-selected');
        
        UltimaSeleccion = carreraSeleccionad;
        UltimaSeleccionId = carreraSelecId;
        UltimaSeleccionTipo = 2;

          }else{

            document.querySelectorAll('.selected').forEach(el => el.classList.add('Last-selected'));

             document.getElementById('btnAgregarUa').disabled = true;
             this.classList.remove('Last-selected');
          }
        });
      });

      trSubCarreras.querySelectorAll('.subtabla-ua').forEach(subUa => {
        subUa.querySelectorAll('tbody tr.fila-ua').forEach(filaUa => {
          filaUa.addEventListener('click', function(e) {
  e.stopPropagation();

  const yaSeleccionada = this.classList.contains('selected');
  
  // Siempre quitamos la selección previa de todas las filas
  subUa.querySelectorAll('.fila-ua.selected').forEach(f => f.classList.remove('selected'));
  document.querySelectorAll('.Last-selected').forEach(el => el.classList.remove('Last-selected'));

  if (!yaSeleccionada) {

    this.classList.add('selected');
    this.classList.add('Last-selected');
    UltimaSeleccion = this.dataset.nombre;
    UltimaSeleccionId = this.dataset.id;
    UltimaSeleccionTipo = 3;
    console.log("Ultima Seleccion:", UltimaSeleccion, UltimaSeleccionId, UltimaSeleccionTipo);
  } else {
      document.querySelectorAll('.fila-carrera.selected').forEach(el => el.classList.add('Last-selected'));
  }
});

        });
      });
    }, 0);
  });
}

async function RegistrarUa() {
const errorDiv = document.getElementById('error-msgu');
const nombre = document.getElementById('nombreUA').value;
const modalidad = document.getElementById('modalidad').value;
if(!nombre || !modalidad){
  errorDiv.textContent = "Porfavor rellene los campos faltantes";
  return;
}
errorDiv.textContent = "";

    const res = await fetch(`${window.API_URL}/UAs/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre,modalidad,carreraSelecId})
  });

  const data = await res.json();

  if (data.success) {
    alert("Programa creado con éxito");
    document.getElementById('nombreUa').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregarPrograma'));
    modal.hide();
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }


}
async function RegistrarCarrera() {
const errorDiv = document.getElementById('error-msgc');
const nombre = document.getElementById('nombrePrograma').value;
if(!nombre){
  errorDiv.textContent = "Porfavor rellene el campo";
  return;
}
errorDiv.textContent = "";

    const res = await fetch(`${window.API_URL}/carreras/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre,facuId })
  });

  const data = await res.json();

  if (data.success) {
    alert("Programa creado con éxito");
    document.getElementById('nombreFacultad').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregarPrograma'));
    modal.hide();
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }


}
async function RegistrarFacultad() {
 const errorDiv = document.getElementById('error-msgf');
  const nombre = document.getElementById('nombreFacultad').value;
  if(!nombre){
     errorDiv.textContent = "Porfavor rellene el campo"; 
     return;
  }

  errorDiv.textContent = ""; 

  const res = await fetch(`${window.API_URL}/facultades/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });

  const data = await res.json();

  if (data.success) {
    alert("Facultad creada con éxito");
    document.getElementById('nombreFacultad').value = "";
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAgregarFacultad'));
    modal.hide();
  } else {
    errorDiv.textContent = data.mensaje || "Ocurrió un error";
  }
}
async function EditarFacu() {
  console.log("que rollo");
  const errorDiv = document.getElementById('error-msged');
  const nuevo_nombre = document.getElementById('nuevo_nombreFacultad')
  if(!nuevo_nombre){
    errorDiv.textContent = "Rellene el campo solicitado";
    return;
  }
  errorDiv.textContent = "";
  const res = await fetch(`${window.API_URL}/facultades/actualizar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });
}



async function GenerarModal(){
  console.log("tipo",UltimaSeleccionTipo);
  switch (UltimaSeleccionTipo) {
    case 1:
      console.log("se despliega modal tipo 1");
      document.querySelector('.modalEditarSeleccion').innerHTML = `
<div class="modal fade" id="modalEditar" tabindex="-1" aria-labelledby="modalEditar" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered ">
    <div class="modal-content ">
      <form id="formEditarFacultad">
        <div class="modal-header ">
          <h5 class="modal-title" id="modalEditar"> Editar ${UltimaSeleccion}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
        </div>
        <div class="modal-body">

          <div class="mb-3">
            <label for="nuevo_nombreFacultad" class="form-label">Nombre de la Facultad</label>
            <input type="text" class="form-control" id="nuevo_nombreFacultad" placeholder="Ingresa un título">
          </div>
          <div class="p-2 d-flex align-items-center"><div id="error-msged" class="text-danger mt-2"></div></div>
 
          <p style="color: rgb(90, 90, 90);"></p>
          <div class="text-center">
        
            <button type="submit" class="btn btn-dark w-100">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  </div>

</div>
`;
      break;
    case 2:

      break;
    case 3:

      break;
    default:
      break;
  }



}