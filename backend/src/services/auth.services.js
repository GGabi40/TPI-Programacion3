import {
    validateEmail,
    validateString,
    validatePassword,
    validateDate
} from "../helper/validations.js";

import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register User
export const registerUser = async (req, res) => {
    const result = validateRegisterUser(req.body);

    if (result.error) return res.status(400).json({ message: result.message });

    const { username, email, password, birthday, avatar, isActive, role } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (user)
            return res.status(400).json({ message: "Este email ya está registrado." });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            birthday,
            avatar,
            isActive,
            role: role || "user",
        });

        res.status(201).json({ message: "Usuario registrado correctamente", user: newUser.id });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};


// login User
export const loginUser = async (req, res) => {
    const result = validateLoginUser(req.body);

    if (result.error) return res.status(400).json({ message: result.message });

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        // 401 -> no autorizado
        if (!user) return res.status(401).json({ message: 'Este email no está registrado' });

        // verifica clave hasheada
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: 'Email o contraseña incorrectos' });

        // Crear token JWT
        const token = jwt.sign(
            { id: user.id, role: user.role }, // payload
            process.env.JWT_SECRET, // clave secreta en dotenv*
            { expiresIn: '1d' } // expira en 1 dia
        );

        res.status(200).json({ message: 'Login exitoso', token });

    } catch (error) {
        console.error('Error en el Login:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }

};


// --------
// Funciones de validación
const validateRegisterUser = (req) => {
    const result = {
        error: false,
        message: "",
    };

    const { username, email, password, birthday } = req;

    if (!username || !validateString(username, null, 13))
        return {
            error: true,
            message: "Nombre de usuario inválido",
        };

    if (!email || !validateEmail(email))
        return {
            error: true,
            message: "Email Inválido",
        };
    else if (!password || !validatePassword(password, 6, null, false, true)) {
        return {
            error: true,
            message: "Contraseña Inválida",
        };
    }

    if (!birthday || !validateDate(birthday)) {
        return {
            error: true,
            message: "Fecha de nacimiento inválida",
        };
    }

    return result;
};


const validateLoginUser = (req) => {
    const result = {
        error: false,
        message: ''
    }
    const { email, password } = req;

    if (!email || !validateEmail(email)) {
        return {
            error: true,
            message: 'Email inválido'
        }
    } else if (!password || !validatePassword(password, 6, null, false, true)) {
        return {
            error: true,
            message: 'Contraseña inválida'
        }
    }

    return result;
}