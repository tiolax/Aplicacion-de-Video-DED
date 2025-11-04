import { PrismaClient } from "./generated/prisma/client.js";
import * as ControladorUsuario from "./Controladores/Control_Usuarios.js"
import * as ControladorFacultad from "./Controladores/Control_Facultad.js"
import * as ControladorCarrera from "./Controladores/Control_Carrera.js"
import * as ControladorUA from "./Controladores/Control_Ua.js"



const prisma = new PrismaClient()


async function crearFacultad(){
    ///archivos de prueba, creador defacultades funcional
    await prisma.facultad.create({
        data: {
            nombre: "Facultad de Ciencias Medicina"
        }
    });

}
    //crear carreras, funcional
async function crearCarrera() {
    await prisma.carrera.create({
        data:{
            nombre:"Licenciatura en Multimedia y Animacion Digital",
            facultad_id: 1
        }
    })
    
}
//crear UAfuncional
async function crearUA() {
    await prisma.uA.create({
        data: {
            nombre: "Modelo",
            modalidad: "Mixta",
            carrera:{
                connect: {id: 5}
            }
        }

    })
    
}
async function eliminarUa() {
  await prisma.uA.delete({
    where: {
      id: 5,
    },
  });
}

eliminarUa();
//crearUA();
///solo para desarrollo, crwacion de admin funcional
async function crearUsuarioAdministrador() {
    await prisma.usuario.create({
        data:{
            nombre_de_usuario: "admin",
            password: "abc",
            admin: true

        }

    })
    
}

/*ControladorUsuario.crearUsuario({
    nombre_de_usuario:"Ramiro",
    password:"asd",
    facultad: {
      connect: { id: 1}
    },
    admin: false
})

ControladorUsuario.ValidarUsuario({
  nombreIngresado:"asdasd" ,
  contraIngresada: "asdasd"
});
*/

/*ControladorFacultad.CrearFacultad({
    nombre: "Facultad de Ciencias Quimicas"
})
|
*//*
ControladorFacultad.eliminarFacultad("Facultad de Ciencias Quimicas")


ControladorUsuario.ActualizarUsuario({
    id: 2,
    data: {
        nombre_de_usuario: "SuperRamiro"
    }
})
*/
/*
ControladorCarrera.CrearCarrera({
    nombre: "Licenciatura en Matetmaticas",
     facultad: {
      connect: { id: 1}
    }
})*/




/*ControladorFacultad.CrearFacultad({
    nombre: "Facultad de Ciencias Quimicas"
})*/

//crearUsuarioAdministrador();
//crearUA();
//crearCarrera();
//crearFacultad();


