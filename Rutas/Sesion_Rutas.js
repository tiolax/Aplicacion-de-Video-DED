import express from "express";

import * as Control_Sesion from "../Controladores/Control_Sesion.js"

const router = express.Router();


router.post("/crear",Control_Sesion.crear);
router.post("/actual",Control_Sesion.actual);
router.post("/cerrar",Control_Sesion.cerrar);

export default router;