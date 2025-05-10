import { Router } from "express";
import { getAllBooks, 
    getByID, 
    createBook, 
    updateBook, 
    deleteBook
} from "../services/books.services.js";

const router = Router();

// Muestra todos los libros
router.get('/books', getAllBooks);

// Muestra libro específico
router.get('/books/:id', getByID);

// Carga libro
router.post('/books', createBook);

// Actualiza Libro
router.put('/books/:id', updateBook);

// Borrar libro de bbdd
router.post('/books/:id', deleteBook);


export default router;