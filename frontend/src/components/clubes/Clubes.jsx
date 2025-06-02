import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import Search from "../search/Search";

import ClubList from "../clubList/ClubList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useFetch } from "../hook/useFetch";
import { AuthenticationContext } from "../services/auth.context";

/* Acá se visualizarán todos los clubes,
utilizando ClubList y CardClub */
const Clubes = ({ clubs }) => {
  const { userId } = useContext(AuthenticationContext);
  const { getAll } = useFetch(`/clubs/user/${userId}`);
  const [usersClubs, setUsersClubs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const uClubs = await getAll();
      if (uClubs) {
        setUsersClubs(uClubs);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero-container">
      <div className="space"></div>

      {/* Club al que está unido usuario */}
      <ClubList clubs={usersClubs} title="Mis Clubes" showButtons={false} />

      {/* Todos los clubes */}
      <ClubList clubs={clubs} title="Descubre" showButtons={false} />
    </div>
  );
};

export default Clubes;
