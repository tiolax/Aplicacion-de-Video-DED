import express from "express";

import * as Control_Palabra from "../Controladores/Control_Keyword.js"

const router = express.Router();


router.get("/todos",Control_Palabra.Obtener);
router.post("/crear",Control_Palabra.CrearPalabra);
router.post("/editar",Control_Palabra.actualizarPalabra);
router.post("/eliminar",Control_Palabra.eliminarPalabra);

export default router;