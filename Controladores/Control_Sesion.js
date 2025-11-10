import * as Sesiones from "../Modelos/Modelo_Sesiones.js";

export async function requireAuth(req, res, next) {
  try {
    const sid = req.cookies?.sid;
    if (!sid) return res.sendStatus(401);
    const s = await Sesiones.ObtnerSesion(sid);
    if (!s) return res.sendStatus(401);
    req.auth = { sessionId: s.id, userId: s.userId };
    return next();
  } catch (e) {
    return res.sendStatus(401);
  }
}

export async function crear(req, res) {
  try {
    const { userId, singleSession } = req.body || {};
    if (!userId) return res.status(400).json({ error: "userId requerido" });
    const sesion = await Sesiones.crearSesion(userId, { singleSession: !!singleSession });
    res.cookie("sid", sesion.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });
    return res.status(201).json({ ok: true, userId: sesion.userId });
  } catch (e) {
    return res.status(500).json({ error: "no se pudo crear la sesión" });
  }
}

export async function actual(req, res) {
  const { userId } = req.auth;
  return res.json({ authenticated: true, userId });
}

export async function eliminarActual(req, res) {
  try {
    const sid = req.cookies?.sid;
    if (sid) {
      await Sesiones.eliminarSesion(sid);
      res.clearCookie("sid", { path: "/" });
    }
    res.set({
      "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
      Pragma: "no-cache",
      Expires: "0",
    });
    return res.sendStatus(204);
  } catch (e) {
    return res.status(500).json({ error: "no se pudo cerrar la sesión" });
  }
}
