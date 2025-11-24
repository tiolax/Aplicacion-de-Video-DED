import * as UsuarioModelo from "../Modelos/Modelo_Usuario.js"


export const ValidarUsuario = async (req,res) => {
       const usuarioEcontrado = await UsuarioModelo.obtenerPorNombre(req.body.nombre)
       let nombre_facultad =null; 
       if(!usuarioEcontrado){
            res.status(401).json({success: false, mensaje: "Usuario no encontrado" });
       }else{
        if(req.body.password == usuarioEcontrado.password){
          
          if(usuarioEcontrado.facultad){
              nombre_facultad = usuarioEcontrado.facultad.nombre;
          }

          return res.status(200).json({
        success: true,
        mensaje: "Login exitoso",
        usuarioEcontrado:{
            id: usuarioEcontrado.id,
            nombre: usuarioEcontrado.nombre_de_usuario,
            facultad: usuarioEcontrado.facultad_id,
            facultadnombre: nombre_facultad,
            admin: usuarioEcontrado.admin,
        }
      });
        }else{
            return res.status(401).json({
        success: false,
        mensaje: "Contraseña incorrecta",
      });
        }
       }
            
    }
 export const ValidarAdmin = async(req,res) => {
  const admin = await UsuarioModelo.TraerAdmin();
    if(admin.password == req.body.contra) {
    return res.status(200).json({
      success: true
    })
  }
    return res.status(401).json({
      success: false
    })

 }

//Crear
export const crearUsuario = async (req, res) => {
        const usuarioEcontrado = await UsuarioModelo.obtenerPorNombre(req.body.nombre)
        if(usuarioEcontrado){
          return res.status(409).json({
            success: false,
            mensaje: "Ya existe un usuario con ese nombre"
          });
        }

       const usuarios = await UsuarioModelo.Count(req.body.facultad)
        if(usuarios > 0){
          return res.status(409).json({
            success: false,
            mensaje: "Ya existe un usuario asignado a esa facultad"
          });
        }

       const data = {
        facultad: {connect:{id: req.body.facultad}},
        nombre_de_usuario: req.body.nombre,
        password: req.body.password,
        admin: false
        };
      const nuevoUsuario = await UsuarioModelo.crearUsuario(data);
      res.json({
        success: true,
        mensaje: "Usuario creado con exito",
        nuevoUsuario:{
            id: nuevoUsuario.id,
            nombre_de_usuario: nuevoUsuario.nombre_de_usuario,
            facultad: nuevoUsuario.facultad_id,
            admin: nuevoUsuario.admin,
        }
      });
  };

//Actualizar
 export const ActualizarUsuario = async (req,res) => {
     const nombre = req.body.data.nombre_de_usuario;
     const usuarioEcontrado = await UsuarioModelo.obtenerPorNombre(nombre);
      if(usuarioEcontrado){
          return  res.status(409).json({success: false, mensaje: "Ya existe un usuario con ese nombre" });
      }

  const Usuario = await UsuarioModelo.Actualizar(req.body.id,req.body.data);
  if(Usuario){
  return res.status(200).json({
    success: true,
    usuario: Usuario,
  })
}else{
      return res.status(401).json({
      success: false,
      message: "usuario no encontrado"
    })
}
}
 
export const ObtenerPorId = async (req, res) =>{
  const Usuario = await UsuarioModelo.obtenerUsuarioporid(req.body.id);
  if(Usuario){
return res.status(200).json({
      success: true,
      usuario: Usuario
    })
  }  else{
      return res.status(401).json({
      success: false,
      message: "usuario no encontrado"
    })
  }
  
  

}

export const ObtenerTodos = async(req,res) => {
  const Usuarios = await UsuarioModelo.ObtenerTodos();

  return res.status(200).json({
    success: true,
    usuarios: Usuarios,
  })
}


