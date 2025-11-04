import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()


export async function crearCarrera(data) {
    return await prisma.carrera.create({
        data:data
    })
}

export async function Eliminar(id) {
    return await prisma.carrera.delete({
        where: {id}
    })
}

export async function obtenerPorId(id) {
    return await prisma.carrera.findUnique({
        where: {id}
    })
}

export async function obtenerPorNombre(nombre){
    return  await prisma.carrera.findUnique({
        where:{nombre}
    })
}


export async function obtenerPorFacu(facu){
    return  await prisma.carrera.findMany({
        where:{facultad_id:facu}
    })
}

export async function Actualizar(id, data) {
    return prisma.carrera.update({
        where:{id},
        data
    })
}

export async function ObtenerInfo() {
    return await prisma.carrera.findMany({
        select:{
        id:true,
        nombre: true,
          facultad: {
            select: {nombre: true,id:true}
        },
        _count: {
            select: {ua:  true}
        }
        }
    });
}

