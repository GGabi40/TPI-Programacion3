import { Router } from "express";
import {
  ratingReview,
  getRatingById,
  deleteReview,
} from "../services/reviewRating.services.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/review-rating", verifyToken, ratingReview);
router.get('/review-rating/:reviewId', verifyToken, getRatingById);
router.delete('/review-rating/:reviewId', verifyToken, deleteReview);

export default router;
