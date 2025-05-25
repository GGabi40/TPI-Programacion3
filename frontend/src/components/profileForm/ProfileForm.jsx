import React, { useState } from "react";
import { useNavigate } from "react-router";
import { successToast, errorToast } from "../toast/NotificationToast";
import { useFetch } from "../hook/UseFetch";
import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import logo from "../../assets/img/logo/Logo-InkLink.webp";

const ProfileForm = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [avatar, setAvatar] = useState("");

    const { put } = useFetch("/profile");
    const navigate = useNavigate();
    const avatarList = [
        "/avatars/avatar1.png",
        "/avatars/avatar2.png",
        "/avatars/avatar3.png",
        "/avatars/avatar4.png",
        "/avatars/avatar5.png",
        "/avatars/avatar6.png",
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!userName || !email || !birthdate) {
        //     //si no carga ningun campo, no pasa nada
        //     return;
        // }

        try {
            successToast("Perfil actualizado correctamente.");
            setTimeout(() => navigate("/mi-perfil"), 1500); // 👈 
        } catch (err) {
            errorToast("Error al actualizar el perfil.");
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
                <div className="form">
                    <h3 className="title-form">Actualizar perfil</h3>
                    <form onSubmit={handleSubmit} className="profile-form">
                        <label>Editar nombre de Usuario:</label>
                        <input
                            type="text"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />

                        <label>Editar Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />


                        <label>Editar Avatar:</label>
                        <div className="avatar-selector">
                            {avatarList.map((avatarPath, index) => (
                                <img
                                    key={index}
                                    src={avatarPath}
                                    alt={`Avatar ${index + 1}`}
                                    onClick={() => setAvatar(avatarPath)}
                                    className={avatar === avatarPath ? "selected" : ""}
                                    style={{
                                        width: "80px",
                                        height: "80px",
                                        cursor: "pointer",
                                        margin: "10px",
                                        border: avatar === avatarPath ? "2px solid blue" : "none",
                                        borderRadius: "10px",
                                    }}
                                />
                            ))}
                        </div>

                        <button type="submit">Actualizar Perfil</button>
                    </form>
                </div>
            </div>
            <FooterSmall />
        </div>
    );
};

export default ProfileForm;
