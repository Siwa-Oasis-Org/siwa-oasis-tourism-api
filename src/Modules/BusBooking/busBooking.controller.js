import { Router } from "express";
import { protect, adminOnly } from "../../Middlewares/auth.middleware.js";
import * as busBooking from "./busBooking.services.js";

export const busBookingRouter = Router();

// POST /bus-booking
busBookingRouter.post("/", protect, busBooking.createBooking);

// GET /bus-booking/my
busBookingRouter.get("/my", protect, busBooking.getMyBookings);


// GET /bus-booking/all       (admin)
busBookingRouter.get("/all", protect, adminOnly, busBooking.getAllBookings);

