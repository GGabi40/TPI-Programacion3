import { Router } from "express";
import { createNewActivity, getActivityById, getAllActivities, updateActivity, deleteActivity } from "../services/activity.services.js";


const router = Router();

router.get("/activities", getAllActivities);
router.get("/activities/:id", getActivityById);
router.post("/activities",createNewActivity);
router.put("/activities/:id",updateActivity);
router.delete("/activities/:id",deleteActivity);

export default router;