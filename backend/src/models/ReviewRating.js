import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const ReviewRating = sequelize.define(
  "reviewRating",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM("like", "dislike"),
      allowNull: false,
    },
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    uniqueKeys: {
      // evita que un usuario vote más de una vez la misma reseña
      unique_review_user: {
        fields: ["userId", "reviewId"],
      },
    },
  }
);
