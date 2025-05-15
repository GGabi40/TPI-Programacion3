import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { port, sequelize } from './config/db.js';
import './models/Book.js';
import './models/User.js';
import './models/Review.js';

import BookRoutes from './routes/books.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import ReviewRoutes from './routes/review.routes.js';

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));


try {
    await sequelize.sync();

    app.use(express.json());
    app.use('/api', BookRoutes);
    app.use('/api', AuthRoutes);
    app.use('/api', ReviewRoutes);

    app.listen(port, () => {
        console.log(`Corriendo servidor en http://localhost:${port}`);
    });

} catch (error) {
    console.error('Error al inicializar servidor: ', error);
}
