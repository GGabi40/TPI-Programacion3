import React, { useState } from 'react';

const NewReview = ({ userId, activityId, onReviewSent }) => {
    const [content, setContent] = useState('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch(`/api/reviews`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify({
                    content,
                    userId,
                    activityId,
                }),
            });

            setContent('');
            onReviewSent();
        } catch (error) {
            console.error('Error al enviar la reseña: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-3 mb-4'>
            <textarea 
            placeholder='Escribí tu reseña'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className='block w-full p-2 border rounded'
            />

            <button
                type='submit'
                className='px-4 py-2 bg-blue-600 text-white rounded'
            >
                Enviar
            </button>
        </form>
  );
};

export default NewReview;