import express from 'express';
import cors from 'cors';

import { port, sequelize } from './config/db.js';
import './models/Book.js';

import BookRoutes from './routes/books.routes.js';
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));


try {
    await sequelize.sync();

    app.use(express.json());
    app.use('/', BookRoutes);

    app.listen(port, () => {
        console.log(`Corriendo servidor en http://localhost:${port}`);
    });

} catch (error) {
    console.error('Error al inicializar servidor: ', error);
}
