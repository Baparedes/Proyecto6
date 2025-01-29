// Importación JWT para la creación del token
const jwt = require("jsonwebtoken");

// Creación del middleware de autorización
module.exports = (req, res, next) => {
  let { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ msg: "Acceso no autorizado" });
  }

  try {
    console.log("authorization: ", authorization);
    let [type, token] = authorization.split(" ");
    if (type === "Token" || type === "Bearer") {
      const openToken = jwt.verify(token, process.env.SECRET);
      req.user = openToken.user;
      next();
    } else {
      return res.status(401).json({ msg: "Acceso no autorizado" });
    }
  } catch (error) {
    res.json({ msg: 'Hubo un error', error })
  }
};
