import React from 'react'
import ClubForm from '../clubForm/ClubForm';
import { useNavigate } from 'react-router';

const ModifyClub = () => {

  const navigate = useNavigate();

  const handleEdit = async (data) => {
    const res = await fetch(`http://localhost:3000/clubs/${clubData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      navigate(`/clubDetails/${clubData.id}`);
    }
  }

  return (
    <ClubForm
      mode="edit"
     //initialData={clubData}
      onSubmit={handleEdit}

    />
  )
}

export default ModifyClub
