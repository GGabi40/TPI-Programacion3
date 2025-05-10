import express from 'express';
import cors from 'cors';

import { port } from './config/db.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));


try {
    app.use(express.json());

    app.listen(port, () => {
        console.log(`Corriendo servidor en http://localhost:${port}`);
    });

} catch (error) {
    console.error('Error al inicializar servidor: ', error);
}
