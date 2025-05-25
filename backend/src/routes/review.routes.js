import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "../services/review.services.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/reviews", verifyToken, createReview);
router.get("/reviews", verifyToken, getAllReviews);
router.get("/reviews/:id", verifyToken, getReviewById);
router.put("/reviews/:id", verifyToken, updateReview);
router.delete("/reviews/:id", verifyToken, deleteReview);

export default router;
