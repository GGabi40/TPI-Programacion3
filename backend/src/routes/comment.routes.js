import { Router } from "express";
import {
  createComment,
  getAllComments,
  getCommentById,
  getCommentsByReviewId,
  updateComment,
  deleteComment
} from "../services/comment.services.js";

const router = Router();

router.post("/comments", createComment);
router.get("/comments", getAllComments);
router.get("/comments/:id", getCommentById);
router.get("/comments/:id", getCommentsByReviewId);



router.put("/comments/:id", updateComment);
router.delete("/comments/:id", deleteComment);

export default router;
