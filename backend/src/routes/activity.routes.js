import { Router } from "express";
import {
  createNewActivity,
  getActivityById,
  getAllActivities,
  updateActivity,
  deleteActivity,
} from "../services/activity.services.js";

const router = Router();


/* 

await fetch('http://localhost:3000/activities', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
})

*/

//            endpoint
router.get("/activities", getAllActivities);
router.get("/activities/:id", getActivityById);
router.post("/activities", createNewActivity);
router.put("/activities/:id", updateActivity);
router.delete("/activities/:id", deleteActivity);

export default router;
