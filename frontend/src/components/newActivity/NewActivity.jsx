import React from 'react';

import LeftNav from '../nav/LeftNav';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import FooterSmall from '../footer/FooterSmall';

import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link } from "react-router";
import { useFetch } from '../hook/useFetch';



const NewActivity = () => {
    const { post } = useFetch("/activities");

    const navigate = useNavigate();
    const [newActivity, setNewActivity] = useState("");
    const [allActivities, setAllActivities] = useState([]);

    const handleSubmit = async (data) => {
        const response = await post(data);
        console.log(response);
        const activities = await getAll();
        setAllActivities(activities);
        setNewActivity({
            name: "",
            progress: "",
            dateStart: "",
            dateEnd: ""
        });
    }
    return (
        <div>
            <LeftNav />

            <div className="background-animated">
                <div className="light-orb"></div>
            </div>
            <div className="form-container margin">
                <div className="logo-form">
                    <img src={logo} alt="Logo Inklink" />
                </div>

                <h2 id="crearNuevaActividad" className="text-align title-form">
                    CREE UNA NUEVA ACTIVIDAD
                </h2>
                <br />
                <form>
                    <label>Ingrese el Nombre del Libro Actual:</label>
                    <input type="text" name="nameBook" placeholder="Ej: El Nombre del Viento" />

                    <label>Ingrese el Sistema de Progreso:</label>
                    <select name="progress" id="progress">
                        <option value="">Seleccione una opción</option>
                        <option value="sincronica">Forma Sincrónica</option>
                        <option value="asincronica">Forma Asincrónica</option>
                    </select>

                    <label name="fechaInicio" >Fecha Inicio:</label>
                    <input type="date" value={fechaInicio} onChange={handleFechaInicioChange} />

                    <label name="fechaFin">Fecha Fin:</label>
                    <input type="date" value={fechaFin} onChange={handleFechaFinChange} />

                    <button type="submit" onSubmit={handleSubmit} >Crear Actividad</button>
                </form>
            </div>

            <FooterSmall />
        </div>
    )
}

export default NewActivity
