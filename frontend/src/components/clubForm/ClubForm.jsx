import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import logo from "../../assets/img/logo/Logo-InkLink.webp";


const ClubForm = ({ mode = "create", initialData = {}, onSubmit }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState("");
  const [restriction, setRestriction] = useState(false);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setGender(initialData.gender || "");
      setInterest(initialData.interest || "");
      setRestriction(initialData.restriction || false);
      setColor(initialData.color || "");
    }
  }, [initialData, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const clubData = {
      name,
      description,
      gender,
      interest,
      restricted:restriction,
      color,
      isActive:true
    };

    onSubmit(clubData); 
  };

  const colorOptions = [
    { value: "blue", gradient: "linear-gradient(45deg, blue, rgb(141, 226, 255))" },
    { value: "purple", gradient: "linear-gradient(45deg, rgb(146, 30, 90), rgb(87, 52, 120))" },
    { value: "red", gradient: "linear-gradient(45deg, red, rgb(255, 86, 128))" },
    { value: "green", gradient: "linear-gradient(45deg, rgb(8, 66, 8), rgb(98, 183, 98))" },
    { value: "acqua", gradient: "linear-gradient(45deg, rgb(22, 112, 133), rgb(58, 198, 216))" },
    { value: "violet", gradient: "linear-gradient(45deg, rgb(147, 74, 147), rgb(85, 4, 125))" },
  ];

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
          {mode === "edit" ? "ACTUALIZAR CLUB" : "CREE UN NUEVO CLUB"}
        </h2>
        <br />

        <form onSubmit={handleSubmit}>
          <label>Nombre del Club:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <label>Descripción:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} maxLength={200} />

          <label>Género:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Seleccione una opción</option>
            <option value="fantasia">Fantasía</option>
            <option value="romance">Romance</option>
            <option value="ficcion">Ficción</option>
            <option value="cienciaficcion">Ciencia Ficción</option>
            <option value="misterio">Misterio</option>
            <option value="terror">Terror</option>
            <option value="noficcion">No Ficción</option>
            <option value="litjuvenil">Literatura Juvenil</option>
            <option value="policial">Policial</option>
            <option value="otro">Otro</option>
          </select>

          <label>Interés:</label>
          <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} />

          <label>Seleccione el Color del Club:</label>
          <div className="colorSelector" id="colorSelector">
            {colorOptions.map(opt => (
              <div
                key={opt.value}
                onClick={() => setColor(opt.value)}
                className={`color-option ${color === opt.value ? "selected" : ""}`}
                style={{ background: opt.gradient }}
                title={opt.value}
              ></div>
            ))}
          </div>

          <label>Restricción de Edad:</label>
          <input type="checkbox" checked={restriction} onChange={(e) => setRestriction(e.target.checked)} />

          <button type="submit">{mode === "edit" ? "Actualizar Club" : "Crear Club"}</button>
        </form>
      </div>

      <FooterSmall />
    </div>
  );
};

export default ClubForm;