import React, {useState} from "react";
import ClubForm from "../clubForm/ClubForm";
import { useFetch } from "../hook/useFetch";
import { useNavigate } from "react-router";

const { post, getAll } = useFetch("/clubs");

const NewClub = () => {
  const navigate = useNavigate();
  const [allClubs, setAllClubs] = useState([]);
  const [newClub, setNewClub] = useState("");

  const handleSubmit = async (data) => {
    const response = await post(data);

    console.log(response);

    const clubs = await getAll();
        setAllClubs(clubs);
        setNewClub({
            name: "",
            description: "",
            restricted: "",
            interest: "",
            gender: "",
            color: "",
        });

    // navigate(`/mis-clubes`);
  }
  return <ClubForm mode="create" onSubmit={handleSubmit} />
}

export default NewClub