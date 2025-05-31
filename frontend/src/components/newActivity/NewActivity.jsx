import React from 'react';

import { useNavigate } from "react-router";
import { useFetch } from '../hook/useFetch';
import ActivityForm from '../activityForm/ActivityForm';



const NewActivity = () => {
    const { post } = useFetch("/activities");

    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        const response = await post(data);
       
        navigate(`/new-act`);
    }
    return <ActivityForm mode="create" onSubmit={handleSubmit} />
}

export default NewActivity
