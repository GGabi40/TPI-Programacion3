import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LeftNav from "../nav/LeftNav";
import logo from '../../assets/img/logo/Logo-InkLink.webp';
import NotFound from "../error/notFound/NotFound";

const ClubDetails = () => {
    const { id } = useParams(); // más sencillo que useLocation
    const navigate = useNavigate();
    const [club, setClub] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
       fetch(`/api/clubs/${id}`)
        .then((res) => res.ok ? res.json() : Promise.reject())
        .then((data) => setClub(data))
        .catch(() => setClub(null));
    }, [id]);

    useEffect(() => {
        fetch(`/api/reviews?activityId=${id}`)
            .then((res) => res.ok ? res.json() : Promise.reject())
            .then((data) => setReviews(data))
            .catch((err) => {
                console.error("Error al obtener reseñas: ", err);
                setReviews([]);
            });
    }, [id]);

    if(!club) {
        return <NotFound />;
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

                <div className="reviews-container">
                    <h3>Reseñas</h3>
                    {reviews.length === 0 ? (
                        <p>No hay reseñas aún.</p>
                    ) : (
                        <ul>
                            {reviews.map((r) => (
                                <li key={r.id}>
                                    <p><strong>Usuario ID:</strong> {r.userId}</p>
                                    <p>{r.content}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <button onClick={() => navigate("/clubes")}>Volver a Clubs</button>
            </div>
        </div>
    );
};

export default ClubDetails;
