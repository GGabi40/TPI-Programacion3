import { Router } from "express";
import { getAllBooks, 
    getByID, 
    createBook, 
    updateBook, 
    deleteBook
} from "../services/books.services.js";

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

// Muestra todos los libros
router.get('/books', getAllBooks);

// Muestra libro específico
router.get('/books/:id', getByID);

// Carga libro
router.post('/books', verifyToken, roleMiddleware(['admin', 'superadmin']), createBook);

// Actualiza Libro
router.put('/books/:id', verifyToken, roleMiddleware(['admin', 'superadmin']), updateBook);

// Borrar libro de bbdd
router.delete('/books/:id', verifyToken, roleMiddleware(['admin', 'superadmin']), deleteBook);


export default router;