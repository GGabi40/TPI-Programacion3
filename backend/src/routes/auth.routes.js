import { Router } from "express";
import { registerUser, loginUser } from "../services/auth.services.js";

const router = Router();

// RUTAS DE USUSARIO
// register y login

router.post("/register", registerUser);
router.post("/login", loginUser);


export default router;