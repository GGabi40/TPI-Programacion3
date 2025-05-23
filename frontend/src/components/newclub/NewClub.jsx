import React from "react";

import LeftNav from '../nav/LeftNav';
import { useState } from "react";
import { useNavigate } from "react-router";
import FooterSmall from '../footer/FooterSmall';

import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { Link } from "react-router";

const NewClub = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [progress, setProgress] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [restriction, setRestriction] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleProgressChange = (event) => {
    setProgress(event.target.value);
  }

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  }

  const handlePrivacyChange = (event) => {
    setPrivacy(event.target.value);
  }

  const handleRestrictionChange = (event) => {
    setRestriction(event.target.value);
  }

  const handleAddClub = async (e) => {
    e.preventDefault();

    const clubData = {
      name,
      description,
      progress,
      gender,
      interest,
      privacy,
      restriction
    };

    try {
      const res = await fetch("http://localhost:3000/clubs", {
        method: "POST",
        headers: { "Context-Type": "application/json" },
        body: JSON.stringify(NewClub)
      });

      if (!res.ok) throw new Error("Falló crear nuevo club");

      const newClub = await res.json();
      onClubAdded(newClub);
      setName("");
      setDescription("");
      setProgress("");
      setGender("");
      setInterest("");
      setPrivacy("");
      setRestriction("");
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

        <h2 id="crearNuevoClub" className="text-align">
          CREE UN NUEVO CLUB
        </h2>
        <br />
        <form>
          <label>Ingrese el Nombre del Club:</label>
          <input type="text" id="name" placeholder="Ej: Club de Ficción" />

          <label>Ingrese la Descripción:</label>
          <input type="textarea" id="description" placeholder='Ingrese una breve descripcion' max={200} />

          <label>Ingrese el Género:</label>
          <select name="gender" id="gender">
            <option value="">Seleccione una opción</option>
            <option value="fantasia">Fantasía</option>
            <option value="romance">Romance</option>
            <option value="ficcion">Ficción</option>
            <option value="cienciaficcion">Ciencia Ficcion</option>
            <option value="misterio">Misterio</option>
            <option value="terror">Terror</option>
            <option value="noficcion">No Ficción</option>
            <option value="litjuvenil">Literatura Juvenil</option>
            <option value="policial">Policial</option>
            <option value="otro">Otro</option>
          </select>

          <label>Ingrese su Interés:</label>
          <input type="textarea" id="interest" placeholder="Autor / Vampiros / etc" />

          <label>Privacidad del Club:</label>
          <input type="checkbox" id="privacy" name='privacy' />

          <label>Restricción de Edad:</label>
          <input type="checkbox" id="restriction" name='restriction' />

          <button type="submit">Crear Club</button>


        </form>
      </div>

      <FooterSmall />

    </div>
  )
}

export default NewClub




