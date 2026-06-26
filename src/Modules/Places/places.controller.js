import { Router } from "express";
import { protect, adminOnly } from "../../Middlewares/auth.middleware.js";
import * as places from "./places.services.js";

export const placesRouter = Router();

// GET /places              (public)
placesRouter.get("/", places.getAllPlaces);

// GET /places/:id          (public)
placesRouter.get("/:id", places.getPlaceById);

// POST /places             (admin only)
placesRouter.post("/", protect, adminOnly, places.createPlace);


// DELETE /places/:id       (admin only)
placesRouter.delete("/:id", protect, adminOnly, places.deletePlace);
