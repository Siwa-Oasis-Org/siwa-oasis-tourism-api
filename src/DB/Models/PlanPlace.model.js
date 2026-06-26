import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { TripPlan } from "./TripPlan.model.js";
import { Place } from "./Place.model.js";

export const PlanPlace = sequelize.define(
  "PlanPlace",
  {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: "trip_plans", key: "plan_id" },
    },
    place_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: { model: "places", key: "place_id" },
    },
    day_number: {
      type: DataTypes.TINYINT, // اليوم اللي هيزور فيه المكان ده
    },
  },
  {
    tableName: "plan_places",
    timestamps: false,
  }
);

// Many-to-Many
TripPlan.belongsToMany(Place, { through: PlanPlace, foreignKey: "plan_id" });
Place.belongsToMany(TripPlan, { through: PlanPlace, foreignKey: "place_id" });
