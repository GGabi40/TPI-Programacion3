import React, { useState, useEffect, useContext } from "react";
import LeftNav from "../nav/LeftNav";
import { Routes, Route } from "react-router";
import Clubes from "../clubes/Clubes";
import GoToTop from "../goToTop/GoToTop";
import MisClubes from "../misClubes/MisClubes";
import Search from "../search/Search";
import Profile from "../profile/Profile";
import FooterSmall from "../footer/FooterSmall";

import { useFetch } from "../hook/useFetch";
import Loading from "../error/loading/Loading";

const Dashboard = () => {
  const { getAll, isLoading } = useFetch("/clubs");
  const [allClubs, setAllClubs] = useState([]);

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  useEffect(() => {
    const fetchData = async () => {
      const clubs = await getAll();

      if (clubs) {
        setAllClubs(clubs);
      }
    };

    fetchData();
  }, [])

  if (isLoading) return <Loading />

  return (
    <div>
      <LeftNav />

      <Search
        onSearch={handleSearch}
        placeholder="Buscar..."
        showButton={true}
      />

      <Routes>
        <Route index element={<Clubes clubs={allClubs} />} />{" "}
        {/* /* PRINCIPAL - donde estan los clubes */}
        <Route path="/mi-perfil" element={<Profile />} />
        <Route path="mis-clubes" element={<MisClubes clubs={allClubs} setAllClubs={setAllClubs} />} />
        <Route path="descubre" />
      </Routes>

      <GoToTop />
      <FooterSmall />
    </div>
  );
};

export default Dashboard;
