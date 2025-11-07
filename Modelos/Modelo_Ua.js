import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()


export async function crearUa(data) {
    return await prisma.uA.create({
        data:data
    })
}

export async function eliminarUa(_id) {
    return await prisma.uA.delete({
        where: {
            id:_id
        }
    })
}


export async function eliminarpor(id){
    return await prisma.uA.deleteMany({
        where: {carrera_id: id}
    })
}

export async function ObtenerUAsPorCarrera(idCarrera) {

    return await prisma.uA.findMany({
      where: {
        carrera_id: idCarrera,
      },
    });
}


export async function obtenerPorId(id) {
    return await prisma.uA.findUnique({
        where: {id},
        select: {
            id:true,
            nombre:true,
            carrera:
            {select:
                {   id:true,
                    nombre:true,
                     facultad: {            // 👈 incluye facultad aquí
                       select: { id: true, nombre: true }
                     }
                }
            }
        }
    })
}


export async function obtenerPorNombre(nombre){
       return await prisma.uA.findMany({
      where: {nombre},
      include: {
        carrera: {
            select: {
                id:true
            }
        }
      }
    });
}

export async function Actualizar(id, data) {
    return prisma.uA.update({
        where:{id},
        data
    })
}

export async function ObtenerInfo() {
    return await prisma.uA.findMany({
        select:{
        id:true,
        nombre: true,
        modalidad:true,
        carrera: {
            select: {nombre: true, id: true}
        },
        _count: {
            select: {videos:  true}
        }
        }
    });
}