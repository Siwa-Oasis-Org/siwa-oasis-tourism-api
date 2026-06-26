import { User } from "../../DB/Models/User.model.js";
import { ContentUpdate } from "../../DB/Models/ContentUpdate.model.js";
import { BusBooking } from "../../DB/Models/BusBooking.model.js";

// ─── Get All Users ────────────────────────────────────────────────────────────
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password_hash"] } });
    return res.status(200).json({ success: true, users });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get Content Update Logs ──────────────────────────────────────────────────
export const getUpdateLogs = async (req, res) => {
  try {
    const logs = await ContentUpdate.findAll({
      include: [{ model: User, as: "admin", attributes: ["full_name", "email"] }],
      order: [["timestamp", "DESC"]],
    });
    return res.status(200).json({ success: true, logs });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get Reports (Bus Bookings Summary) ───────────────────────────────────────
export const getReports = async (req, res) => {
  try {
    const totalBookings = await BusBooking.count();
    const confirmedBookings = await BusBooking.count({ where: { status: "confirmed" } });
    const pendingBookings = await BusBooking.count({ where: { status: "pending" } });
    const totalUsers = await User.count({ where: { role: "visitor" } });

    return res.status(200).json({
      success: true,
      reports: { totalBookings, confirmedBookings, pendingBookings, totalUsers },
    });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
