import express from "express";

import * as Control_Facultad from "../Controladores/Control_Facultad.js"

const router = express.Router();


router.get("/todos",Control_Facultad.ObtenerFacu);
router.get("/info",Control_Facultad.ObtenerFacu_Info);
router.post("/crear",Control_Facultad.CrearFacultad);
router.post("/actualizar",Control_Facultad.ActualizarFacultad);
router.post("/eliminar",Control_Facultad.eliminarFacultad);
router.post("/Obtener-por-id",Control_Facultad.ObtenerFacuPorId);

export default router;