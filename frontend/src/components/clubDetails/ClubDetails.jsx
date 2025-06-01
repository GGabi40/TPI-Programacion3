import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import LeftNav from "../nav/LeftNav";
import logo from '../../assets/img/logo/Logo-InkLink.webp';
import NotFound from "../error/notFound/NotFound";
import { useFetch } from "../hook/useFetch";
import Activities from "./activities/Activities";
import Loading from "../error/loading/Loading";
import JoinClubButton from "./JoinClubButton";
import { AuthenticationContext } from "../services/auth.context";

import './clubDetails.css';

const ClubDetails = () => {
    const { getById, isLoading } = useFetch("/clubs");
    const { id } = useParams();
    const navigate = useNavigate();
    const [club, setClub] = useState(null);
    const { userId } = useContext(AuthenticationContext);


    useEffect(() => {
        //trae los detalles del club
        const fetchClub = async () => {
            const clubData = await getById(id)
            setClub(clubData)
        }
        fetchClub();
    }, [id]);

    if (isLoading) return <Loading />

    if (!club) return <NotFound />;

    const { name, description, gender, interest, restricted } = club;

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

                <section >
                    <h2 id="detalleClub" className="text-align">
                        {name}
                    </h2>
                    <br />
                    <div className="details-container">
                        <p><strong>Descripción:</strong> {description}</p>
                        <br />
                        <p><strong>Género:</strong> {gender}</p>
                        <br />
                        <p><strong>Interés:</strong> {interest}</p>
                        <br />
                        <p><strong>Restricción de Edad:</strong> {club.restricted ? "Sí" : "No"}</p>
                        <br />
                    </div>

                    <div className="button-separate">
                        <JoinClubButton userId={userId} clubId={id} />
                        <button onClick={() => navigate("/joined-clubs")}>Volver a Clubs</button>
                    </div>



                    <Activities clubId={id} />
                </section>
            </main>
        </div >
    );
};

export default ClubDetails;
