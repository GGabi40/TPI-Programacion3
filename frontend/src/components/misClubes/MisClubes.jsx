import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import ClubList from "../clubList/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Search from "../search/Search";
import { useFetch } from "../hook/useFetch";
import Loading from "../error/loading/Loading";
import nadaAquiImage from "../../assets/img/error-img/nada-aqui.webp"



const MisClubes = () => {
  const [allClubs, setAllClubs] = useState([]);
  const navigate = useNavigate();
  const { getAll, isLoading } = useFetch("/clubs");

  const handleClickCreate = () => {
    navigate("/newclub");
  };


  useEffect(() => {
    window.scrollTo(0, 0); // vuelve al top de la pagina

    const fetchData = async () => {
      const clubs = await getAll();

      console.log("Armando componente ", isLoading);

      if (clubs) {
        setAllClubs(clubs);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  if (isLoading) return <Loading />

  return (
    <>
      <LeftNav />
      <Search
        onSearch={handleSearch}
        placeholder="Buscar..."
        showButton={true}
      />

      <div className="hero-container">
        <div className="hero-club">
          {allClubs.length > 0 ? (
            <ClubList clubs={allClubs} title="Mis Clubes" showButtons={true} setAllClubs={setAllClubs} allClubs={allClubs} />
          ) : (
            <div className="nada-aqui-container">
              <h2 className="text-align">No hay nada aquí...</h2>
              <img 
                src={nadaAquiImage} 
                alt="imagen de un gatito corriendo una lana" 
                className="img-nada-aqui" 
              />
            </div>
          )
          }

          <button className="cssbuttons-io-button" onClick={handleClickCreate}>
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
