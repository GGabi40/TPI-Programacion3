import React, { useContext } from 'react';

import { useNavigate, useParams } from "react-router";
import { useFetch } from '../hook/useFetch';
import ActivityForm from '../activityForm/ActivityForm';

import { AuthenticationContext } from '../services/auth.context';

const NewActivity = () => {
    const { id } = useParams();
    const { token } = useContext(AuthenticationContext);
    const { post } = useFetch(`/clubs/${id}/activities`);
    
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        const response = await post(data, token);
       
        navigate(`/club-details/${id}`);
    }
    return <ActivityForm mode="create" onSubmit={handleSubmit} />
}

export default NewActivity
