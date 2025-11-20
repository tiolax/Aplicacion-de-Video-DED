import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient()
import crypto from "crypto";
const generarIdSesion = () => crypto.randomBytes(32).toString("hex");


export async function crearSesion(usuarioId, {singleSession = false } ={} ) {
    if(!usuarioId) throw new Error("usuarioId es requerido para crear sesión");

    if (singleSession) {
    await prisma.session.deleteMany({ where: { usuarioId } });
    }
    const id = generarIdSesion();
    const sesion = await prisma.session.create({
    data: {id,usuarioId},
    select: { id: true, usuarioId: true,createdAt:true},    
    });

    return sesion;
}

export async function EliminarSesion(id) {
     if (!id) throw new Error("id de sesión requerido");
    return await prisma.session.delete({where: {id}
    });
}

export async function ObtnerSesion(id) {
    if (!id) return null;
    const sesion = await prisma.session.findUnique({
        where: {id}, select: 
        { id:true,
          usuarioId:true,
          createdAt:true,
           usuario: {
            select: {
                nombre_de_usuario:true,
                admin: true,
                facultad_id:true,
                facultad: {
                    select: {
                        nombre: true,
                    },
                },
            },
           },
        },
    });
  return {
    id: sesion.id,
    createdAt: sesion.createdAt,
    usuarioId: sesion.usuarioId,
    admin: sesion.usuario.admin,
    usuario_nombre: sesion.usuario.nombre_de_usuario,
    facultad_id: sesion.usuario.facultad_id,
    facultad_nombre: sesion.usuario.facultad?.nombre ?? "Cuenta de Administrador",
  };

}


