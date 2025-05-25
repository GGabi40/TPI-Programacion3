import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import ClubList from "../clubList/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/Search";
import { useFetch } from "../hook/useFetch";

const {getAll} = useFetch("/clubs");

const MisClubes = () => {

  const [allClubs, setAllClubs] = useState([]);
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate("/newclub");
  }

  useEffect(() => {
    const fetchData = async () => {
      const clubs = await getAll();
      setAllClubs(clubs);
    };
    fetchData();
  }, [allClubs]);

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
          <ClubList clubs={allClubs} title="Mis Clubes" showButtons={true} />

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
