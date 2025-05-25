import { Router } from "express";
import {
  createNewActivity,
  getActivityById,
  getAllActivities,
  updateActivity,
  deleteActivity,
} from "../services/activity.services.js";

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();


//            endpoints
router.get("/activities", verifyToken, getAllActivities);
router.get("/activities/:id", verifyToken, getActivityById);

// ruta de admin/superadmin
router.post("/clubs/:clubId/activities", verifyToken, roleMiddleware(['admin', 'superadmin']), createNewActivity);
router.put("/activities/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), updateActivity);
router.delete("/activities/:id", verifyToken, roleMiddleware(['admin', 'superadmin']), deleteActivity);

export default router;
