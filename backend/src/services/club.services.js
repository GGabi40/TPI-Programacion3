import { Club } from "../models/Club.js";

//logica del negocio
//GET
export const getAllClubs = async(req, res) => {
    const clubs = await Club.findAll();
    if (!clubs){
        return res.status(404).send({message:"No se encontraron clubs!"});
    }
    res.json(clubs);
}

export const getClubById = async(req, res) => {
    const {id} = req.params;

    const clubById = await Club.findByPk(id);
    if (!clubById){
        return res.status(404).send({message:"No se encontro un club!"});
    }
    res.json(clubById);
}

//POST
export const createNewClub = async(req, res) => {
    const {name,description,restricted,interest,gender,isActive,activityId} = req.body;

    if (!name || !description || !interest || !gender || !activityId) {
        return res.status(400).send({message:"Los campos son requeridos!"});
    }
    const newClub = await Club.create({name,description,restricted,interest,gender,isActive,activityId});
    res.json(newClub);
}

//PUT-UPDATE(ES LO MISMO)
export const updateClub = async(req, res) => {
    const {name,description,restricted,interest,gender,isActive,activityId} = req.body;

    const {id} = req.params;
    const club = await Club.findByPk(id);

    if (!club){
        return res.status(404).send({message:"No se encontro un club!"});
    }
    try {
        await club.update({name,description,restricted,interest,gender,isActive,activityId});
        res.json(club); 
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send({message:"Algo fallo!"});
    }
    
}


//DELETE
export const deleteClub = async(req, res) => {
    const {id} = req.params;
    const club = await Club.findByPk(id);

    if (!club){
        return res.status(404).send({message:"No se encontro un club!"});
    }
    try {
        await club.destroy();
        res.send("Club fue eliminado!!") 
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send({message:"Algo fallo!"});
    }
}

