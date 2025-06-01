import { Router } from "express";
import {
  createNewClub,
  getClubById,
  getAllClubs,
  updateClub,
  deleteClub,
  getClubsByUser,
  deleteJoinedUserClub,
  joinClub
} from "../services/club.services.js";

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/clubs", getAllClubs);
router.get("/clubs/:id", getClubById);
router.get("/clubs/user/:userId", getClubsByUser);


// unión
router.post("/users/:userId/clubs/:clubId", verifyToken, joinClub);
// delete unión
router.delete('/users/:userId/clubs/:clubId', deleteJoinedUserClub);


router.post("/clubs", verifyToken, roleMiddleware(['admin', 'superadmin']), createNewClub);
router.put("/clubs/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), updateClub); // actualiza el club
router.delete("/clubs/:id", verifyToken, roleMiddleware(['admin', 'superadmin']),  deleteClub); // borra club

export default router;
