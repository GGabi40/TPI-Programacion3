import React, { useState, useContext } from "react";
import ReviewList from "./ReviewList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { useFetch } from "../../hook/useFetch";
import { AuthenticationContext } from "../../services/auth.context";

const ReviewForm = ({ activityId }) => {
  const { token } = useContext(AuthenticationContext);
  const { post } = useFetch("/reviews");

  const [content, setContent] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await post({ content, activityId }, token);

    if (result && !result.error) {
      setContent("");
      setRefreshFlag((prev) => !prev);
    } else {
      alert("No");
    }
  };

  return (
    <>
      <form className="review-form" onSubmit={handleSubmit}>
        <h5 className="text-align">📝 Reseñas de la comunidad</h5>
        <div className="form-group">
          <textarea
            className="edit-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribí tu reseña"
            required
          />
          <button type="submit"><FontAwesomeIcon icon={faPaperPlane} /> Publicar reseña</button>
        </div>
      </form>

      <ReviewList activityId={activityId} refreshFlag={refreshFlag} />
    </>
  );
};

export default ReviewForm;
