import React from "react";
import ClubForm from "../clubForm/ClubForm";
import { useFetch } from "../hook/useFetch";
import { useNavigate } from "react-router";



const NewClub = () => {
  const { post } = useFetch("/clubs");
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const response = await post(data);

    navigate(`/mis-clubes`);
  };
  return <ClubForm mode="create" onSubmit={handleSubmit} />;
};

export default NewClub;
