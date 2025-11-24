///////////Traer Todo/////////
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

//////////crear palabra//////
export async function RegistrarPalabra(palabra) {
const res = await fetch(`${window.API_URL}/palabras/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({palabra})
  });
  const data = await res.json();
  return data;
}
//////////eliminar palabra///////
export async function EliminarPalabra(palabra) {
  const res = await fetch(`${window.API_URL}/palabras/eliminar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({palabra})
  });
  const data = await res.json();
  return data;
}
//////editar palabra////////
export async function EditarPalabra(palabra,nuevapalabra) {
const res = await fetch(`${window.API_URL}/palabras/editar`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({palabra,nuevapalabra})
  });
  const data = await res.json();
  return data;
}

///////////Crear Ua///////////
export async function RegistrarUa(nombre,modalidad,carreraSelecId) {
   const res = await fetch(`${window.API_URL}/UAs/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre,modalidad,carreraSelecId})
  });
    const data = await res.json();
    return data;
}
///////////Editar Ua//////////
export async function EditarUa(id,nombre,modalidad,idCarrera){
const res = await fetch(`${window.API_URL}/UAs/actualizar`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id,nombre,modalidad,idCarrera})
});
const data = await res.json();
return data;
}

////////Eliminar Ua////////////
export async function EliminarUa(id){
await fetch(`${window.API_URL}/UAs/eliminar`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id})
});
}

///////////Crear Facu////////////
export async function RegistrarFacultad(nombre) {
  const res = await fetch(`${window.API_URL}/facultades/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre })
  });
  const data = await res.json();
  return data;
}
////Editar Facu//////
   export async function EditarFacultad(nombre,id){
   const res = await fetch(`${window.API_URL}/Facultades/actualizar`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id,nombre})
});
   const data = await res.json();
  return data;
   }
////////Eliminar Facu //////
export async function EliminarFacultad(id) {
     const res = await fetch(`${window.API_URL}/facultades/eliminar`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({id}),
            })

}
/////////Crear Carrera//////////
export async function RegistrarCarrera(nombre,facuId){
    const res = await fetch(`${window.API_URL}/carreras/crear`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre,facuId})
  });
  const data = await res.json();
  return data;
}
//////Editar Carrera/////////
export async function EditarCarrera(nombre,id) {
    const res = await fetch(`${window.API_URL}/carreras/actualizar`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id,nombre})
});
   const data = await res.json();
  return data;
}

///////Eliminar Carrera///////
export async function EliminarCarrera(id){
  const res = await fetch(`${window.API_URL}/carreras/eliminar`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id})
});
}
///////Eliminar Carrera Cascada//////
export async function EliminarCarreraCascada(id) {
         const res = await fetch(`${window.API_URL}/carreras/eliminarencascada`,{
         method: "POST",
         headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id})
        });
}
//////Eliminar Facu///////
export async function ObtenerCarreraporFacu(facu) {
    const res = await fetch(`${window.API_URL}/Carreras/porfacu`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({facu}),
            })
            const data = await res.json();
            return data;
}


///Carreras con Uas///
export async function ObtenerUasporCarrera(id){
const res = await fetch(`${window.API_URL}/uas/carreras`,{
method: "POST",
headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id})
});
const data = await res.json();
return data;
}
export async function ObtenerPalabras() {
 const res = await fetch(`${window.API_URL}/palabras/todos`,{
method: "GET",
headers: { "Content-Type": "application/json" }
});
const data = await res.json();
return data;

}
//////Auxiliar Funciones//////
export function modalaviso(mensaje){
    const modalElement = document.getElementById('modalAviso');
    const tituloaviso = document.getElementById("textmodalAviso");
    tituloaviso.textContent = mensaje;

    let modalaviso = bootstrap.Modal.getInstance(modalElement);
      if (!modalaviso) {
        modalaviso = new bootstrap.Modal(modalElement);
    }
        modalaviso.show();
}

export async function Validarcontradmin(contra){
const res = await fetch(`${window.API_URL}/usuarios/validaradmin`,{
         method: "POST",
         headers: { "Content-Type": "application/json" },
          body: JSON.stringify({contra})
        });

        const data =  await res.json();
        return data.success;

}
/////Validar Nombre///////
export function Alfanumerico(texto) {
  const valido = /^[\p{L}\p{N} ]+$/u.test(texto);
  const soloNumeros = /^\d+$/u.test(texto);
  return valido && !soloNumeros;
}
/////FiltroTabla/////
export function filtrarData(palabra, data) {
  const busqueda = palabra.trim().toLowerCase();
  if (!busqueda) return data; 

  const facultadesFiltradas = [];

  data.facultades.forEach(facultad => {
    const nombreFacu = facultad.nombre.toLowerCase();

    if (nombreFacu.includes(busqueda)) {
      facultadesFiltradas.push({
        ...facultad,
        carreras: data.carreras
          .filter(c => c.facultad && c.facultad.nombre === facultad.nombre)
          .map(c => ({
            ...c,
            uas: data.uas.filter(u => u.carrera && u.carrera.nombre === c.nombre)
          }))
      });
      return; 
    }


    const carrerasCoincidentes = data.carreras
      .filter(c => c.facultad && c.facultad.nombre === facultad.nombre)
      .filter(c => c.nombre.toLowerCase().includes(busqueda));

    if (carrerasCoincidentes.length) {
      facultadesFiltradas.push({
        ...facultad,
        carreras: carrerasCoincidentes.map(c => ({
          ...c,
          uas: data.uas.filter(u => u.carrera && u.carrera.nombre === c.nombre)
        }))
      });
      return;
    }

    const carrerasConUaCoincidente = [];
    data.carreras
      .filter(c => c.facultad && c.facultad.nombre === facultad.nombre)
      .forEach(carrera => {
        const uasCoincidentes = data.uas
          .filter(u => u.carrera && u.carrera.nombre === carrera.nombre)
          .filter(u => u.nombre.toLowerCase().includes(busqueda));

        if (uasCoincidentes.length) {
          carrerasConUaCoincidente.push({
            ...carrera,
            uas: uasCoincidentes
          });
        }
      });

    if (carrerasConUaCoincidente.length) {
      facultadesFiltradas.push({
        ...facultad,
        carreras: carrerasConUaCoincidente
      });
    }
  });

  return {
    facultades: facultadesFiltradas,
    carreras: facultadesFiltradas.flatMap(f => f.carreras || []),
    uas: facultadesFiltradas.flatMap(f => (f.carreras || []).flatMap(c => c.uas || []))
  };
}
