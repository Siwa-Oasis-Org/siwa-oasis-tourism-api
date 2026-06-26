import { Router } from "express";
import { protect } from "../../Middlewares/auth.middleware.js";
import * as tripPlan from "./tripPlan.services.js";

export const tripPlanRouter = Router();

// POST /trip-plans
tripPlanRouter.post("/", protect, tripPlan.createTripPlan);

// GET /trip-plans
tripPlanRouter.get("/", protect, tripPlan.getMyTripPlans);

// GET /trip-plans/:id
tripPlanRouter.get("/:id", protect, tripPlan.getTripPlanById);

// DELETE /trip-plans/:id
tripPlanRouter.delete("/:id", protect, tripPlan.deleteTripPlan);
