import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Club = sequelize.define("club", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    restricted:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    interest:{
        type: DataTypes.STRING,
        allowNull: false
    },
    gender:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    activityId:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
})