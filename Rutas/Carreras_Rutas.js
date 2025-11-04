import express from "express";

import * as Control_Carrera from "../Controladores/Control_Carrera.js"

const router = express.Router();


router.get("/info", Control_Carrera.ObtenerCarrera_Info);
router.post("/porfacu",Control_Carrera.ObtenerCarreraporFacu);
router.post("/crear",Control_Carrera.CrearCarrera);
router.post("/actualizar",Control_Carrera.ActualizarCarrera);
router.post("/eliminar",Control_Carrera.eliminarCarrera);
router.post("/eliminarencascada",Control_Carrera.eliminarencascada);
export default router;