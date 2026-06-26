import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";
import { User } from "./User.model.js";

export const ChatHistory = sequelize.define(
  "ChatHistory",
  {
    chat_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "users", key: "user_id" },
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "chat_history",
    timestamps: false,
  }
);

// Associations
User.hasMany(ChatHistory, { foreignKey: "user_id" });
ChatHistory.belongsTo(User, { foreignKey: "user_id" });
