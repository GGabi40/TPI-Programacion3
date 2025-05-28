import { Router } from "express";
import { 
  registerUser, 
  loginUser,
  getUserById,
  updateProfileAndPassword 
} from "../services/auth.services.js";

import {
  getAllUsers,
  
  deleteUser
} from '../services/admin.services.js';

import { verifyToken, roleMiddleware } from "../middleware/authMiddleware.js";

const router = Router();


// RUTAS DE USUSARIO
// register y login

router.post("/register", registerUser);
router.post("/login", loginUser);

router.put("/profile", verifyToken, updateProfileAndPassword);
router.get("/users/:id", verifyToken, getUserById);

// Rutas para Admin y SuperAdmin
router.get("/users", verifyToken, roleMiddleware(['superadmin']), getAllUsers); // será solo para superadmin

router.delete('/users/:id', verifyToken, roleMiddleware(['superadmin']), deleteUser);

export default router;
