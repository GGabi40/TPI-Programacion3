import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const Book = sequelize.define('book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    publishingHouse: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, { timestamps: false });