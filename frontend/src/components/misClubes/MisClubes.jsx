import React from "react";
import { useNavigate } from "react-router";

import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import ClubList from "../clubList/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/Search";

const MisClubes = () => {

  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate("/newclub");
  }

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

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  return (
    <>
      <LeftNav />
      <Search 
          onSearch={handleSearch} 
          placeholder='Buscar...' 
          showButton={true} 
      />

      <div className="hero-container">
        <div className="hero-club">
          <ClubList clubs={misClubes} title="Mis Clubes" showButtons={true} />

          <button class="cssbuttons-io-button" onClick={handleClickCreate}>
            <FontAwesomeIcon icon={faPlus} id="btn-plus" />
            <span>Club</span>
          </button>
          <div className="break"></div>
        </div>
      </div>
      <FooterSmall />
    </>
  );
};

export default MisClubes;
