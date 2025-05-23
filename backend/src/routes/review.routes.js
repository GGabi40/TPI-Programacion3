import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "../services/review.services.js";

const router = Router();
router.post("/reviews", createReview);
router.get("/reviews", getAllReviews);
router.get("/reviews/:id", getReviewById);
router.put("/reviews/:id", updateReview);
router.delete("/reviews/:id", deleteReview);

export default router;
