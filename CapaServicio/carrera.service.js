import * as CarreraModel from "../Modelos/Modelo_Carreras.js"

export async function eliminarFacultadconCarreras(id) {
    try {
        // Eliminar todas las UAs de la carrera
        await UaModel.eliminarpor(id);
        // Eliminar la carrera
        await CarreraModel.Eliminar(id);
        return true;
    } catch (error) {
        throw new Error(`Error al eliminar carrera con UAs: ${error.message}`);
    }
}

