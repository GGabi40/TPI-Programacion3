import { Activity } from "../models/Activity.js";

//GET
export const getAllActivities = async(req, res) => {
    const activities = await Activity.findAll();
    if (!activities){
        return res.status(404).send({message:"No se encuentran actividades!"});
    }
    res.json(activities);
}

export const getActivityById = async(req, res) => {
    const {id} = req.params;

    const activityById = await Activity.findByPk(id);
    if (!activityById){
        return res.status(404).send({message:"No se encontro ninguna actividad!"});
    }
    res.json(activityById);
}

//POST
export const createNewActivity = async(req, res) => {
    const {progress,isActive,dateStart,dateEnd,reviewId,bookId} = req.body;

    if (!progress || !isActive || !reviewId || !bookId){
        return res.status(400).send({message:"Los campos son requeridos!"});
    }
    const newActivity = await Activity.create({progress,isActive,dateStart,dateEnd,reviewId,bookId});
    res.json(newActivity);
}

//PUT-UPDATE
export const updateActivity = async(req, res) => {
    const {progress,isActive,dateStart,dateEnd,reviewId,bookId} = req.body;

    const {id} = req.params;
    const activity = await Activity.findByPk(id);

    if (!activity){
        return res.status(404).send({message:"No se encontro ninguna actividad!"});
    }
    try {
        await activity.update({progress,isActive,dateStart,dateEnd,reviewId,bookId});
        res.json(activity);
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send({message:"Algo fallo al crear la actividad!"});
    }
}

//DELETE
export const deleteActivity = async(req, res) => {
    const {id} = req.params;
    const activity = await Activity.findByPk(id);

    if (!activity){
        return res.status(404).send({message:"No se encontro ninguna actividad!"});
    }
    try {
        await activity.destroy();
        res.send("La actividad ha sido eliminada!!");
    } catch (error) {
        console.error("Error: ", error);
        returnres.status(500).send({message:"Algo fallo!!!"});
    }
}
