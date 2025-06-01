import React, { useState, useContext } from 'react';

import { useFetch } from '../../hook/useFetch';
import { AuthenticationContext } from '../../services/auth.context';

const CommentForm = ({ reviewId }) => {
    const { post } = useFetch('/comments');
    const { token } = useContext(AuthenticationContext);
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await post({content, reviewId}, token)

        if (response.message?.error) {
            console.log('Algo pasó')
        }

        /* Se puede incluit toast */
        setContent("");
    };

  return (
    <form onSubmit={handleSubmit}>
        <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder='Escribí un comentario'
            required
        />
        <button type='submit'>Comentar</button>
    </form>
  );
};

export default CommentForm;