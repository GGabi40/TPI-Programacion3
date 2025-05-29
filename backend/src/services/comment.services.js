import { Comment } from "../models/Comment.js";
import { Review } from "../models/Review.js";
import { User } from "../models/User.js";

import { validateString } from "../helper/validations.js";

const validateContent = (reqBody) => {
  const result = { error: false, message: "" };
  const { content } = reqBody;

  if (!content || !validateString(content, 2, 300)) {
    return {
      error: true,
      message: "El contenido debe tener entre 2 y 300 caracteres.",
    };
  }

  return result;
};

// POST 
export const createComment = async (req, res) => {
  const result = validateContent(req.body);
  if (result.error) return res.status(400).json({ message: result.message });

  const { content, reviewId } = req.body;
  const userId = req.user.id; 

  if (!reviewId) return res.status(400).json({ message: "Falta reviewId." });

  try {
    const comment = await Comment.create({ content, userId, reviewId });
    res.status(201).json(comment);
  } catch (error) {
    console.error("Error al crear comentario:", error);
    res.status(500).json({ message: "Error al crear comentario." });
  }
};

// GET 
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({
      include: [
        { model: User, attributes: ["id", "username", "avatar"] },
        { model: Review, attributes: ["id", "content"] },
      ],
    });

    res.json(comments);
  } catch (error) {
    console.error("Error al obtener comentarios:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// GET 
export const getCommentsByReviewId = async (req, res) => {
  const { reviewId } = req.params;

  try {
    const comments = await Comment.findAll({
      where: { reviewId },
      include: [{ model: User, attributes: ["id", "username", "avatar"] }],
    });

    if (!comments.length)
      return res.status(404).json({ message: "No hay comentarios para esta reseña." });

    res.json(comments);
  } catch (error) {
    console.error("Error al obtener comentarios por reseña:", error);
    res.status(500).json({ message: "Error interno." });
  }
};
export const getCommentById = async (req, res) => {
  const { id } = req.params;

  const comment = await Comment.findByPk(id);

  if (!comment) {
    return res.status(404).json({ message: "Comentario no encontrado." });
  }

  res.json(comment);
};

// PUT 
export const updateComment = async (req, res) => {
  const result = validateContent(req.body);
  if (result.error) return res.status(400).json({ message: result.message });

  const { content } = req.body;
  const { id } = req.params;
  const userId = req.user.id;

  const comment = await Comment.findByPk(id);
  if (!comment) return res.status(404).json({ message: "Comentario no encontrado." });

  if (comment.userId !== userId)
    return res.status(403).json({ message: "No autorizado para editar este comentario." });

  try {
    await comment.update({ content });
    res.json(comment);
  } catch (error) {
    console.error("Error al actualizar comentario:", error);
    res.status(500).json({ message: "Error interno." });
  }
};

// DELETE 
export const deleteComment = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  const userRole = req.user.role;

  const comment = await Comment.findByPk(id);
  if (!comment) return res.status(404).json({ message: "Comentario no encontrado." });

  if (comment.userId !== userId && !userRole.includes("admin"))
    return res.status(403).json({ message: "No autorizado para eliminar este comentario." });

  try {
    await comment.destroy();
    res.send({ message: "Comentario eliminado correctamente." });
  } catch (error) {
    console.error("Error al eliminar comentario:", error);
    res.status(500).json({ message: "Error interno." });
  }
};