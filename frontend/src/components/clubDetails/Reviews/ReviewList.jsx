import React, { useState, useEffect, useContext } from "react";

import CommentForm from "../Comments/CommentForm";
import CommentList from "../Comments/CommentList";

import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";
import { successToast } from "../../toast/NotificationToast";

const ReviewList = ({ activityId }) => {
  const { token, userId } = useContext(AuthenticationContext);
  const { getAll, del } = useFetch(`/reviews/activity/${activityId}`);
  /* Put tiene otra ruta /reviews/:id */
  const [allReviews, setAllReviews] = useState([]);
  const [visibleComments, setVisibleComments] = useState({});
  const [editingReview, setEditingReview] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    const reviewsData = async () => {
      const reviews = await getAll(token);
      setAllReviews(reviews);
    };

    reviewsData();
  }, [activityId, token]);

  //y esta const
  const refreshReviews = async () => {
    const updated = await getAll(token);
    setAllReviews(updated);
  };

  // cambia la visibilidad de comentarios
  const toggleComments = (reviewId) => {
    setVisibleComments((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Like o Dislike
  /* const handleLike = (reviewId) => {
    console.log("Like en", reviewId);
    // Acá podrías llamar a tu API para registrar el like
  };

  const handleDislike = (reviewId) => {
    console.log("Dislike en", reviewId);
    // Acá podrías llamar a tu API para registrar el dislike
  }; */

  //aca esta lo que agregue
  const handleEdit = (review) => {
    setEditingReview(review.id);
    setEditedContent(review.content);
  };

  const handleSave = async (reviewId) => {
    await put({ content: editedContent }, reviewId, token);
    setEditingReview(null);
    setEditedContent("");
    successToast("¡Editaste la reseña correctamente!");
    refreshReviews();
  };

  const handleDelete = async (reviewId) => {
    if (confirm("¿Estás seguro de que querés eliminar esta reseña?")) {
      await del(reviewId, token);
      successToast("Eliminaste la reseña con exito");
      refreshReviews();
    }
  };
  //hasta aca

  return (
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
                <button onClick={() => toggleComments(review.id)}>
                  {visibleComments[review.id]
                    ? "Ocultar comentarios"
                    : "Mostrar comentarios"}
                </button>
              </div>

              {
                userId === review.userId && (
                  <>
                    <button onClick={() => handleEdit(review)}>Editar</button>
                    <button onClick={() => handleDelete(review.id)}>
                      Eliminar
                    </button>
                  </>
                )
              }

              {/* y esta condicion */}

              {editingReview === review.id ?? (
                <>
                  <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  {userId?.id === review.userId?.id && (
                    <>
                      <button onClick={() => handleSave(review.id)}>
                        Guardar
                      </button>
                      <button onClick={() => setEditingReview(null)}>
                        Cancelar
                      </button>
                    </>
                  )}
                </>
              )}

              {/* y esta condicion */}

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
