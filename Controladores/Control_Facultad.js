import * as FacultadModel from "../Modelos/Modelo_Facultad.js"

//crear 
export const CrearFacultad = async (req,res) => {
    const facu = req.body.nombre.toLowerCase();
    const FacultadEncontrada = await FacultadModel.obtenerPorNombre(facu);
    
    if(!FacultadEncontrada){
const data = {
    nombre: facu,
}
       const NuevaFacu = await FacultadModel.crearFacultad(data);
       res.json({
        success:true,
        mensaje:"Facultad registrada con exito",
        nuevafacultad: NuevaFacu
       })
    }else{
        return res.status(409).json({
            success: false,
            mensaje: "Ya existe una facultad con ese nombre",
        })
    }
}

//eliminar
export const eliminarFacultad = async (req,res) => {
   FacultadModel.Eliminar(req.body.id)
    return res.status(200).json({
        success: true,
        mensaje: "Facultad eliminada con éxito"
      });
}
//actualizar
export const ActualizarFacultad = async (req,res) => {
    const facu = req.body.nombre.toLowerCase();
    const FacultadEncontrada = await FacultadModel.obtenerPorNombre(facu);
    if(!FacultadEncontrada){
const data = {
    nombre: facu,
}
       const NuevaFacu = await FacultadModel.Actualizar(req.body.id,data);
       res.json({
        success: true,
        mensaje:"Facultad actualizada con exito",
       })
    }else{
        return res.status(409).json({
            success: false,
            mensaje: "Ya existe una facultad con ese nombre",
        })
    }
}

//obtener todo
export const ObtenerFacu = async (req,res) => {
    const facultades = await FacultadModel.ObtenerTodo();

     return res.status(200).json({
        success: true,
        Facultades: facultades
});
}


//De una facultad, obtener sus usuarios relacionados y sus carreras
export const ObtenerFacu_Info = async (req,res) => {
            const facultades = await FacultadModel.ObtenerInfo();

        const facultadesFormateadas = facultades.map(facultad => ({
            ...facultad,
            nombre: capitalizarTitulo(facultad.nombre)
        }));
            return res.status(200).json({
                success:true,
                Facultades:facultadesFormateadas
            });
}
//Obtener por Id
export const ObtenerFacuPorId = async (req,res) => {
        const FacultadEncontrada = await FacultadModel.obtenerPorId(req.body.id_facultad);
        return res.status(200).json({
            success: true,
            facultad: FacultadEncontrada
        });
}


///funciones auxiliares
function capitalizarTitulo(frase) {
  const excepciones = ["de","en","y","a"];

  return frase
    .toLowerCase() 
    .split(' ')
    .map((palabra, index) => {
      if (excepciones.includes(palabra) && index !== 0) {
        return palabra;
      } else {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
      }
    })
    .join(' ');
}

function limpiarTexto(texto) {
  return texto
    .normalize("NFD")              // separa los acentos de las letras
    .replace(/[\u0300-\u036f]/g, "") // elimina los acentos
    .toLowerCase();                  // pasa todo a minúsculas
}