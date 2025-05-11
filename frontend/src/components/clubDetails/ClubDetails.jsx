import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import LeftNav from "../nav/LeftNav";
import logo from "../../assets/img/logo/Logo-InkLink.webp";

const ClubDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const club = location.state?.club;

    useEffect(() => {
        if(!club) {
            navigate("/clubes");
        }
    }, [club, navigate]);

    if(!club) {
        return null;
    }

    const { name, description, progress, gender, interest, privacy, restriction } = club;

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

                <h2 id="detalleClub" className="text-align">
                    DETALLES DEL CLUB
                </h2>
                <br />
                <div className="details-container">
                    <p><strong>Nombre:</strong> {name}</p>
                    <br />
                    <p><strong>Descripción:</strong> {description}</p>
                    <br />
                    <p><strong>Progreso:</strong> {progress === "sincronica" ? "Sincrónica" : "Asincrónica"}</p>
                    <br />
                    <p><strong>Género:</strong> {gender}</p>
                    <br />
                    <p><strong>Interés:</strong> {interest}</p>
                    <br />
                    <p><strong>Privacidad:</strong> {privacy ? "Privado" : "Público"}</p>
                    <br />
                    <p><strong>Restricción de Edad:</strong> {restriction ? "Sí" : "No"}</p>
                    <br />
                </div>
                <button onClick={() => navigate("/clubes")}>Volver a Clubes</button>
            </div>
        </div>
    );
};

export default ClubDetails;
