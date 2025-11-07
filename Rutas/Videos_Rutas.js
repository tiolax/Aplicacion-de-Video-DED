import express from "express";

import * as ControladorVideos from "../Controladores/Control_Videos.js"

const router = express.Router();


router.post("/crear",ControladorVideos.crearVideo);
router.get("",ControladorVideos.ObtenerVideos);
router.post("/por-usuario",ControladorVideos.ObtenerVideosPorUsuario);
router.post("/eliminar-por-id",ControladorVideos.EliminarVideo);
router.post("/actualizar",ControladorVideos.ActualizarVideo);
router.get("/en-espera",ControladorVideos.ObtenerEnEspera);
router.post("/actualizar-estado",ControladorVideos.ActualizarEstado);
export default router;