import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Review = sequelize.define("review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    activityId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})