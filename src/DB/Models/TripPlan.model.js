import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./User.model.js";

export const TripPlan = sequelize.define(
  "TripPlan",
  {
    plan_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    days_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    travel_style: {
      type: DataTypes.ENUM("adventure", "relaxing", "cultural", "family"),
    },
    arrival_date: {
      type: DataTypes.DATEONLY,
    },
    group_size: {
      type: DataTypes.TINYINT,
    },
    budget_level: {
      type: DataTypes.ENUM("low", "medium", "high"),
    },
    itinerary_json: {
      type: DataTypes.JSON, // الـ plan التفصيلي كـ JSON
    },
    total_cost_estimate: {
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    tableName: "trip_plans",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

// Associations
User.hasMany(TripPlan, { foreignKey: "user_id" });
TripPlan.belongsTo(User, { foreignKey: "user_id" });
