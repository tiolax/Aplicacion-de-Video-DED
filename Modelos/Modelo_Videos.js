import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()

export async function CrearVideo(data) {
    return await prisma.video.create({
        data:data
    })
}


export async function Actualizar(id, data) {
    return prisma.video.update({
        where:{id},
        data
    })
}


export async function EliminarVideo(id) {
    return await prisma.video.delete({
        where: {id}
    })
}
export async function obtenerPorUrl(url){
    return await prisma.video.findUnique({
        where:{identificador:url }
    })
}



export async function obtenerPorUsuario(usu_id){
    return await prisma.video.findMany({
        where:{usuario_id:usu_id }
    })
}


export async function  listarVideos(input = {})
{

  const {
    page = 1, per_page = 10,
    sort_by = "fecha_de_registro", sort_dir = "desc",
    q, aprobado, ua_id, carrera_id, facultad_id, date_from, date_to, palabras
  } = input;

    const where = {};

    if (aprobado !== undefined) where.aprobado = aprobado;
    if(ua_id) where.ua_id = ua_id;

  if (carrera_id) {

    where.ua = { ...(where.ua || {}), is: { ...(where.ua?.is || {}), carrera_id } };
  }

  if (facultad_id) {

    where.ua = {
      ...(where.ua || {}),
      is: {
        ...(where.ua?.is || {}),
        carrera: {
          is: {
            facultad_id: facultad_id
          }
        }
      }
    };

  }

    if (q && q.trim()) {
        where.OR = [
            {titulo: {contains: q}},
            {descripcion: {contains: q}},
        ];
    }

    if(date_from || date_to){
        where.fecha_de_registro = {};
        if(date_from) where.fecha_de_registro.gte = new Date(date_from);
        if(date_to) where.fecha_de_registro.lte =new Date(date_to);
    }


    if(Array.isArray(palabras) && palabras.length ){
        where.palabras = {
            some: {
                palabra_clave_id: {in: palabras},
            },
        };
    }

const skip = (page - 1) * per_page;
const take = per_page;

const  sortField = ["fecha_de_registro","titulo"].includes(sort_by) ? sort_by : "fecha_de_registro";
const sortDir = sort_dir === "asc" ? "asc" : "desc";

const orderBy = [
    {[sortField]:sortDir},
    {identificador: sortDir}
];

const select={
    identificador:true,
    titulo:true,
    descripcion:true,
    fecha_de_registro:true,
    aprobado:true,
    ua:{
        select:{
            nombre:true,
            carrera:{
                select: {
                    nombre:true,
                    facultad:{
                        select:{
                            nombre:true,
                        }
                    }
                }
            }
        }
    }

};
const [items,total] = await Promise.all([
    prisma.video.findMany({where,select,skip,take,orderBy}),
    prisma.video.count({where})
]);

return{items,total};

}

