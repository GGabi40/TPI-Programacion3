import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import ReviewList from "./Reviews/ReviewList";
import ReviewForm from "./Reviews/ReviewForm";
import LeftNav from "../nav/LeftNav";
import logo from '../../assets/img/logo/Logo-InkLink.webp';
import NotFound from "../error/notFound/NotFound";
import { useFetch } from "../hook/useFetch";
import Activities from "./activities/Activities";
import Loading from "../error/loading/Loading";

const ClubDetails = () => {
    const { getById, isLoading } = useFetch("/clubs");
    const { id } = useParams(); // más sencillo que useLocation
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
            <div className="profile-container margin">
                <div className="profile-card">
                    <div className="logo-form">
                        <img src={logo} alt="Logo Inklink" />
                    </div>

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
                        <p><strong>Restricción de Edad:</strong> {restriction ? "Sí" : "No"}</p>
                        <br />
                    </div>

                    <div className="button-separate">
                        <button type="submit" className="btn-card" onClick={handleClickJoin}>Unirse!</button>
                        <button onClick={() => navigate("/dashboard")}>Volver a Clubs</button>
                    </div>
                    
                    <Activities clubId={id} />
                </div>
            </div>
        </div>
    );
};

export default ClubDetails;
