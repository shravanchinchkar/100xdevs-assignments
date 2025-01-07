const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  try {
    const jwtVerify = jwt.verify(jwtToken, JWT_SECRET);
    if (jwtVerify.username) {
      next();
    } else {
      return res.status(403).json({
        message: "You are not authenticated",
      });
    }
  } catch (err) {
    return res.json({
      msg: "Incorrect msg",
    });
  }
}

module.exports = adminMiddleware;
