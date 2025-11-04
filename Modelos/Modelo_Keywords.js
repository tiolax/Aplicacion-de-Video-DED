import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()

export async function crearPalabra(data) {
    return await prisma.palabraClave.create({
        data:data
    })
}

export async function eliminarPalabra(id) {
    return await prisma.palabraClave.delete({
        where: {id}
    });
}


export async function actualizarPalabra(id,data) {
    return await prisma.palabraClave.update({
        where: {id},
        data
    });
}

export async function obtenerPalabra(nombre) {
    return await prisma.palabraClave.findUnique({
        where: {nombre}
    })
}

export async function ObtenerTodo() {
    return await prisma.palabraClave.findMany();
}
