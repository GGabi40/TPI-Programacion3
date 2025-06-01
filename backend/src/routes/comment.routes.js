import { Router } from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  getCommentsByReviewId,
  updateComment,
  deleteComment
} from "../services/comment.services.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/comments", getAllComments);
router.post("/comments", verifyToken, createComment);
router.get("/comments/:id", verifyToken, getCommentById);
router.get("/comments/:id", verifyToken, getCommentsByReviewId);


router.put("/comments/:id", verifyToken, updateComment);
router.delete("/comments/:id", verifyToken, deleteComment);

export default router;
