import React, { useState, useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPencilSquare,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";
import { errorToast, successToast } from "../../toast/NotificationToast";

const ReviewList = ({ activityId, refreshFlag }) => {
  const { token, userId } = useContext(AuthenticationContext);
  const { getAll } = useFetch(`/reviews/activity/${activityId}`);
  const { getRatings } = useFetch("/review-rating");
  const { put, del: delReview } = useFetch("/reviews");
  const { postReaction } = useFetch(`/review-rating`);

  const [allReviews, setAllReviews] = useState([]);
  const [editingReview, setEditingReview] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [reactions, setReactions] = useState({});
  const [totalRatings, setTotalRatings] = useState({});

  useEffect(() => {
    const fetchReviews = async () => {
      const reviews = await getAll(token);
      setAllReviews(reviews);
    };

    // reviewId
    // Filtrado o ver como setear otra vez el setAll
    const fetchRatings = async () => {
      const allRatings = await getRatings(reviewId, token);
      setTotalRatings(allRatings);
    }
    
    fetchReviews();
    fetchRatings(); // todas las valoraciones
  }, [activityId, token, refreshFlag]);

  console.log(totalRatings);

  const refreshReviews = async () => {
    const updated = await getAll(token);
    setAllReviews(updated);
  };

  // Like o Dislike
  const handleLike = async (reviewId) => {
    const likeObj = {
      reviewId,
      type: "like",
    };

    console.log(likeObj)

    if (!["like", "dislike"].includes(likeObj.type)) {
      console.error("Tipo de reacción inválido");
      return;
    }

    // Guardar en back
    await postReaction(likeObj, token);
    setReactions((prev) => {
      const current = prev[reviewId] || {
        likes: 0,
        dislikes: 0,
        userReaction: null,
      };
      let { likes, dislikes, userReaction } = current;

      if (userReaction === "like") {
        likes--;
        userReaction = null;
      } else {
        likes++;
        if (userReaction === "dislike") dislikes--;
        userReaction = "like";
      }

      return {
        ...prev,
        [reviewId]: { likes, dislikes, userReaction },
      };
    });
  };

  const handleDislike = async (reviewId) => {
    const dislikeObj = {
      reviewId,
      type: "dislike",
    };

    if (!["like", "dislike"].includes(dislikeObj.type)) {
      console.error("Tipo de reacción inválido");
      return;
    }

    // Guardar en back
    const response = await postReaction(dislikeObj, token);

    console.log(response);

    setReactions((prev) => {
      const current = prev[reviewId] || {
        likes: 0,
        dislikes: 0,
        userReaction: null,
      };
      let { likes, dislikes, userReaction } = current;

      if (userReaction === "dislike") {
        dislikes--;
        userReaction = null;
      } else {
        dislikes++;
        if (userReaction === "like") likes--;
        userReaction = "dislike";
      }

      return {
        ...prev,
        [reviewId]: { likes, dislikes, userReaction },
      };
    });
  };

  const handleEdit = (review) => {
    setEditingReview(review.id);
    setEditedContent(review.content);
  };

  const handleSave = async (reviewId) => {
    if (!editedContent.trim()) {
      errorToast("El contenido de la reseña no puede estar vacío.");
      return;
    }

    await put({ content: editedContent }, reviewId, token);
    setEditingReview(null);
    setEditedContent("");
    refreshReviews();
  };

  const handleDelete = async (reviewId) => {
    if (confirm("¿Estás seguro de que querés eliminar esta reseña?")) {
      await delReview(reviewId, token);
      successToast("Reseña Eliminada");
      const updatedReviews = allReviews.filter(c => c.reviewId !== reviewId);
      setAllReviews(updatedReviews);
      refreshReviews();
    }
  };

  return (
    <div className="review-list">
      <h5 style={{ textTransform: "uppercase", letterSpacing: "5px" }}>
        Reseñas
      </h5>
      {allReviews.length === 0 ? (
        <p>No hay reseñas aún.</p>
      ) : (
        <ul>
          {allReviews.map((review) => (
            <li key={review.id} className="review-item fade-in">
              <p>
                <strong id="username-review">{review.user?.username}</strong>
              </p>

              {editingReview === review.id ? (
                <>
                  <textarea
                    className="edit-textarea"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <button onClick={() => handleSave(review.id)}>Guardar</button>
                  <button onClick={() => setEditingReview(null)}>
                    Cancelar
                  </button>
                </>
              ) : (
                <div className="review-content">
                  <p>{review.content}</p>
                  {userId === review.userId && (
                    <div className="review-buttons">
                      <button
                        onClick={() => handleEdit(review)}
                        className="review-buttons edit"
                        title="Modificar comentario"
                      >
                        <FontAwesomeIcon icon={faPencilSquare} />
                      </button>
                      <button
                        onClick={() => handleDelete(review.id)}
                        className="review-buttons delete"
                        title="Borrar"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  )}
                </div>
              )}
              <div className="review-actions">
                <button
                  className="like-button"
                  onClick={() => handleLike(review.id)}
                  title="Me gusta"
                >
                  <FontAwesomeIcon icon={faThumbsUp} />{" "}
                  {reactions[review.id]?.likes || 0}
                </button>
                <button
                  className="dislike-button"
                  onClick={() => handleDislike(review.id)}
                  title="No me gusta"
                >
                  <FontAwesomeIcon icon={faThumbsDown} />{" "}
                  {reactions[review.id]?.dislikes || 0}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewList;
