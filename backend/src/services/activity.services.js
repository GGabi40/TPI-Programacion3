import { validateDate, validateString } from "../helper/validations.js";
import { Activity } from "../models/Activity.js";
import { Club } from "../models/Club.js";

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

//POST /clubs/:clubId/activities
/* SEGUIR CON ESTO */
export const createNewActivity = async (req, res) => {
  const { clubId } = req.params;
  const { progress, isActive, dateStart, dateEnd, bookId } = req.body;

  try {
    const club = await Club.findByPk(clubId);

    if (!club) {
      res.status(404).json({ message: "No se encontró el club." });
    }

    if (!progress || !bookId || !dateStart) {
      return res.status(400).send({ message: "Los campos son requeridos!" });
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
    console.error("Error al crear la actividad:", error);
    res.status(500).json({ message: "Error al crear la actividad.", error });
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
