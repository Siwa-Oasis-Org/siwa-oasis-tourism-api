import jwt from "jsonwebtoken";
import { User } from "../DB/Models/User.model.js";

// ─── Verify Token ─────────────────────────────────────────────────────────────
export const protect = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token)
    return res.status(401).json({ success: false, message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.user_id);
    if (!user)
      return res.status(401).json({ success: false, message: "User not found" });
    req.user = user;
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// ─── Admin Only ───────────────────────────────────────────────────────────────
export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ success: false, message: "Admins only" });
  next();
};