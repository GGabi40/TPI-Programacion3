import {
  validateEmail,
  validateString,
  validatePassword,
  validateDate,
} from "../helper/validations.js";

import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Register User
export const registerUser = async (req, res) => {
  const result = validateRegisterUser(req.body);

  if (result.error) return res.status(400).json({ message: result.message });

  const { username, email, password, birthday, avatar, isActive, role } =
    req.body;

  try {
    const existingEmail = await User.findOne({ where: { email } });

    if (existingEmail) {
      return res.status(400).json({ message: "Este email ya está registrado." });
    }

    const existingUsername = await User.findOne({ where: { username } });

    if (existingUsername) {
      return res.status(400).json({ message: "Este nombre de usuario ya está en uso." });
    }

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
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const result = validateLoginUser(req.body);

  if (result.error) return res.status(400).json({ message: result.message });

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    // 401 -> no autorizado
    if (!user)
      return res.status(401).json({ message: "Este email no está registrado" });

    // verifica clave hasheada
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return res
        .status(401)
        .json({ message: "Email o contraseña incorrectos" });

    // Crear token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role }, // payload
      process.env.JWT_SECRET, // clave secreta en dotenv*
      { expiresIn: "1d" } // expira en 1 dia
    );

    res.status(200).json({ message: "Login exitoso", token });
  } catch (error) {
    console.error("Error en el Login:", error);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

// PUT - USER actualiza su propio perfil
export const updateProfileAndPassword = async (req, res) => {
  try {
    const { id } = req.user;
    const {
      username,
      email,
      birthday,
      avatar,
      isActive,
      currentPassword,
      newPassword,
    } = req.body;

    const validationResult = validateUpdateProfileData(req);

    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.message });
    }

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado " });
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.birthday = birthday || user.birthday;
    user.avatar = avatar || user.avatar;
    user.isActive = isActive !== undefined ? isActive : user.isActive;

    // si se envían datos para cambiar la contraseña:
    if (currentPassword && newPassword) {
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res
          .status(401)
          .json({ message: "La contraseña actual es incorrecta" });
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(newPassword, salt);
    }

    await user.save().catch((error) => {
      console.error("Error al guardar el perfil: ", error.message);
      res
        .status(500)
        .json({ message: "Error al guardar los cambios en el perfil" });
    });

    res.status(200).json({ message: "Perfil actualizado correctamente", user });
  } catch (error) {
    console.error("Error al actualizar el perfil:", error.message);
    res.status(500).json({ message: "Error al actualizar el perfil" });
  }
};

// Muestra un usuario
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });

    if (!user) return res.status(404).json({ message: 'Usuario no encontrado ' });

    if (user.id !== Number(id)) return res.status(400).json({ message: 'No tienes permiso para ver este usuario.' });

    res.status(200).json(user);
  } catch (error) {
    console.error('Error al buscar el usuario:', error.message);
    res.status(500).json({ message: 'Error del servidor' });
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

  if (!birthday || !validateDate(birthday, false)) {
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
    message: "",
  };
  const { email, password } = req;

  if (!email || !validateEmail(email)) {
    return {
      error: true,
      message: "Email inválido",
    };
  } else if (!password || !validatePassword(password, 6, null, false, true)) {
    return {
      error: true,
      message: "Contraseña inválida",
    };
  }

  return result;
};

// Validación de Update
const validateUpdateProfileData = (req) => {
  const result = {
    error: false,
    message: "",
  };

  const { username, email, password } = req;

  // En este código, se validan los datos solo si se envían

  if (username && !validateString(username, null, 13)) {
    return {
      error: true,
      message: "Nombre de usuario inválido",
    };
  }

  if (email && !validateEmail(email)) {
    return {
      error: true,
      message: "Email Inválido",
    };
  }

  if (password && !validatePassword(password, 6, null, false, true)) {
    return {
      error: true,
      message: "Contraseña Inválida",
    };
  }

  if (birthday && !validateDate(birthday, false)) {
    return {
      error: true,
      message: "Fecha de nacimiento inválida",
    };
  }

  return result;
};
