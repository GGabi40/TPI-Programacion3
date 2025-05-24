import React from "react";
import ClubForm from "../clubForm/ClubForm";

import { useNavigate } from "react-router";

const NewClub = () => {

  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await fetch("http://localhost:3000/clubs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const created = await res.json();
      navigate(`/clubDetails/${created.id}`);
    };
  }
  return (
    <ClubForm
      mode="create"
      onSubmit={handleSubmit}
    />)
}

export default NewClub




