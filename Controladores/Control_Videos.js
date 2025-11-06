import * as ModelVideo from "../Modelos/Modelo_Videos.js"

//crear
export const crearVideo = async (req,res) => {
  const identificador = req.body.identificador;   
  const videoencontrado = await ModelVideo.obtenerPorUrl(identificador);
  const listPalabras = req.body.palabras;
  let aprobado = false;
    if(videoencontrado){
         res.status(401).json({success: false, mensaje: "Video ya cargado, intente con una url diferente",duplavideo: videoencontrado.identificador });
    }else{ 
      if(req.body.admin){
        aprobado = true;
      }
    const data = {
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        identificador: req.body.identificador,
        fase: req.body.fase,
        aprobado: aprobado,
        
        usuario: {
                     connect: { id: req.body.usuario_id}
                 },
        ua:      {
                    connect: {id:req.body.ua_id}
                 },
        palabras: {
                    create: listPalabras.map((pid) => ({
                    palabra_clave: {
                      connect: { id: pid }
                    }
                    })) 

        }}
      const videocreado =  ModelVideo.CrearVideo(data);
      if(!videocreado){
        res.json(401).json({
          success: false,
          mensaje: "Error del servidor"
        })
      }
       res.status(200).json({
                success:true,
                mensaje: "Video creado con exito",
            })
    }
}

export const EliminarVideo = async (req, res) => {
  try {
    const url = req.body.url;
    const eliminado = await ModelVideo.EliminarVideo(url);

    if (eliminado) {
      return res.status(200).json({
        success: true,
        message: "Video eliminado con éxito"
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Video no encontrado o no se pudo eliminar"
      });
    }
  } catch (error) {
    console.error("Error al eliminar el Video:", error);
    return res.status(500).json({
      success: false,
      message: "Error del servidor al intentar eliminar el video"
    });
  }
};

export const ObtenerVideos = async(req,res) => {
try{
  const page = Math.max(1,parseInt(req.query.page ?? "1",10));
  const per_page =Math.min(100, Math.max(1,parseInt(req.query.per_page ?? "10",10)));
  const sort_by = (req.query.sort_by ?? "fecha_de_registro");
  const sort_dir =(req.query.sort_dir ?? "desc");

  const q = req.query.q?.toString();
  const aprobado = typeof req.query.aprobado !== "undefined"
    ? req.query.aprobado === "true"
    : undefined;
  const ua_id = req.query.ua_id ? parseInt(req.query.ua_id,10): undefined;
  const carrera_id = req.query.carrera_id ? parseInt(req.query.carrera_id,10) : undefined;
  const facultad_id = req.query.facultad_id ? parseInt(req.query.facultad_id,10) : undefined;
  const date_from = req.query.date_from?.toString();
  const date_to = req.query.date_to?.toString();

  const palabras = (() => {
    const raw = req.query.palabras ?? req.query.palabra_id ?? req.query.tema_id;
    if (!raw) return undefined;
    const arr = Array.isArray(raw) ? raw : String(raw).split(",");
    return arr
      .map((x) => parseInt(String(x).trim(), 10))
      .filter((n) => Number.isFinite(n));
  })();



    const { items, total } = await ModelVideo.listarVideos({
      page,
      per_page,
      sort_by,
      sort_dir,
      q,
      aprobado,
      ua_id,
      carrera_id,
      facultad_id,
      date_from,
      date_to,
      palabras,
    });



const total_pages = Math.max(1,Math.ceil(total/per_page));

const baseUrl =  `${req.protocol}://${req.get("host")}${req.path}`;
const sp = new URLSearchParams(req.query);
sp.set("per_page", String(per_page));
const linkFor = (p) => {
  const copy = new URLSearchParams(sp);
  copy.set("page",String(p));
  return  `${baseUrl}?${copy.toString()}`;
}
return res.status(200).json({
  data:items,
  meta:{
    page,per_page,total,total_pages,sort_by,sort_dir,
       applied_filters: {
        q: q ?? null,
        aprobado: typeof aprobado === "boolean" ? aprobado : null,
       ua_id: ua_id ?? null,
       carrera_id: carrera_id ?? null,
       facultad_id: facultad_id ?? null,
       date_from: date_from ?? null,
        date_to: date_to ?? null,
        palabra: (palabras && palabras.length) ? palabras : null
     }
    },
  links: {
    self: linkFor(page),
    prev: page > 1 ? linkFor(page - 1) : null,
    next: page < total_pages ? linkFor(page + 1) : null
  }

});
} catch (error) {
  console.error(error);
  return res.status(500).json({success: false,mensaje:"Error del servidor al listar videos"});
}

};

export const ObtenerVideosPorUsuario = async(req,res) => {

  const VideosEncontrados = await ModelVideo.obtenerPorUsuario(req.body.usuario_id);
    return res.status(200).json({
        success: true,
        videos: VideosEncontrados
    })

}