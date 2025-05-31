import { Club } from "../models/Club.js";
import { User } from "../models/User.js";
import { validateString } from "../helper/validations.js";

//logica del negocio
//GET
export const getAllClubs = async (req, res) => {
  const clubs = await Club.findAll();

  if (!clubs || clubs.length === 0) {
    return res.status(404).send({ message: "No se encontraron clubs!" });
  }

  res.json(clubs);
};

export const getClubById = async (req, res) => {
  const { id } = req.params;

  const clubById = await Club.findByPk(id);
  if (!clubById) {
    return res.status(404).send({ message: "No se encontro un club!" });
  }
  res.json(clubById);
};

// GET Clubs By User
export const getClubsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // hace un JOIN a la tabla UserClubs,
    // para buscar todos los clubes relacionados con ese userId
    const user = await User.findByPk(userId, {
      include: {
        model: Club,
        as: 'misClubes'
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado." });
    }

    res.json(user.misClubes);
  } catch (error) {
    console.error("Error al obtener clubes del usuario:", error);
    res.status(500).json({ message: "Error interno del servidor." });
  }
};

// POST users/:userId/clubs/:clubId
export const joinClub = async (req,res) => {
  const { userId, clubId } = req.params;

  try {
    const user = await User.findByPk(userId);
    const club = await Club.findByPk(clubId);

    if(!user || !club) {
      res.status(404).json({ message: 'Usuario o Club no encontrado' });
    }

    await user.addClub(club);

    return res.json({ message: 'Usuario unido al club exitosamente!' });
  } catch (error) {
    console.error('Error al unir usuario al club:', error);
    return res.status(500).json({ message: 'Error interno del servidor' });
  }
};


//POST
export const createNewClub = async (req, res) => {
  const result = validateClubData(req.body);
  if (result.error) {
    return res.status(400).json({ message: result.message });
  }

  const { name, description, restricted, interest, gender, color, isActive } =
    req.body;

  // Buscar si ya existe un club con el mismo nombre (no toma mayúsculas/minúsculas)
  const existingClub = await Club.findOne({ where: { name: name.trim() } });

  if (existingClub) {
    return res
      .status(400)
      .json({ message: "Ya existe un club con ese nombre." });
  }

  const newClub = await Club.create({
    name,
    description,
    restricted,
    interest,
    gender,
    color,
    isActive,
  });

  res.json(newClub);
};

//PUT-UPDATE(ES LO MISMO)
export const updateClub = async (req, res) => {
  const result = validateClubData(req.body);

  if (result.error) {
    return res.status(400).json({ message: result.message });
  }

  const { name, description, restricted, interest, gender, color, isActive } =
    req.body;

  const { id } = req.params;
  const club = await Club.findByPk(id);

  if (!club) {
    return res.status(404).send({ message: "No se encontro un club!" });
  }
  try {
    await club.update({
      name,
      description,
      restricted,
      interest,
      gender,
      color,
      isActive,
    });
    res.json(club);
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).send({ message: "Algo fallo!" });
  }
};

//DELETE
export const deleteClub = async (req, res) => {
  const { id } = req.params;
  const club = await Club.findByPk(id);

  if (!club) {
    return res.status(404).send({ message: "No se encontro un club!" });
  }
  try {
    await club.destroy();
    res.send("Club fue eliminado!!");
  } catch (error) {
    console.error("Error: ", error);
    return res.status(500).send({ message: "Algo fallo!" });
  }
};

//validacion
const validateClubData = (req) => {
  const result = {
    error: false,
    message: "",
  };
  const { name, description, interest, gender, color } = req;
  if (!name || !validateString(name, 3, 50)) {
    return {
      error: true,
      message: "el nombre no cumple los requisitos.",
    };
  }
  if (!description || !validateString(description, 5, 200)) {
    return {
      error: true,
      message: "la descripcion no cumple los requisitos.",
    };
  }
  if (!interest || !validateString(interest, 5, 100)) {
    return {
      error: true,
      message: "los intereses no cumple los requisitos.",
    };
  }
  if (!gender || !validateString(gender, 1, 100)) {
    return {
      error: true,
      message: "el genero no cumple los requisitos.",
    };
  }
  if (!color || !validateString(color, 1, 10)) {
    return {
      error: true,
      message: "el color no cumple los requisitos.",
    };
  }
  return result;
};
