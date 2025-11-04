import * as ModelPalabra from "../Modelos/Modelo_Keywords.js"

//crear

export const CrearPalabra = async (req,res) => {
    const palabra = req.body.palabra.toLowerCase();
    const palabraEncontrada = await ModelPalabra.obtenerPalabra(palabra);
    if(!palabraEncontrada){
const data = {
    nombre: palabra,
}
       const NuevaPalabra = await ModelPalabra.crearPalabra(data);
       res.json({
        success:true,
        mensaje:"Palabra registrada con exito",
        nuevaPalabra: NuevaPalabra
       })
    }else{
        return res.status(409).json({
            success: false,
            mensaje: "Palabra ya existente",
        })
    }
}

export const eliminarPalabra = async (req,res) => {
    console.log("palabra nombre: ",req.body.palabra);
   const palabraEncontrada = await ModelPalabra.obtenerPalabra(req.body.palabra);
   console.log("Palabra Encontrda id: ",palabraEncontrada.id);
   ModelPalabra.eliminarPalabra(palabraEncontrada.id)
    return res.status(200).json({
        success: true,
        mensaje: "Palabra eliminada con éxito"
      });
}

export const actualizarPalabra = async (req,res) => {
    const palabra = req.body.palabra.toLowerCase();
    const palabraEncontrada = await ModelPalabra.obtenerPalabra(palabra);
    if(palabraEncontrada){
const data = {
    nombre: req.body.nuevapalabra,
}
       const palabraActualizada = await ModelPalabra.actualizarPalabra(palabraEncontrada.id,data);
       res.json({
        success: true,
        mensaje:"palabra actualizada con exito",
       })
    }else{
        return res.status(409).json({
            success: false,
            mensaje: "Ya existe esa palabra",
        })
    }
}

export const Obtener = async (req,res) => {
    const palabras = await ModelPalabra.ObtenerTodo();
    return res.status(200).json({
        success: true,
        palabras: palabras
    })
}