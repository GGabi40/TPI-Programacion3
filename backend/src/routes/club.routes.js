import { Router } from "express";
import {
  createNewClub,
  getClubById,
  getAllClubs,
  updateClub,
  deleteClub,
  getClubsByUser,
  joinClub
} from "../services/club.services.js";

//import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/clubs", getAllClubs);
router.get("/clubs/:id", getClubById);
router.get("/clubs/user/:userId", getClubsByUser);

router.post("/clubs", createNewClub);
router.post("/users/:userId/clubs/:clubId", joinClub);

router.put("/clubs/:id", updateClub);

router.delete("/clubs/:id", deleteClub);

export default router;
