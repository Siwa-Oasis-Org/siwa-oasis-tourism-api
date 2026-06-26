import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./User.model.js";

export const BusBooking = sequelize.define(
  "BusBooking",
  {
    booking_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    bus_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    departure_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    seats_count: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
    },
    status: {
      type: DataTypes.ENUM("pending", "confirmed", "cancelled"),
      defaultValue: "pending",
    },
  },
  {
    tableName: "bus_bookings",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

// Associations
User.hasMany(BusBooking, { foreignKey: "user_id" });
BusBooking.belongsTo(User, { foreignKey: "user_id" });
