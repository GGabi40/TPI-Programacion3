import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ReviewRating = sequelize.define("reviewRating", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: {
    type: DataTypes.ENUM("like", "dislike"),
    allowNull: false,
  },
});
