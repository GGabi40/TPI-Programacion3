import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import ReviewList from "./Reviews/ReviewList";
import ReviewForm from "./Reviews/ReviewForm";
import LeftNav from "../nav/LeftNav";
import logo from '../../assets/img/logo/Logo-InkLink.webp';
import NotFound from "../error/notFound/NotFound";

const ClubDetails = ({ userId }) => {
    const { id } = useParams(); // más sencillo que useLocation
    const navigate = useNavigate();
    const [club, setClub] = useState(null);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        //trae los detalles del club
       fetch(`/api/clubs/${id}`)
        .then((res) => res.json())
        .then((data) => setClub(data))
        .catch(() => setClub(null));

        //trae las actividades
        fetch(`/api/clubs/${id}/activities`)
            .then((res) => res.json())
            .then((data) => setActivities(data))
            .catch(() => setActivities([]));
    }, [id]);

    if(!club) {
        return <NotFound />;
    }

    const { name, description, progress, gender, interest, privacy, restriction } = club;

    // Agg botón para unirse al Club
    return (
        <div>
            <LeftNav />
            <div className="form-container margin">
                <div className="logo-form">
                    <img src={logo} alt="Logo Inklink" />
                </div>

                <h2 id="detalleClub" className="text-align">
                    DETALLES DEL CLUB {id}
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

                {activities.map((activity) => (
                    <div key={activity.id} className="mt-4">
                        <h4>ACtividad: {activity.name}</h4>
                        <ReviewList activityId={activity.id} userId={userId}/>
                        <ReviewForm activityId={activity.id} userId={userId}/>
                    </div>
                ))}

                <button onClick={() => navigate("/clubes")}>Volver a Clubs</button>
            </div>
        </div>
    );
};

export default ClubDetails;
