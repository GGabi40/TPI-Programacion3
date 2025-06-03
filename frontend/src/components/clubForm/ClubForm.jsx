import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import logo from "../../assets/img/logo/Logo-InkLink.webp";
import { errorToast, successToast } from "../toast/NotificationToast";

const ClubForm = ({ mode = "create", initialData = {}, onSubmit }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [gender, setGender] = useState("");
  const [interest, setInterest] = useState("");
  const [restricted, setRestricted] = useState(false);
  const [color, setColor] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setName(initialData.name || "");
      setDescription(initialData.description || "");
      setGender(initialData.gender || "");
      setInterest(initialData.interest || "");
      setRestricted(initialData.restricted || false);
      setColor(initialData.color || "");
    }
  }, [initialData, mode]);

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!name.trim() || name.length <= 3 ) {
      newErrors.name = "El nombre no cumple con los requisitos.";
      errorToast("El nombre no cumple con los requisitos.");
      valid = false;
    }

    if (!description.trim() || description.length <= 5 || description.length >= 200) {
      newErrors.description = "La descripción no cumple con los requisitos.";
      errorToast("La descripción no cumple con los requisitos.");
      valid = false;
    }

    if (!gender) {
      newErrors.gender = "Seleccione un género.";
      errorToast("Seleccione un género.");
      valid = false;
    }

    if (!interest.trim()) {
      newErrors.interest = "Debe indicar al menos un interés.";
      errorToast("Debe indicar al menos un interés.");
      valid = false;
    }

    if (!color) {
      newErrors.color = "Debe seleccionar un color.";
      errorToast("Debe seleccionar un color.");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const clubData = {
      name,
      description,
      gender,
      interest,
      restricted,
      color,
      isActive: true,
    };

    onSubmit(clubData);
    if (mode === "create") {
      successToast("Club creado correctamente.");
    } else if (mode === "edit") {
      successToast("Club actualizado correctamente.");
    }
  };

  const colorOptions = [
    {
      value: "blue",
      gradient: "linear-gradient(45deg, blue, rgb(141, 226, 255))",
    },
    {
      value: "purple",
      gradient: "linear-gradient(45deg, rgb(146, 30, 90), rgb(87, 52, 120))",
    },
    {
      value: "red",
      gradient: "linear-gradient(45deg, red, rgb(255, 86, 128))",
    },
    {
      value: "green",
      gradient: "linear-gradient(45deg, rgb(8, 66, 8), rgb(98, 183, 98))",
    },
    {
      value: "acqua",
      gradient: "linear-gradient(45deg, rgb(22, 112, 133), rgb(58, 198, 216))",
    },
    {
      value: "violet",
      gradient: "linear-gradient(45deg, rgb(147, 74, 147), rgb(85, 4, 125))",
    },
  ];

  return (
    <div>
      <LeftNav />
      <div className="background-animated">
        <div className="light-orb"></div>
      </div>

      <div className="space"></div>

      <div className="form-container">
        <div className="logo-form">
          <img src={logo} alt="Logo Inklink" />
        </div>

        <h2 className="text-align title-form">
          {mode === "edit" ? "ACTUALIZAR CLUB" : "CREAR UN NUEVO CLUB"}
        </h2>
        <br />

        <form onSubmit={handleSubmit}>
          <label>Nombre del Club:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Club de ..."
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={200}
            placeholder="Este club es sobre..."
          />
          {errors.description && <p className="error">{errors.description}</p>}

          <label>Género:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="select-gender"
          >
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
          {errors.gender && <p className="error">{errors.gender}</p>}


          <label>Interés:</label>
          <input
            type="text"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="Vampiros, medieval..."
          />
          {errors.interest && <p className="error">{errors.interest}</p>}


          <label>Seleccione el Color del Club:</label>
          <div className="colorSelector" id="colorSelector">
            {colorOptions.map((opt) => (
              <div
                key={opt.value}
                onClick={() => setColor(opt.value)}
                className={`color-option ${
                  color === opt.value ? "selected" : ""
                }`}
                style={{ background: opt.gradient }}
                title={opt.value}
              ></div>
            ))}
          </div>
          {errors.description && <p className="error">{errors.description}</p>}

          <button type="submit">
            {mode === "edit" ? "Actualizar Club" : "Crear Club"}
          </button>

          <Link to="/joined-clubs" className="link-button secondary margin text-align">
              Cancelar
          </Link>
        </form>
      </div>

      <div className="space"></div>

      <FooterSmall />
    </div>
  );
};

export default ClubForm;
