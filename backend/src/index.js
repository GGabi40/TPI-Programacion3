import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { port, sequelize } from './config/db.js';
import './models/Book.js';
import './models/User.js';
import './models/Review.js';
import './models/Club.js';
import './models/Activity.js';
import './models/ReviewRating.js';
import './models/relation.js';

import BookRoutes from './routes/books.routes.js';
import AuthRoutes from './routes/auth.routes.js';
import ReviewRoutes from './routes/review.routes.js';
import ClubRoutes from './routes/club.routes.js';
import ActivityRoutes from './routes/activity.routes.js';
import ReviewRatingRoutes from './routes/reviewRating.routes.js'

dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

try {
    await sequelize.sync();

    app.use('/api', BookRoutes);
    app.use('/api', AuthRoutes);
    app.use('/api', ReviewRoutes);
    app.use('/api', ClubRoutes);
    app.use('/api', ActivityRoutes);
    app.use('/api', ReviewRatingRoutes);
    app.listen(port, () => {
        console.log(`Corriendo servidor en http://localhost:${port}`);
    });

} catch (error) {
    console.error('Error al inicializar servidor: ', error);
}
