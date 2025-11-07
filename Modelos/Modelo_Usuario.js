import { PrismaClient } from "../generated/prisma/client.js";

const prisma = new PrismaClient()

export const crearUsuario = async(datos) => {
    return await prisma.usuario.create({
        data: datos,
    });
};

export async function eliminarUsuario(id){
    await prisma.usuario.delete({
        where:{id}
    })
}

export async function obtenerUsuarioporid(id){
      const u = await prisma.usuario.findUnique({
        where:{id},
        select:{
         nombre_de_usuario:true,
         id:true,
         password: true,
         admin:true,
         facultad_id:true,
         facultad:{
            select:{
                nombre:true,
            }
         }   
        }
    })

if (!u) return null;

  return {
    ...u,
    facultad_nombre: u.facultad?.nombre ?? null,
  };
}

export  function obtenerPorNombre(nombre_de_usuario){
    return  prisma.usuario.findUnique({
        where:{nombre_de_usuario},
        select:{
         nombre_de_usuario:true,
         id:true,
         password: true,
         admin:true,
         facultad_id:true,
         facultad:{
            select:{
                nombre:true,
            }
         }   
        }
    })
}

export async function Count(facultad_id) {
    return prisma.usuario.count({
  where: {
    facultad_id: facultad_id
  }
});
}

export async function TraerAdmin() {
    return prisma.usuario.findFirst({
        where: {admin:true}
    })
}


export async function Actualizar(id, data) {
    return prisma.usuario.update({
        where:{id},
        data
    })
}




