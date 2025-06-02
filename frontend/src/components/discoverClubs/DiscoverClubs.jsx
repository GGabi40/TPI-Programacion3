import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import LeftNav from "../nav/LeftNav";
import FooterSmall from "../footer/FooterSmall";
import Search from "../search/Search";
import ClubList from "../clubList/ClubList";

import Loading from "../error/loading/Loading";
import { useFetch } from "../hook/useFetch";

const DiscoverClubs = () => {
  const { getAll, isLoading } = useFetch("/clubs");
  const [allClubs, setAllClubs] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/joined-clubs");
  };

  useEffect(() => {
    const fetchData = async () => {
      const clubs = await getAll();

      if (clubs) {
        setAllClubs(clubs);
      }
    };

    fetchData();
  }, []);

  // Los clubes que son inactivos, no aparecen en "mis clubes"
  const filteredActiveClubs = allClubs.filter(c => {
    if (c.isActive) {
      return c;
    }
  })

  if (isLoading) return <Loading />

  return (
    <>
      <LeftNav />
      <div className="space"></div>
      <div className="space"></div>

      <div className="hero-container">
        <div className="hero-club">
          <ClubList clubs={filteredActiveClubs} title="Descubre" showButtons={false} />

          <div className="break"></div>
        </div>
      </div>
    </>
  );
};

export default DiscoverClubs;
