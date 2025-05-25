import React from "react";
import ClubForm from "../clubForm/ClubForm";
import { useFetch } from "../hook/UseFetch";
import { useNavigate } from "react-router";

const { post } = useFetch("/clubs");

const NewClub = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const created = await post(data);
    navigate(`/clubDetails/${created.id}`);
  }
  return <ClubForm mode="create" onSubmit={handleSubmit} />
}

export default NewClub