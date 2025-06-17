const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no enviado correctamente' });
  }

  const token = authHeader.split(' ')[1]; // ✅ Esto extrae solo el JWT

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // lo guardamos para usarlo en rutas o roles
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido' });
  }
};
