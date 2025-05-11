import { Router } from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById
} from "../services/auth.services.js";

const router = Router();

// RUTAS DE USUSARIO
// register y login

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/users", getAllUsers); // será solo para superadmin
router.get("/users/:id", getUserById); // será solo para superadmin

export default router;
