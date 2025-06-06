import { validateDate, validateString } from "../helper/validations.js";
import { Activity } from "../models/Activity.js";
import { Club } from "../models/Club.js";
import { Book } from "../models/Book.js";

//GET
export const getAllActivities = async (req, res) => {
  const activities = await Activity.findAll();
  if (!activities) {
    return res.status(404).send({ message: "No se encuentran actividades!" });
  }
  res.json(activities);
};

export const getActivityById = async (req, res) => {
  const { id } = req.params;

  const activityById = await Activity.findByPk(id);
  if (!activityById) {
    return res
      .status(404)
      .send({ message: "No se encontro ninguna actividad!" });
  }
  res.json(activityById);
};

// GET /clubs/:clubId/activities
export const getActivitiesByClub = async (req, res) => {
  const { clubId } = req.params;

  try {
    const club = await Club.findByPk(clubId);

    if (!club) return res.status(404).json({ message: "No se encontró club." });

    const activities = await Activity.findAll({
      where: { clubId },
    });

    if (!activities || activities.length === 0) {
      return res.status(404).json({ message: "Actividad no encontrada." });
    }

    res.status(200).json(activities);
  } catch (error) {
    console.error("Error al obtener actividad");
    res.status(500).json({ message: "Error del servidor." });
  }
};

//POST /clubs/:clubId/activities
export const createNewActivity = async (req, res) => {
  const { clubId } = req.params;
  const { progress, isActive, dateStart, dateEnd, bookId } = req.body;

  try {
    const club = await Club.findByPk(clubId);

    if (!club) {
      return res.status(404).json({ message: "No se encontró el club." });
    }

    const book = await Book.findByPk(bookId);

    if (!book) {
      return res.status(404).json({ message: "No se encontró el libro." });
    }

    // busca si ya hay una actividad activa
    const activeExists = await Activity.findOne({
      where: {
        clubId,
        isActive: true,
      },
    });

    // No permite su creación si hay actividad activa
    if (activeExists && isActive) {
      return res.status(400).json({message: "Ya hay una actividad activa para este club. Debe finalizarse antes de crear otra." });
    }

    const newActivity = await Activity.create({
      progress,
      isActive,
      dateStart,
      dateEnd,
      bookId,
      clubId,
    });

    res.json(newActivity);
  } catch (e) {
    console.error("Error al crear la actividad:", e);
    res.status(500).json({ message: "Error al crear la actividad.", e });
  }
};

//PUT-UPDATE
export const updateActivity = async (req, res) => {
  const { progress, isActive, dateStart, dateEnd, bookId } = req.body;

  const { id } = req.params;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return res
      .status(404)
      .send({ message: "No se encontro ninguna actividad!" });
  }
  try {
    await activity.update({ progress, isActive, dateStart, dateEnd, bookId });
    res.json(activity);
  } catch (error) {
    console.error("Error: ", error);
    return res
      .status(500)
      .send({ message: "Algo fallo al crear la actividad!" });
  }
};

//DELETE
export const deleteActivity = async (req, res) => {
  const { id } = req.params;
  const activity = await Activity.findByPk(id);

  if (!activity) {
    return res
      .status(404)
      .send({ message: "No se encontro ninguna actividad!" });
  }
  try {
    await activity.destroy();
    res.send("La actividad ha sido eliminada!!");
  } catch (error) {
    console.error("Error: ", error);
    returnres.status(500).send({ message: "Algo fallo!!!" });
  }
};

//validacion
const validateActivityData = (req) => {
  const result = {
    error: false,
    message: "",
  };
  const { progress, dateStart, dateEnd } = req;
  if (!progress || !validateString(progress, 1, 20)) {
    return {
      error: true,
      message: "el progreso no cumple con los requisitos.",
    };
  }
  if (!dateStart || !validateDate(dateStart, false)) {
    return {
      error: true,
      message: "la fecha de inicio no cumple con los requisitos.",
    };
  }
  if (!validateDate(dateEnd, true)) {
    return {
      error: true,
      message: "la fecha de fin no cumple con los requisitos.",
    };
  }
  return result;
};
