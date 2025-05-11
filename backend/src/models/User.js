import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: '/avatars/avatar1.png'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    role: {
        type: DataTypes.ENUM('superadmin', 'admin', 'user'),
        defaultValue: 'user',
        allowNull: false
    }
});
