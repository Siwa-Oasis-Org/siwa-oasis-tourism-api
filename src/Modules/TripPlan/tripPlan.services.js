import { TripPlan } from "../../DB/Models/TripPlan.model.js";
import { Place } from "../../DB/Models/Place.model.js";
import { PlanPlace } from "../../DB/Models/PlanPlace.model.js";

// ─── Create Trip Plan ─────────────────────────────────────────────────────────
export const createTripPlan = async (req, res) => {
  const { days_count, travel_style, arrival_date, group_size, budget_level, itinerary_json, total_cost_estimate } = req.body;
  try {
    const plan = await TripPlan.create({
      user_id: req.user.user_id,
      days_count, travel_style, arrival_date,
      group_size, budget_level, itinerary_json, total_cost_estimate,
    });
    return res.status(201).json({ success: true, plan });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get My Trip Plans ────────────────────────────────────────────────────────
export const getMyTripPlans = async (req, res) => {
  try {
    const plans = await TripPlan.findAll({
      where: { user_id: req.user.user_id },
      include: [{ model: Place, through: { attributes: ["day_number"] } }],
    });
    return res.status(200).json({ success: true, plans });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get Single Plan ──────────────────────────────────────────────────────────
export const getTripPlanById = async (req, res) => {
  try {
    const plan = await TripPlan.findOne({
      where: { plan_id: req.params.id, user_id: req.user.user_id },
      include: [{ model: Place, through: { attributes: ["day_number"] } }],
    });
    if (!plan)
      return res.status(404).json({ success: false, message: "Plan not found" });
    return res.status(200).json({ success: true, plan });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Delete Plan ──────────────────────────────────────────────────────────────
export const deleteTripPlan = async (req, res) => {
  try {
    await TripPlan.destroy({
      where: { plan_id: req.params.id, user_id: req.user.user_id },
    });
    return res.status(200).json({ success: true, message: "Plan deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
