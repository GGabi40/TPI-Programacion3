import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import ClubList from "../clubList/ClubList";
import Search from "../search/Search";
import Loading from "../error/loading/Loading";
import nadaAquiImage from "../../assets/img/error-img/nada-aqui.webp";
import { useFetch } from "../hook/useFetch";

import { AuthenticationContext } from "../services/auth.context";

const JoinedClubs = () => {
  const { getAll, isLoading } = useFetch("/clubs");
  const { token, userId } = useContext(AuthenticationContext);
  const { getById } = useFetch("/users");
  const [allClubs, setAllClubs] = useState([]);
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate("/new-club");
  };

  useEffect(() => {
    window.scrollTo(0, 0); // vuelve al top de la pagina

    const fetchData = async () => {
      const clubs = await getAll();

      if (clubs) {
        setAllClubs(clubs);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const userData = await getById(userId, token);
        setUser(userData);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  if (isLoading) return <Loading />;

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
            <ClubList
              clubs={allClubs}
              title="Mis Clubes"
              showButtons={user.role.includes('admin')}
              setAllClubs={setAllClubs}
              allClubs={allClubs}
            />
          ) : (
            <div className="nada-aqui-container">
              <h2 className="text-align">No hay nada aquí...</h2>
              <img
                src={nadaAquiImage}
                alt="imagen de un gatito corriendo una lana"
                className="img-nada-aqui"
              />
            </div>
          )}

          {user.role !== 'user' ? (
            <>
              <button
                className="cssbuttons-io-button"
                onClick={handleClickCreate}
              >
                <FontAwesomeIcon icon={faPlus} id="btn-plus" />
                <span>Club</span>
              </button>
            </>
          ) : (
            ""
          )}

          <div className="break"></div>
        </div>
      </div>
      <FooterSmall />
    </>
  );
};

export default JoinedClubs;
