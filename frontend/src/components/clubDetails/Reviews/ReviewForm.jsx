import React, { useState } from 'react';

const ReviewForm = ({ activityId, userId }) => {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/api/reviews`, {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                content,
                userId,
                activityId
            }),
        })
            .then(res => {
                if (res.ok) {
                    setContent("");
                }
            });
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