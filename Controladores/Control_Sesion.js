import * as Sesiones from "../Modelos/Modelo_Sesiones.js";

export async function requireAuth(req, res, next) {
  try {
    const usuarioId = req.body.usuarioId;
    if (!usuarioId) return res.sendStatus(401);
    const s = await Sesiones.ObtnerSesion(usuarioId);
    if (!s) return res.sendStatus(401);
    req.auth = { sessionId: s.id, userId: s.userId };
    return next();
  } catch (e) {
    return res.sendStatus(401);
  }
}

export async function crear(req, res) {
    const { usuarioId,singleSession } = req.body || {};
    if (!usuarioId) return res.status(400).json({ error: "userId requerido" });
    const sesion = await Sesiones.crearSesion(usuarioId, { singleSession: !!singleSession });
    return res.status(201).json({ ok: true, SesionId: sesion.id, sesion: sesion });
}

export async function actual(req, res) {
  const sesionID = req.body.sesionID;
  if (!sesionID) return res.status(401).json({ authenticated: false, error: "Falta Id de sesion" });
  const sesion = await Sesiones.ObtnerSesion(sesionID);
  if (!sesion) return res.status(401).json({ authenticated: false, error: "Sesión inválida" });
  return res.json({
    authenticated: true,
    usuarioId: sesion.usuarioId,
    sessionId: sesion.id,
    admin: sesion.admin,
    usuarioNombre: sesion.usuario_nombre,
    facultad_id: sesion.facultad_id,
    facultad_nombre: sesion.facultad_nombre,
  });
}

export async function cerrar(req, res) {
  try {
      const SesionID = req.body.sesionID
    if (SesionID) {
      await Sesiones.EliminarSesion(SesionID);
    }
    return res.status(201).json({ok:true});
  } catch (e) {
    return res.status(500).json({ error: "no se pudo cerrar la sesión" });
  }
}
