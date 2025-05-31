import React, { useEffect, useState } from "react";

import { useFetch } from "./hook/UseFetch";

const { getAll, put, del } = useFetch("/books");

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState("");
  const [isEdit, setIsEdit] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const books = await getAll();
      setAllBooks(books);
    };
    fetchData();
  }, []);


  const handleModify = (book) => {
    console.log("modificando libro con id: ", book.id);
    setBookToEdit(book);
    setIsEdit(true);
    return;
  };


  const handleDelete = async (book) => {
    console.log("eliminando libro con id: ", book.id);
    await del(book.id);
    const books = await getAll();
    setAllBooks(books);
    return;
  };


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookToEdit({
      ...bookToEdit,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    //          data          id
    await put(bookToEdit, bookToEdit.id);

    const books = await getAll();
    setAllBooks(books);

    setIsEdit(false);
    setBookToEdit(null);
  };

  return (
    <div>
      {allBooks.map((b, index) => (
        <div key={index}>
          <p className="dark">{b.id}</p>
          <p className="dark">{b.title}</p>
          <p className="dark">{b.author}</p>
          <button onClick={() => handleModify(b)}>Modificar</button>
          <button onClick={() => handleDelete(b)}>Eliminar</button>
        </div>
      ))}
      {isEdit && bookToEdit && (
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={bookToEdit.title}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Autor"
            value={bookToEdit.author}
            onChange={handleInputChange}
            required
          />
          <textarea
            name="summary"
            placeholder="Resumen"
            value={bookToEdit.summary}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="gender"
            placeholder="Género"
            value={bookToEdit.gender}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Año"
            value={bookToEdit.year}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="pages"
            placeholder="Páginas"
            value={bookToEdit.pages}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="publishingHouse"
            placeholder="Editorial"
            value={bookToEdit.publishingHouse || ""}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="ISBN"
            placeholder="ISBN"
            value={bookToEdit.ISBN}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="language"
            placeholder="Idioma"
            value={bookToEdit.language}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="URL de imagen"
            value={bookToEdit.image || ""}
            onChange={handleInputChange}
          />
          <label>
            Disponible:
            <input
              type="checkbox"
              name="available"
              checked={bookToEdit.available}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Guardar cambios</button>
          <button type="button" onClick={() => setIsEdit(false)}>
            Cancelar
          </button>
        </form>
      )}
    </div>
  );
};

export default Books;
