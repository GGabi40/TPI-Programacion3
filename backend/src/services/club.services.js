import { Club } from "../models/Club.js";
import { validateString } from "../helper/validations.js";

//logica del negocio
//GET
export const getAllClubs = async (req, res) => {
    const clubs = await Club.findAll();

    if (!clubs || clubs.length === 0) {
        return res.status(404).send({ message: "No se encontraron clubs!" });
    }
    
    res.json(clubs);
}

export const getClubById = async (req, res) => {
    const { id } = req.params;

    const clubById = await Club.findByPk(id);
    if (!clubById) {
        return res.status(404).send({ message: "No se encontro un club!" });
    }
    res.json(clubById);
}

//POST
export const createNewClub = async (req, res) => {
    const result = validateClubData(req.body);
    if (result.error) {
        return res.status(400).json({ message: result.message });
    }

    const { name, description, restricted, interest, gender, color, isActive } = req.body;

    const newClub = await Club.create({ name, description, restricted, interest, gender, color, isActive });
    res.json(newClub);
}


//PUT-UPDATE(ES LO MISMO)
export const updateClub = async (req, res) => {
    const result = validateClubData(req.body);
    
    if (result.error) {
        return res.status(400).json({ message: result.message });
    }
    
    const { name, description, restricted, interest, gender, color, isActive } = req.body;

    const { id } = req.params;
    const club = await Club.findByPk(id);

    if (!club) {
        return res.status(404).send({ message: "No se encontro un club!" });
    }
    try {
        await club.update({ name, description, restricted, interest, gender, color, isActive });
        res.json(club);
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send({ message: "Algo fallo!" });
    }

}


//DELETE
export const deleteClub = async (req, res) => {
    const { id } = req.params;
    const club = await Club.findByPk(id);

    if (!club) {
        return res.status(404).send({ message: "No se encontro un club!" });
    }
    try {
        await club.destroy();
        res.send("Club fue eliminado!!")
    } catch (error) {
        console.error("Error: ", error);
        return res.status(500).send({ message: "Algo fallo!" });
    }
}

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
            message: "el nombre no cumple los requisitos."
        };
    }
    if (!description || !validateString(description, 10, 200)) {
        return {
            error: true,
            message: "la descripcion no cumple los requisitos."
        };
    }
    if (!interest || !validateString(interest, 5, 100)) {
        return {
            error: true,
            message: "los intereses no cumple los requisitos."
        };
    }
    if (!gender || !validateString(gender, 1, 100)) {
        return {
            error: true,
            message: "el genero no cumple los requisitos."
        };
    }
    if (!color || !validateString(color, 1, 10)) {
        return {
            error: true,
            message: "el color no cumple los requisitos."
        };
    }
    return result;
};
