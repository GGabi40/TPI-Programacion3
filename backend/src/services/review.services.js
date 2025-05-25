import { Review } from "../models/Review.js";
import { Club } from "../models/Club.js";
import { Activity } from "../models/Activity.js";

import { validateString } from "../helper/validations.js";

//POST
export const createReview = async (req, res) => {
  const result = validateContent(req.body);

  if (result.error) {
    return res.status(400).json({ message: result.message });
  }

  const { content } = req.body;
  
  if (!content) {
    return res.status(400).send({ message: "Contenido es requerido." });
  }
  
  const userId = req.user.id; // lo saca del token 

  const newReview = await Review.create({ content, userId });
  res.json(newReview);
};


//GET-todas las reseñas
export const getAllReviews = async (req, res) => {
  const reviews = await Review.findAll();
  if (!reviews) {
    return res.status(404).send({ message: "No se encontraron reseñas." });
  }
  res.json(reviews);
};


/* 
GET para todas las reseñas de un club o actividad especifica
Agarrar reseñas de club o actividad específica para filtrado
 */

//GET - una sola reseña
export const getReviewById = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findByPk(id);
  if (!review) {
    return res.status(404).send({ message: "No se encontró la reseña." });
  }
  res.json(review);
};


//UPDATE - Actualiza
export const updateReview = async (req, res) => {
  const result = validateContent(req.body);

  if (result.error) {
    return res.status(400).json({ message: result.message });
  }

  const { content } = req.body;
  const { id } = req.params;
  const userId = req.user.id; // lo saca del token
  
  const review = await Review.findByPk(id);
  if (!review) {
    return res.status(404).send({ message: "No se encontró la reseña." });
  }

  // valida que user sea dueño de reseña
  if (review.userId !== userId) {
    return res.status(403).json({ message: 'No tenés autorización para editar esta reseña.' });
  }

  try {
    await review.update({ content, userId });
    res.json(review);
  } catch (error) {
    console.error("Error", error);
    res.status(500).send({ message: "Algo pasó", error });
  }
};


//DELETE - elimina reseña
export const deleteReview = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const userRole = req.user.role;

  const review = await Review.findByPk(id);

  if (!review) {
    return res.status(404).send({ message: "No se encontró la reseña." });
  }

  // valida que user sea dueño de reseña
  if (review.userId !== userId && !userRole.includes('admin')) {
    // si no sos dueño o no sos admin, no podés borrar.
    return res.status(403).json({ message: 'No tenés autorización para eliminar esta reseña.' });
  }

  try {
    await review.destroy();
    res.send("La reseña ha sido eliminada correctamente.");
  } catch (error) {
    console.error("Error", error);
    res.status(500).send({ message: "Algo pasó", error });
  }
};



//validaciones
const validateContent = (req) => {
  const result = {
    error: false,
    message: "",
  };

  const { content } = req;

  if (!content || !validateString(content, 4, 200)) {
    return {
      error: true,
      message: "El contenido no cumple los requisitos.",
    };
  }

  return result;
};
