import React from 'react';

import { useNavigate, useParams } from "react-router";
import { useFetch } from '../hook/useFetch';
import ActivityForm from '../activityForm/ActivityForm';

const NewActivity = () => {
    const { id } = useParams();
    const { post } = useFetch(`/clubs/${id}/activities`);
    
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        const response = await post(data);
       
        navigate(`/club-details/${id}`);
    }
    return <ActivityForm mode="create" onSubmit={handleSubmit} />
}

export default NewActivity
