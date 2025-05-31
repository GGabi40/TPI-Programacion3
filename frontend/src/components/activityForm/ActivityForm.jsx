import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { errorToast, successToast } from "../toast/NotificationToast";

const ActivityForm = ({ mode = "create", initialData = {}, onSubmit }) => {
    const navigate = useNavigate();

    const [nameBook, setNameBook] = useState("");
    const [progress, setProgress] = useState("");
    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(() => {
        if (mode === "edit" && initialData){
            setNameBook(initialData.nameBook || "");
            setProgress(initialData.progress || "");
            setDateStart(initialData.dateStart || "");
            setDateEnd(initialData.setDateEnd || "");
        }
    }, [initialData, mode]);

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!nameBook) {
            newErrors.nameBook = "Seleccione un libro para la actividad";
            errorToast("Seleccione un libro para la actividad");
            valid = false;
        }

        if (!progress) {
            newErrors.progress = "Seleccione una opcion de progreso.";
            errorToast("Seleccione una opcion de progreso.");
            valid = false;
        }

        if (!dateStart) {
            newErrors.dateStart = "Debes colocar una fecha de inicio.";
            errorToast("Debes colocar una fecha de inicio.");
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const activityData = {
            nameBook,
            progress,
            fechaInicio: dateStart,
            fechaFin: dateEnd,
            isActive: true,
        };

        onSubmit(activityData);
        if (mode === "create") {
            successToast("Actividad creada correctamente.");
        } else if (mode === "edit") {
            successToast("Actividad actualizada correctamente.");
        }
    };

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

                <h2 className="text-align title-form">
                    {mode === "edit" ? "ACTUALIZAR ACTIVIDAD" : "CREE UNA NUEVA ACTIVIDAD"}
                </h2>
                <br />
                <form onSubmit={handleSubmit}>
                    {/* Agg lo del buscador para conectar la base de datos de libros con la actividad*/}
                    <label>Ingrese el Nombre del Libro Actual:</label>
                    <input type="text" name="nameBook" placeholder="Ej: El Nombre del Viento" />
                    {errors.nameBook && <p className="error">{errors.nameBook}</p>}

                    <label>Ingrese el Sistema de Progreso:</label>
                    <select name="progress" id="progress">
                        <option value="">Seleccione una opción</option>
                        <option value="sincronica">Forma Sincrónica</option>
                        <option value="asincronica">Forma Asincrónica</option>
                    </select>
                    {errors.progress && <p className="error">{errors.progress}</p> }

                    <label name="fechaInicio" >Fecha Inicio:</label>
                    <input type="date" value={fechaInicio} onChange={handleFechaInicioChange} />
                    {errors.dateStart && <p className="error"
                    >{errors.dateStart}</p> }

                    <label name="fechaFin">Fecha Fin:</label>
                    <input type="date" value={fechaFin} onChange={handleFechaFinChange} />
                    {errors.dateEnd && <p className="error"
                    >{errors.dateEnd}</p> }

                    <button type="submit">
                        {mode === "edit" ? "Actualizar Actividad" : "Crear Actividad"}
                    </button>
                </form>
            </div>

            <FooterSmall />
        </div>
    )
}

export default ActivityForm;