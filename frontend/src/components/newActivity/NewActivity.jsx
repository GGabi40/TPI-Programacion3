import React from 'react';

import LeftNav from '../nav/LeftNav';
import { useState } from "react";
import { useNavigate } from "react-router";
import FooterSmall from '../footer/FooterSmall';

import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link } from "react-router";

const NewActivity = () => {

    const navigate = useNavigate();

    const [nameBook, setNameBook] = useState("");
    const [progress, setProgress] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");

    const handleNameBookChange = (e) => {
        setNameBook(e.target.value);
    };

    const handleProgressChange = (event) => {
        setProgress(event.target.value);
    };

    const handleFechaInicioChange = (event) => {
        setFechaInicio(event.target.value);
    };

    const handleFechaFinChange = (event) => {
        setFechaFin(event.target.value);
    };

    const handleAddActivity = async (e) => {
        e.preventDefault();

        const ActivityData = {
            nameBook,
            progress,
            fechaInicio,
            fechaFin
        };

        try {
            const res = await fetch("http://localhost:3000/activities", {
                method: "POST",
                headers: { "Context-Type": "application/json" },
                body: JSON.stringify(NewActivity)
            });
            
            if (!res.ok) throw new Error("Fallo crear nueva actividad!!");

            const newActivity = await res.json();
            onActivityAdded(newActivity);
            setNameBook("");
            setProgress("");
            setFechaInicio("");
            setFechaFin("");
        } catch (error) {
            console.error(error);
        }
        
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

                <h2 id="crearNuevaActividad" className="text-align">
                    CREE UNA NUEVA ACTIVIDAD
                </h2>
                <br />
                <form>
                    <label>Ingrese el Nombre del Libro Actual:</label>
                    <input type="text" id="nameBook" placeholder="Ej: El Nombre del Viento" />

                    <label>Ingrese el Sistema de Progreso:</label>
                    <select name="progress" id="progress">
                        <option value="">Seleccione una opción</option>
                        <option value="sincronica">Forma Sincrónica</option>
                        <option value="asincronica">Forma Asincrónica</option>
                    </select>

                    <label type="date" id="fechaInicio" value={fechaInicio} onChange={handleChange}>Fecha Inicio:</label>

                    <label type="date" id="fechaFin" value={fechaFin} onChange={handleChange}>Fecha Fin:</label>

                    <button type="submit">Crear Actividad</button>
                </form>
            </div>

            <FooterSmall />
        </div>
    )
}

export default NewActivity
