import { Router } from "express";
import {
  createNewActivity,
  getActivityById,
  getActivitiesByClub,
  getAllActivities,
  updateActivity,
  deleteActivity,
} from "../services/activity.services.js";

//import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();


//            endpoints
router.get("/activities", getAllActivities);
router.get("/activities/:id", getActivityById);

router.get("/clubs/:clubId/activities", getActivitiesByClub);

// ruta de admin/superadmin
router.post("/clubs/:clubId/activities", createNewActivity);
router.put("/activities/:id", updateActivity);
router.delete("/activities/:id", deleteActivity);

export default router;


//, verifyToken, roleMiddleware(['admin', 'superadmin'])