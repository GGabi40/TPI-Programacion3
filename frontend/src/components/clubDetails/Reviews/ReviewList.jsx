import React, { useEffect, useState } from 'react';
import CommentList from "../Comments/CommentList";
import CommentForm from "../Comments/CommentFrom";

const ReviewList = ({ activityId, userId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`/api/activities/${activityId}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(() => setReviews([]));
    }, [activityId]);

  return (
    <div className='review-list'>
        <h5>Reseñas</h5>
        {reviews.length === 0 ? (
            <p>No hay reseñas aún.</p>
        ) : (
            <ul>
                {reviews.map((review) => (
                    <li key={review.id}>
                        <p><strong>Usuario ID:</strong>{review.userId}</p>
                        <p>{review.content}</p>
                        <CommentList reviewId={review.id}/>
                        <CommentForm reviewId={review.id} userId={userId}/>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
};

export default ReviewList;