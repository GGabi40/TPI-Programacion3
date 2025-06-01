import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LeftNav from "../nav/LeftNav";
import logo from '../../assets/img/logo/Logo-InkLink.webp';
import NotFound from "../error/notFound/NotFound";
import { useFetch } from "../hook/useFetch";
import Activities from "./activities/Activities";
import Loading from "../error/loading/Loading";

import './clubDetails.css';

const ClubDetails = () => {
    const { getById, isLoading } = useFetch("/clubs");
    const { id } = useParams();
    const navigate = useNavigate();
    const [club, setClub] = useState(null);

    const handleClickJoin = () => {
        navigate("/mis-clubes");
    }

    useEffect(() => {
        //trae los detalles del club
        const fetchClub = async () => {
            const clubData = await getById(id)
            setClub(clubData)
        }
        fetchClub();
    }, [id]);


    if(isLoading) return <Loading />

    if (!club) return <NotFound />;

    const { name, description, gender, interest, restriction } = club;

    // Agg botón para unirse al Club
    return (
        <div>
            <LeftNav />
            <main className="club-details-container">
                <section className="club-header">
                    <div className="logo-wrapper">
                        <img src={logo} alt="Logo Inklink" />
                    </div>
                    <h2 className="club-title">{name}</h2>
                    <button className="btn-join" onClick={handleClickJoin}>Unirse al Club</button>
                    <button className="btn-back" onClick={() => navigate("/dashboard")}>Volver a Clubs</button>
                </section>

                <section className="club-info">
                    <p><strong>Descripción:</strong> {description}</p>
                    <p><strong>Género:</strong> {gender}</p>
                    <p><strong>Interés:</strong> {interest}</p>
                    <p><strong>Restricción de Edad:</strong> {restriction ? "Sí" : "No"}</p>
                </section>

                <section className="club-activities">
                    <Activities clubId={id} />
                </section>
            </main>
        </div>
    );
};

export default ClubDetails;
