import { Book } from "../models/Book.js";


// GET /books -> Muestra todos los libros

export const getAllBooks = async (req,res) => {
    const books = await Book.findAll();

    if(!books) return res.status(404).send({ message: 'No hay libros.' });

    res.status(200).json(books);
};


// GET /books/:id -> Muestra libro específico

export const getByID = async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) return res.status(404).send({message: "Libro no encontrado"});

    res.status(200).json(book);
}


// POST /books -> Carga de libro

export const createBook = async (req,res) => {
    const { title, author, summary, gender, year, pages, publishingHouse, ISBN, language, image, available } = req.body;

    if (!title || !author || !summary || !gender || !year || !pages || !ISBN) {
        return res.status(400).send({message: "Las informaciones del libro son requeridas"});
    }

    try {
        const newBook = await Book.create({
            title, author, summary, gender, year, pages, publishingHouse, ISBN, language, image, available
        });

        res.status(200).json({ message: 'Libro agregado' }, newBook);
    } catch (error) {
        res.status(500).json({ message: 'No se pudo agregar el libro' });
    }
};


// PUT /books/:id -> Actualiza libro

export const updateBook = async (req, res) => {
    const { title, author, summary, gender, year, pages, publishingHouse, ISBN, language, image, available } = req.body;
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return res.status(404).send({message: "Libro no encontrado"});

    try {
        await book.update({
            title, author, summary, gender, year, pages, publishingHouse, ISBN, language, image, available
        });
        
        res.status(200).json({ message: 'Libro modificado' }, book);
    } catch (error) {
        console.error('Algo pasó: ', error)
        res.status(500).json({ message: 'Un error ocurrió' });
    }
};


// DELETE /books/:id -> Borrado Lógico
export const deleteBook = async (req, res) => {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) return res.status(404).send({message: "Libro no encontrado"});

    try {
        await book.destroy();
        res.send(`El libro con id ${id} ha sido eliminado correctamente`);
    } catch (error) {
        res.status(500).json({ message: 'No fue posible eliminar el libro.' });
    }
};
