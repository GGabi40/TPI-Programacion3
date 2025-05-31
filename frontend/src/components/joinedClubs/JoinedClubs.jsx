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
import JoinedClubsAdmin from "./JoinedClubsAdmin";

import { AuthenticationContext } from "../services/auth.context";

const JoinedClubs = () => {
  const { userId, token } = useContext(AuthenticationContext);
  const { getAll, isLoading } = useFetch(`/clubs/user/${userId}`);
  const [usersClubs, setUsersClubs] = useState([]);
  const { getById } = useFetch("/users");
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      if (userId) {
        const userData = await getById(userId, token);
        setUser(userData);
      }
    };

    fetchUser();
  }, [userId]);
  
  useEffect(() => {
    window.scrollTo(0, 0); // vuelve al top de la pagina

    const fetchData = async () => {
      if (!userId) return;

      const uClubs = await getAll();
      if (uClubs) {
        setUsersClubs(uClubs);
      }
    };
    fetchData();
  }, [userId]);

  

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  if (isLoading) return <Loading />;

  return (
    <>
      {user.role.includes("admin") ? (
        <JoinedClubsAdmin />
      ) : (
        <>
          <LeftNav />
          <Search
            onSearch={handleSearch}
            placeholder="Buscar..."
            showButton={true}
          />

          <div className="hero-container">
            <div className="hero-club">
              {usersClubs.length > 0 ? (
                <ClubList
                  clubs={usersClubs}
                  title="Mis Clubes"
                  showButtons={user.role.includes("admin")}
                  setAllClubs={usersClubs}
                  allClubs={usersClubs}
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

              <div className="break"></div>
            </div>
          </div>
          <FooterSmall />
        </>
      )}
    </>
  );
};

export default JoinedClubs;
