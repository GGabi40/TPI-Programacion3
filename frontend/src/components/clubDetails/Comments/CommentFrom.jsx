import React, { useState } from 'react';

const CommentFrom = ({ reviewId, userId }) => {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/comments`, {
            method: "POST",
            headers: { "Content-Type" : "application/json "},
            body: JSON.stringify({
                content,
                userId,
                reviewId
            }),
        })
            .then(res => {
                if(res.ok) {
                    setContent("");
                }
            });
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

export default CommentFrom;