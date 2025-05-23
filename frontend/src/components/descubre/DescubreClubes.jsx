import React from 'react';
import { useNavigate } from "react-router";

import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import Search from "../search/Search";
import ClubList from "../clubList/ClubList";


const Descubre = () => {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/mis-clubes");
    };

    const misClubes = [
    {
      name: "Club de Sherlock Holmes",
      description: "Lectura de novelas de misterio y suspenso.",
      progress: "asincronica",
      gender: "misterio",
      interest: "Sherlock Holmes",
      privacy: false,
      restriction: false,
      color: "violet",
    },
    {
      name: "Club de Romantasy",
      description: "Lectura de novelas de fantasia con mucho romance.",
      progress: "sincronica",
      gender: "fantasia",
      interest: "sagas de libros juveniles",
      privacy: false,
      restriction: false,
      color: "acqua",
    },
    {
      name: "Club de Ciencia Ficción",
      description: "Lectura de novelas de ciencia ficcion.",
      progress: "asincronica",
      gender: "ciencia ficcion",
      interest: "Andy Weir",
      privacy: false,
      restriction: false,
      color: "green",
    },
    {
      name: "Club de Fantasia",
      description: "Historias de fantasia épica.",
      progress: "sincronica",
      gender: "fantasia",
      interest: "Brandon Sanderson, Patrick Rothfuss, George R.R. Martin",
      privacy: true,
      restriction: false,
      color: "purple",
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
          <ClubList clubs={misClubes} title="Descubre" showButtons={false} />

          <div className="break"></div>
        </div>
      </div>
      
      <FooterSmall />
    </>
  );
};

export default Descubre;
