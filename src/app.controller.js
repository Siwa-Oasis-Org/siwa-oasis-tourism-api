import { authRouter } from "./Modules/Auth/auth.controller.js";
import { userRouter } from "./Modules/Users/user.controller.js";
import { placesRouter } from "./Modules/Places/places.controller.js";
import { tripPlanRouter } from "./Modules/TripPlan/tripPlan.controller.js";
import { busBookingRouter } from "./Modules/BusBooking/busBooking.controller.js";
import { chatbotRouter } from "./Modules/Chatbot/chatbot.controller.js";
import { adminRouter } from "./Modules/Admin/admin.controller.js";

const bootstrap = function (app, express) {
  app.use(express.json());

  // ─────────────────────── AUTH ───────────────────────
  app.use("/auth", authRouter);

  // ─────────────────────── USERS ──────────────────────
  app.use("/users", userRouter);

  // ─────────────────────── PLACES ─────────────────────
  app.use("/places", placesRouter);

  // ─────────────────────── TRIP PLAN ──────────────────
  app.use("/trip-plans", tripPlanRouter);

  // ─────────────────────── BUS BOOKING ────────────────
  app.use("/bus-booking", busBookingRouter);

  // ─────────────────────── CHATBOT ────────────────────
  app.use("/chatbot", chatbotRouter);

  // ─────────────────────── ADMIN ──────────────────────
  app.use("/admin", adminRouter);

  // ─────────────────────── NOT FOUND ──────────────────
  app.all("*", (req, res) => {
    return res.status(404).json({ success: false, message: "Route not found" });
  });
};

export default bootstrap;
