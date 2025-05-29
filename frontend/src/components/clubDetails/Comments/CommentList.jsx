import React, { useEffect, useState } from 'react';

const CommentList = ({ reviewId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`/api/reviews/${reviewId}/comments`)
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(() => setComments([]));
    }, [reviewId]);

  return (
    <div className='comment.list'>
        <h6>Comentarios</h6>
        {comments.length === 0 ? (
            <p>No hay comentarios aún.</p>
        ) : (
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p><strong>Usuario ID:</strong>{comment.userId}</p>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default CommentList;