import React, { useState, useEffect, useContext } from "react";
import { useFetch } from "../../hook/useFetch";
import ReviewForm from "../Reviews/ReviewForm";
import ReviewList from "../Reviews/ReviewList";
import PastActivity from "./PastActivity";
import { AuthenticationContext } from "../../services/auth.context";


const Activities = ({ clubId }) => {
  const { token } = useContext(AuthenticationContext);
  const { getAll } = useFetch(`/clubs/${clubId}/activities`);
  const { getById } = useFetch("/books");

  const [activities, setActivities] = useState([]);
  const [currentBook, setCurrentBook] = useState("");
  const [currentActivity, setCurrentActivity] = useState("");

  /* FALTA AGREGAR DIFERENCIACION POR ROL
  ADMIN: Puede crear nueva actividad
  {isAdmin && (
    <div className="admin-actions">
      <button className="btn-admin" onClick={navigate(/new-activity)}>➕ Nueva Actividad</button>
    </div>
  )}
  
  USER COMUN: si está unido al club: Botón muestra: unido al club con att disabled
  */

  useEffect(() => {
    const fetchActivity = async () => {
      const response = await getAll();
      setActivities(response);

      const active = response.find((act) => act.isActive);
      setCurrentActivity(active);

      if (active?.bookId) {
        const book = await getById(active.bookId, token);
        setCurrentBook(book);
      }
    };

    fetchActivity();
  }, []);

  const pastActivities = activities.filter((a) => !a.isActive);

  if (activities.length === 0)
    return (
      <p className="no-activities">No hay actividades en este club todavía.</p>
    );

  return (
    <div className="club-activities">
      {/* Actividad Actual */}
      {currentActivity ? (
        <section className="current-activity">
          <h3 className="activity-title">Lectura en curso</h3>
          <div className="activity-card current">
            <div className="activity-info">
              <p className="dates">
                <strong>Del:</strong>{" "}
                {new Date(currentActivity.dateStart).toLocaleDateString()}{" "}
                <br />
                <strong>al:</strong>{" "}
                {new Date(currentActivity.dateEnd).toLocaleDateString()}
              </p>
              <br />
              <p className="progress">
                <strong>Progreso:</strong> {currentActivity.progress.toUpperCase()}
              </p>
            </div>

            {currentBook && (
              <div className="book-details highlighted-book">
                {currentBook.image && (
                  <img
                    src={currentBook.image}
                    alt={`Portada de ${currentBook.title}`}
                    className="book-cover"
                  />
                )}
                <div className="book-text">
                  <h3 className="book-section-title">📚 Lectura Actual</h3>
                  <h2 className="book-title">{currentBook.title}</h2>
                  <p className="book-author">
                    <em>{currentBook.author}</em>
                  </p>
                  <p>{currentBook.summary}</p>
                </div>
              </div>
            )}

            <div className="reviews-section">
              <h5>📝 Reseñas de la comunidad</h5>
              <ReviewForm activityId={currentActivity.id} />
              <ReviewList activityId={currentActivity.id} />
            </div>
          </div>
        </section>
      ) : (
        <p className="no-active">Actualmente no hay ninguna lectura activa.</p>
      )}

      {/* Actividad pasada */}
      {pastActivities.length > 0 && (
        <div className="past-activities">
          <h3 className="section-title">📚 Actividades Finalizadas</h3>
          {activities
            .filter(
              (act) => !act.isActive || new Date(act.dateEnd) < new Date()
            )
            .map((pastAct) => (
              <PastActivity activity={pastAct} />
            ))}
        </div>
      )}
    </div>
  );
};

export default Activities;
