import React, { useContext, useEffect, useState } from 'react';

import { useFetch } from '../../hook/useFetch';
import { AuthenticationContext } from '../../services/auth.context';

const CommentList = ({ reviewId }) => {
    const { token } = useContext(AuthenticationContext);
    const { getAll } = useFetch(`/comments/${reviewId}`);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const allComments = await getAll(token);
            console.log("Comentarios recibidos:", allComments);
            setComments([allComments]);
        }
        
        fetchComments();
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
                        <p><strong>{comment.user?.username}</strong></p>
                        <p>{comment.content}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default CommentList;