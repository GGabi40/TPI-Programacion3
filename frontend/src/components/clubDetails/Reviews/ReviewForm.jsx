import React, { useState, useContext } from 'react';

import { useFetch } from '../../hook/useFetch';
import { AuthenticationContext } from '../../services/auth.context';

const ReviewForm = ({ activityId }) => {
    const { token } = useContext(AuthenticationContext);
    const { post } = useFetch('/reviews');
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const result = await post({ content, activityId }, token)

        if (result && !result.error) {
          setContent("");
        } else {
          alert('No')
        }
    };

  return (
    <form onSubmit={handleSubmit}>
        <textarea 
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Escribí tu reseña'
            required
        />
        <button type='submit'>Publicar reseña</button>
    </form>
  );
};

export default ReviewForm;