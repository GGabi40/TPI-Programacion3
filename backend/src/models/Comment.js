import { DataTypes } from "sequelize";
import { sequelize } from "../../config.js"; // Ajustá el path si usás otra ruta

export const Comment = sequelize.define("Comment", {
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


