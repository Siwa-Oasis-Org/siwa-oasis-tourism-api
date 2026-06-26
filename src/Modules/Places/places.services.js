import { Place } from "../../DB/Models/Place.model.js";
import { MapLocation } from "../../DB/Models/MapLocation.model.js";

// ─── Get All Places ───────────────────────────────────────────────────────────
export const getAllPlaces = async (req, res) => {
  const { category } = req.query;
  const where = category ? { category } : {};
  try {
    const places = await Place.findAll({ where, include: [MapLocation] });
    return res.status(200).json({ success: true, places });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Get Single Place ─────────────────────────────────────────────────────────
export const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.id, { include: [MapLocation] });
    if (!place)
      return res.status(404).json({ success: false, message: "Place not found" });
    return res.status(200).json({ success: true, place });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

// ─── Create Place (Admin) ─────────────────────────────────────────────────────
export const createPlace = async (req, res) => {
  const { name_ar, name_en, description_ar, category, photo_url, address, location } = req.body;
  try {
    const place = await Place.create({ name_ar, name_en, description_ar, category, photo_url, address });
    if (location) {
      await MapLocation.create({ place_id: place.place_id, ...location });
    }
    return res.status(201).json({ success: true, place });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};


// ─── Delete Place (Admin) ─────────────────────────────────────────────────────
export const deletePlace = async (req, res) => {
  try {
    await Place.destroy({ where: { place_id: req.params.id } });
    return res.status(200).json({ success: true, message: "Place deleted" });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};
