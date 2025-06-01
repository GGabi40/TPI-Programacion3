import React from 'react'
import { useNavigate } from 'react-router'
import { useFetch } from '../hook/useFetch'
import { successToast, errorToast } from '../toast/NotificationToast'

const JoinClubButton = ({ userId, clubId }) => {
    const { post } = useFetch("/users");
    const navigate = useNavigate();

    const handleClickJoin = async () => {
        try {
            const response = await post(`/${userId}/clubs/${clubId}`);
            console.log("Respuesta del backend:", response);

            if (response?.message) {
                successToast(response.message);
            } else {
                successToast("¡Te uniste a este club correctamente!");
                setTimeout(() => navigate("/joined-clubs"), 1500);
            }
            
        } catch (error) {
            console.error("Error al unirse al club:", error);
            errorToast("Hubo un problema al unirse al club.")
        }
    };

    return (
        <div className="button-separate">
            <button type="submit" className="btn-card" onClick={handleClickJoin}>
                Unirse!
            </button>
        </div>
    )
}

export default JoinClubButton
