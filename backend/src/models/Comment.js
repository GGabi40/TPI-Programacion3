import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js"; 


export const Comment = sequelize.define('comment', {
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
        allowNull: false,
    },
    reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});


