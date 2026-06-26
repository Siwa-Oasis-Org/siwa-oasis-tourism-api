import { BusBooking } from "../../DB/Models/BusBooking.model.js";

// ─── Create Booking ───────────────────────────────────────────────────────────
export const createBooking = async (req, res) => {
  const { bus_type, departure_date, seats_count, total_price } = req.body;
  try {
    const booking = await BusBooking.create({
      user_id: req.user.user_id,
      bus_type, departure_date, seats_count, total_price,
    });
    return res.status(201).json({ success: true, booking });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get My Bookings ──────────────────────────────────────────────────────────
export const getMyBookings = async (req, res) => {
  try {
    const bookings = await BusBooking.findAll({ where: { user_id: req.user.user_id } });
    return res.status(200).json({ success: true, bookings });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// ─── Admin: Get All Bookings ──────────────────────────────────────────────────
export const getAllBookings = async (req, res) => {
  try {
    const bookings = await BusBooking.findAll();
    return res.status(200).json({ success: true, bookings });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

