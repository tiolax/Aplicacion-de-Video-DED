import express from "express";
import cors from "cors";


import UsuarioRutas from "./Rutas/Usuario_Rutas.js"
import FacultadRutas from "./Rutas/Facultades_Rutas.js"
import CarreraRutas from "./Rutas/Carreras_Rutas.js"
import UaRutas from "./Rutas/Uas_Rutas.js"
import VideosRutas from "./Rutas/Videos_Rutas.js"
import PalabrasRuta from "./Rutas/Palabras_Rutas.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/palabras",PalabrasRuta);
app.use("/usuarios",UsuarioRutas);
app.use("/facultades",FacultadRutas);
app.use("/carreras",CarreraRutas);
app.use("/UAs",UaRutas);
app.use("/videos",VideosRutas);


export default app;