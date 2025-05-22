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
          La comunidad de lectores más grande de Latinoamérica
        </h2>
      </main>

      <div className="banner">
        <h3 className="text-align">
          Descubra nuevos mundos, comparta sus historias y unase a los clubes de
          lectura que más te apasionen.
        </h3>

        <p className="banner-text">
          Desde novelas clásicas hasta ciencia ficción, pasando por poesía o
          manga — aquí encontrá un espacio para leer, debatir y conectar con
          otras personas lectoras.
        </p>
      </div>

      <main className="container">
        <section className="cards">
          <div className="card-ad">
            <div className="icon">
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
            <h4>Únase a Clubes de Lectura</h4>
            <p>Explore clubes temáticos según tus géneros favoritos.</p>
          </div>
          <div className="card-ad">
            <div className="icon">
              <FontAwesomeIcon icon={faComments} size="2x" />
            </div>
            <h4>Comente y Comparta</h4>
            <p>
              Participe en debates, dejá tus opiniones y descubra nuevos puntos
              de vista.
            </p>
          </div>
          <div className="card-ad">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" />
            </div>
            <h4>Agenda de Lectura</h4>
            <p>
              Siga el ritmo del club con calendarios, fechas de discusión y
              recordatorios.
            </p>
          </div>
        </section>
      </main>

      <div className="banner-action">
        <h2>¿List@ para unirse a nuestra comunidad?</h2>
        <p>Cree su cuenta y empiece a compartir lecturas hoy mismo</p>
        <Link className="link-button secondary" to="/register">Crear Cuenta</Link>
      </div>

      <GoToTop />
      <Footer />
    </div>
  );
};

export default Home;
