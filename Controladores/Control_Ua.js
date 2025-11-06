import * as UaModel from "../Modelos/Modelo_Ua.js"

export  const CrearUa = async (req,res) => {
    const ua = req.body.nombre.toLowerCase();
    const mod = req.body.modalidad.toLowerCase();
    const uaEcontrada = await UaModel.obtenerPorNombre(ua);
    if(uaEcontrada.length > 0){
  uaEcontrada.forEach(ua => {
          if(ua.carrera_id === req.body.carreraSelecId){
            return res.status(409).json({
            success: false,
            mensaje: "Ya existe una UA con ese nombre en este programa",
        });
          }
      })
    }
        const data = {
            nombre: ua,
            modalidad: mod,
                carrera: {
                    connect: {id: req.body.carreraSelecId}
                }
        }
        const nuevaUa = await UaModel.crearUa(data);
        res.json({
            success: true,
            mensaje: "Ua registrada con exito",
            nuevaua: nuevaUa
        })

}

export const EliminarUa = async (req, res) => {
  try {
    const id = parseInt(req.body.id);
    const eliminado = await UaModel.eliminarUa(id);

    if (eliminado) {
      return res.status(200).json({
        success: true,
        message: "Unidad de Aprendizaje eliminada con éxito"
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Unidad de Aprendizaje no encontrada o no se pudo eliminar"
      });
    }
  } catch (error) {
    console.error("Error al eliminar la UA:", error);
    return res.status(500).json({
      success: false,
      message: "Error del servidor al intentar eliminar la unidad"
    });
  }
};

export const ObtenerporCarera = async (req,res) => {
const Uas = await UaModel.ObtenerUAsPorCarrera(req.body.id);
const UasFormateadas = Uas.map(ua => ({
    ...ua,
    nombre: capitalizarTitulo(ua.nombre),
}))
    return res.status(200).json({
        success: true,
        Uas: UasFormateadas,
    })
}

export const ObtenerporId = async (req,res) => {
const Ua = await UaModel.obtenerPorId(req.body.id_ua);
const UaEncontrada = { ...Ua, nombre:capitalizarTitulo(Ua.nombre) };
console.log("nombre antes del capitalizado: ",Ua.nombre);
return res.status(200).json({
  success: true,
  ua: UaEncontrada,
})
}

export const ActualizarUa = async (req,res) => {
    const ua = req.body.nombre.toLowerCase();
    const uaEncontrada = await UaModel.obtenerPorNombre(ua);
      if(uaEncontrada.length > 0){
          uaEncontrada.forEach(ua => {
          if(ua.carrera_id === req.body.idCarrera){
            return res.status(409).json({
            success: false,
            mensaje: "Ya existe una UA con ese nombre en este programa",
        });
          }
      })
    }
    const data = {
      nombre: req.body.nombre,
      modalidad: req.body.modalidad,
    }

    await UaModel.Actualizar(req.body.id,data);
    res.json({
            success: true,
            mensaje: "Ua actualizada con exito",
    })
}

export const ObtenerUa_Info = async (req,res) => {
            const Uas = await UaModel.ObtenerInfo();
            const UasFormateadas = Uas.map(ua => ({
                ...ua,
                nombre: capitalizarTitulo(ua.nombre),
               modalidad: capitalizarTitulo(ua.modalidad),
                carrera: {
                ...ua.carrera,
                nombre: capitalizarTitulo(ua.carrera.nombre)
                    }
            }));
            return res.status(200).json({
                success:true,
                Uas:UasFormateadas
            });
}
///
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