import { Router } from "express";
import {
  createNewActivity,
  getActivityById,
  getActivitiesByClub,
  getAllActivities,
  updateActivity,
  deleteActivity,
} from "../services/activity.services.js";

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();


//            endpoints
router.get("/activities", getAllActivities);
router.get("/activities/:id", getActivityById);

router.get("/clubs/:clubId/activities", getActivitiesByClub);

// ruta de admin/superadmin
router.post("/clubs/:clubId/activities", verifyToken, roleMiddleware(['admin', 'superadmin']), createNewActivity);
router.put("/activities/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), updateActivity);
router.delete("/activities/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), deleteActivity);

export default router;


//, verifyToken, roleMiddleware(['admin', 'superadmin'])