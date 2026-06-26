import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const Place = sequelize.define(
  "Place",
  {
    place_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_ar: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_en: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description_ar: {
      type: DataTypes.TEXT,
    },
    category: {
      type: DataTypes.ENUM("spring", "historical", "safaress", "medical"),
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "places",
    timestamps: false,
  }
);
