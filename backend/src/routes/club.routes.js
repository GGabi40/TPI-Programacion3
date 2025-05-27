import { Router } from "express";
import {
  createNewClub,
  getClubById,
  getAllClubs,
  updateClub,
  deleteClub,
} from "../services/club.services.js";

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/clubs", verifyToken, getAllClubs);
router.get("/clubs/:id", verifyToken, getClubById);

router.post("/clubs", verifyToken, roleMiddleware(['admin', 'superadmin']), createNewClub);
router.put("/clubs/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), updateClub);
router.delete("/clubs/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), deleteClub);

export default router;
