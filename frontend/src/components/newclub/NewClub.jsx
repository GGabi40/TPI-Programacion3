import React, { useEffect, useState } from "react";
import ClubForm from "../clubForm/ClubForm";
import { useFetch } from "../hook/useFetch";
import { useNavigate } from "react-router";



const NewClub = () => {
  const { post, getAll } = useFetch("/clubs");
  const navigate = useNavigate();
  const [allClubs, setAllClubs] = useState([]);
  const [newClub, setNewClub] = useState("");

  const handleSubmit = async (data) => {
    const response = await post(data);
    // console.log(response);

    navigate(`/joined-clubs`);
  };
  return <ClubForm mode="create" onSubmit={handleSubmit} />;
};

export default NewClub;
