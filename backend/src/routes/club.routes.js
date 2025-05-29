import { Router } from "express";
import { createNewClub, getClubById, getAllClubs, updateClub, deleteClub } from "../services/club.services.js";

//import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/clubs",getAllClubs);
router.get("/clubs/:id", getClubById);
router.post("/clubs", createNewClub);
router.put("/clubs/:id",updateClub);
router.delete("/clubs/:id", deleteClub);

export default router;