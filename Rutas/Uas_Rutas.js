import express from "express";

import * as Control_UA from "../Controladores/Control_Ua.js"


const router = express.Router();

router.get("/info",Control_UA.ObtenerUa_Info);
router.post("/crear",Control_UA.CrearUa);
router.post("/eliminar",Control_UA.EliminarUa);
router.post("/carreras",Control_UA.ObtenerporCarera);
router.post("/actualizar",Control_UA.ActualizarUa);
router.post("/Obtener-por-id",Control_UA.ObtenerporId);
export default router;