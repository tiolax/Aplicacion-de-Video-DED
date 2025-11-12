import express from "express";

import * as Control_Sesion from "../Controladores/Control_Sesion.js"

const router = express.Router();


router.post("/crear",Control_Sesion.crear);
router.get("/actual",Control_Sesion.actual);
router.post("/cerrar",Control_Sesion.eliminarActual);

export default router;