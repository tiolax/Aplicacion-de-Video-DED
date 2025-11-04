import * as CarreraModel from "../Modelos/Modelo_Carreras.js"
import { eliminarCarreraconUas } from "../CapaServicio/ua.service.js"


export const CrearCarrera = async (req,res) => {
    const programa = req.body.nombre.toLowerCase();
    const ProgramaEncontrado = await CarreraModel.obtenerPorNombre(programa);
    if(!ProgramaEncontrado){
        const data = {
            nombre: programa,
                   facultad: {
                     connect: { id: req.body.facuId}
                  }
        }
            const nuevoprograma = await CarreraModel.crearCarrera(data);
            res.status(200).json({
                success: true,
                mensaje: "Programa agregado con exito",
            })
    }else{
        return res.status(409).json({
            success: false,
            mensaje: "Ya existe un programa con ese nombre",
        })
    }
}


export const eliminarencascada = async (req,res) => {

  try{
    const elim = await eliminarCarreraconUas(req.body.id);
    return res.status(200).json({
      success: true,
      mensaje: "Programa eliminado con exito"
    })
  }catch (err){
    return res.status(500).json({
      success: false,
      mensaje: "Ocurrió un error al eliminar el programa",
      error: err.message
    });
  }
 
}


export const eliminarCarrera= async (req,res) => {
   CarreraModel.Eliminar(req.body.id);
     return res.status(200).json({
        success: true,
        mensaje: "Programa eliminado con éxito"
      });
}

export const ActualizarCarrera = async (req,res) => {
  const carrera = req.body.nombre.toLowerCase();
  const carreraEcontrada = await CarreraModel.obtenerPorNombre(carrera);

  if(!carreraEcontrada){
    const data = {
      nombre: carrera,
    }
    const nuevaCarrera = await CarreraModel.Actualizar(req.body.id,data);
    res.json({
      success: true,
      mensaje: "Programa actualizado con exito"
    })
  }else{
     return res.status(409).json({
            success: false,
            mensaje: "Ya existe una carrera con ese nombre",
        })
  }
    
}

export const CarreraUA = async(req,res) => {
  const uas = await CarreraModel.ObtenerUAs(req.body.id);
  const UasFormateadas = uas.map( ua => ({
    ...ua,
    nombre: capitalizarTitulo(ua.nombre)
  }));
  return res.status(200).json({
    success:true,
    uas:UasFormateadas
  })

}

export const ObtenerCarrera_Info = async (req,res) => {
            const carreras = await CarreraModel.ObtenerInfo();

            const carrerasFormateadas = carreras.map(carrera => ({
             ...carrera,
             nombre: capitalizarTitulo(carrera.nombre),
             facultad: {
                  ...carrera.facultad,
                 nombre: capitalizarTitulo(carrera.facultad.nombre)
                     }
                }));
            return res.status(200).json({
                success:true,
                Carreras: carrerasFormateadas
            });
}

export const ObtenerCarreraporFacu = async (req,res)=> {
  const carreras = await CarreraModel.obtenerPorFacu(req.body.facu);
  return res.status(200).json({
    success:true,
    carreras: carreras
  })

}



//funciones auxiliares
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