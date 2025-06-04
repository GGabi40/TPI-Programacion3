import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";


export const Activity = sequelize.define("activity", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    progress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    dateStart: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dateEnd: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clubId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})