import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./User.model.js";

export const ContentUpdate = sequelize.define(
  "ContentUpdate",
  {
    update_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    admin_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    entity_type: {
      type: DataTypes.ENUM("add", "update", "delete"),
      allowNull: false,
    },
    old_data: {
      type: DataTypes.JSON,
    },
    new_data: {
      type: DataTypes.JSON,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "content_updates",
    timestamps: false,
  }
);

// Associations
User.hasMany(ContentUpdate, { foreignKey: "admin_id", as: "updates" });
ContentUpdate.belongsTo(User, { foreignKey: "admin_id", as: "admin" });
