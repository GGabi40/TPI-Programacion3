import React, { useState, useEffect, useContext } from "react";
import ClubList from "../clubList/ClubList";

import { useFetch } from "../hook/useFetch";
import { AuthenticationContext } from "../services/auth.context";

/* Acá se visualizarán todos los clubes,
utilizando ClubList y CardClub */
const Clubes = ({ clubs }) => {
  const { userId } = useContext(AuthenticationContext);
  const { getAll } = useFetch(`/clubs/user/${userId}`);
  const [usersClubs, setUsersClubs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const uClubs = await getAll();
      if (uClubs) {
        //console.log('Hola ', uClubs)
        setUsersClubs(uClubs);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="hero-container">
      {/* Club al que está unido usuario */}
      <ClubList clubs={usersClubs} title="Mis Clubes" showButtons={false} />

      {/* Todos los clubes */}
      <ClubList clubs={clubs} title="Descubre" showButtons={false} />

    </div>
  );
};

export default Clubes;
