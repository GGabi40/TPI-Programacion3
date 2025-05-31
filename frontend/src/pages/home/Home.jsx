import React from "react";
import TopNav from "../../components/nav/TopNav";
import Footer from "../../components/footer/Footer";

import "./home.css";
import GoToTop from "../../components/goToTop/GoToTop";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faComments,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="home-container">
      <TopNav />

      <main className="container">
        <h2 className="text-align">
          La comunidad de lectores más grande de Latinoamérica.
        </h2>
      </main>

      <div className="banner">
        <h3 className="text-align">
          Descubrí nuevos mundos, compartí tus historias favoritas y unite a los clubes de
          lectura que más te apasionen.
        </h3>

        <p className="banner-text">
          Desde novelas clásicas hasta ciencia ficción, pasando por poesía o
          manga — aquí encontrarás un espacio para leer, debatir y conectar con
          otros lectores.
        </p>
      </div>

      <main className="container">
        <section className="cards">
          <Link className="card-ad" to="/register">
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
            <h4>Unite a Clubes de Lectura</h4>
            <p>Explorá clubes temáticos según tus géneros favoritos.</p>
          </Link>
          <Link className="card-ad" to="/register">
            <div className="icon">
              <FontAwesomeIcon icon={faComments} size="2x" />
            </div>
            <h4>Comentá y Compartí</h4>
            <p>
              Participá en debates, dejá tus opiniones y descubrí nuevos puntos
              de vista.
            </p>
          </Link>
          <Link className="card-ad" to="/register">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            </div>
            <h4>Agenda de Lectura</h4>
            <p>
              Seguí el ritmo del club con calendarios, fechas de discusión y
              recordatorios.
            </p>
          </Link>
        </section>
      </main>

      <div className="banner-action">
        <h2>¿Listo/a para unirte a nuestra comunidad?</h2>
        <p>Creá tu cuenta y empezá a compartir lecturas hoy mismo.</p>
        <Link className="link-button secondary" to="/register">Crear Cuenta</Link>
      </div>

      <GoToTop />
      <Footer />
    </div>
  );
};

export default Home;
