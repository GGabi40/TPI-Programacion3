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
        type: DataTypes.DATE,
        allowNull: false,
        //defaultValue: DataTypes.NOW
        //las dos actividades que cree fueron una con cada forma y las dos me tira que es invalido el valor
    },
    dateEnd: {
        type: DataTypes.DATE,
        allowNull: true
    },
    reviewId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})