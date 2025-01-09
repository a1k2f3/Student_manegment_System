import jwt from "jsonwebtoken";
export default function authenticateToken(req, res, next) {
  const JWT_SECRET = "your_jwt_secret_key"  
  const token = req.headers['authorization']?.split(" ")[1];
    if (!token) return res.sendStatus(401);
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }