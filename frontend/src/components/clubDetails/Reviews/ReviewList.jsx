import React, { useState, useEffect, useContext } from "react";

import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentList";

import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";

const ReviewList = ({ activityId }) => {
  const { token } = useContext(AuthenticationContext);
  const { getAll } = useFetch(`/reviews/activity/${activityId}`);
  const [allReviews, setAllReviews] = useState([]);
  const [visibleComments, setVisibleComments] = useState({});

  useEffect(() => {
    const reviewsData = async () => {
      const reviews = await getAll(token);
      setAllReviews(reviews);
    };

    reviewsData();
  }, [activityId, allReviews]);

  // cambia la visibilidad de comentarios
  const toggleComments = (reviewId) => {
    setVisibleComments((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Like o Dislike
  const handleLike = (reviewId) => {
    console.log("Like en", reviewId);
    // Acá podrías llamar a tu API para registrar el like
  };

  const handleDislike = (reviewId) => {
    console.log("Dislike en", reviewId);
    // Acá podrías llamar a tu API para registrar el dislike
  };

  return (
    /* Mejorar estilo */
    /* Agregar boton de editar y eliminar */
    <div className="review-list">
      <h5>Reseñas</h5>
      {allReviews.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        <ul>
          {allReviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong id="username-review">{review.user?.username}</strong>
              </p>
              <p>{review.content}</p>

              <div className="review-buttons">
                <button onClick={() => handleLike(review.id)}>👍</button>
                <button onClick={() => handleDislike(review.id)}>👎</button>
                <button onClick={() => toggleComments(review.id)}>
                  {visibleComments[review.id]
                    ? "Ocultar comentarios"
                    : "Mostrar comentarios"}
                </button>
              </div>

              {visibleComments[review.id] && (
                <div className="comment-section">
                  <CommentForm reviewId={review.id} />
                  <CommentList reviewId={review.id} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
