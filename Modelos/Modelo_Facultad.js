import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()

export async function crearFacultad(data) {
    return await prisma.facultad.create({
        data:data
    })
}

export async function Eliminar(id) {
    return await prisma.facultad.delete({
        where: {id}
    })
}

export async function obtenerPorId(id) {
    return await prisma.facultad.findUnique({
        where: {id}
    })
}

export async function obtenerPorNombre(nombre){
    return  await prisma.facultad.findUnique({
        where:{nombre}
    })
}

export async function ObtenerTodo() {
    return await prisma.facultad.findMany();
}

export async function Actualizar(id, data) {
    return prisma.facultad.update({
        where:{id},
        data
    })
}

export async function ObtenerInfo() {
    return await prisma.facultad.findMany({
        select: {
            id: true,
            nombre: true,
            usuarios: {
                select: {
                    nombre_de_usuario: true
                }
            },
            carreras: {
                select: {
                    id: true
                }
            },
            _count: {
                select: {
                    carreras: true
                }
            }
        }
    });
}
