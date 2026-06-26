import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../../DB/Models/User.model.js";

// ─── Register ─────────────────────────────────────────────────────────────────
export const register = async (req, res) => {
  const { full_name, email, phone, password } = req.body;
  try {
    const exists = await User.findOne({ where: { email } });
    if (exists)
      return res.status(409).json({ success: false, message: "Email already exists" });

    const password_hash = await bcrypt.hash(password, +process.env.SALT_ROUNDS);
    const user = await User.create({ full_name, email, phone, password_hash });

    return res.status(201).json({ success: true, user_id: user.user_id });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Login ────────────────────────────────────────────────────────────────────
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user)
      return res.status(401).json({ success: false, message: "Email or password incorrect" });

    const match = await bcrypt.compare(password, user.password_hash);
    if (!match)
      return res.status(401).json({ success: false, message: "Email or password incorrect" });

    const token = jwt.sign(
      { user_id: user.user_id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );

    return res.status(200).json({ success: true, token, role: user.role });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
