import express from "express";

import * as ControladorUsuario from "../Controladores/Control_Usuarios.js"

const router = express.Router();


router.post("/crear",ControladorUsuario.crearUsuario);
router.post("/login",ControladorUsuario.ValidarUsuario);
router.post("/validaradmin",ControladorUsuario.ValidarAdmin);
router.post("/obtener-por-id",ControladorUsuario.ObtenerPorId);
router.get("/todos",ControladorUsuario.ObtenerTodos);

export default router;