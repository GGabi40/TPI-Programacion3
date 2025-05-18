import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import LeftNav from '../nav/LeftNav';
import Search from '../search/Search';
import FooterSmall from '../footer/FooterSmall'
import ClubList from "../clubList/ClubList";

const MisClubes = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/modifyclub");
  };

  const misClubes = [
    {
      name: "Club de Misterio",
      description: "Lectura de novelas de misterio y suspenso.",
      progress: "asincronica",
      gender: "misterio",
      interest: "Sherlock Holmes, Agatha Christie",
      privacy: false,
      restriction: false,
      color: "violet",
    },
    {
      name: "Club de Romance",
      description: "Historias de amor y drama.",
      progress: "sincronica",
      gender: "romance",
      interest: "Jane Austen, Nicholas Sparks",
      privacy: true,
      restriction: false,
      color: "red",
    },
  ];

  return (
    <>
      <LeftNav />
      <div className="hero-container">
        <div className="hero-club">

          {/*probando aca decia hero-container */}
          <Search onSearch={(valor) => console.log("Buscando:", valor)} />

          <ClubList clubs={misClubes} title='Mis Clubes' showButtons={true} />
          
          {/* Cambiar boton + */}
          <button id="btn-add" type="submit" className="agregar-clubs">
            <b>+</b>
          </button>
          <div className="break"></div>
        </div>
      </div>
      <FooterSmall /> 
    </>
  );
};

export default MisClubes;
