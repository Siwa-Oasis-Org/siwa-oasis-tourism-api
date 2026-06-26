import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { Place } from "./Place.model.js";

export const MapLocation = sequelize.define(
  "MapLocation",
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    place_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "places", key: "place_id" },
    },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING, // google map link or custom
    },
  },
  {
    tableName: "map_locations",
    timestamps: false,
  }
);

// Associations
Place.hasOne(MapLocation, { foreignKey: "place_id" });
MapLocation.belongsTo(Place, { foreignKey: "place_id" });
