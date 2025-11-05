import express from "express";

import * as ControladorVideos from "../Controladores/Control_Videos.js"

const router = express.Router();


router.post("/crear",ControladorVideos.crearVideo);
router.get("",ControladorVideos.ObtenerVideos);
router.post("/por-usuario",ControladorVideos.ObtenerVideosPorUsuario);

export default router;