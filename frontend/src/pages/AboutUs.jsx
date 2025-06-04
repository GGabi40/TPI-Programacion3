import React, { useEffect } from "react";
import "./terms.css";
import TopNav from "../components/nav/TopNav";
import Footer from "../components/footer/Footer";
import GoToTop from '../components/goToTop/GoToTop'

const AboutUs = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth"});
    }, []);

  return (
    <div className="home-container">
      <TopNav />
      <div className="about-container">
        <h2>¿Quiénes Somos?</h2>
        <p>
          <strong>InkLink</strong> es una aplicación desarrollada como parte del
          trabajo práctico de la asignatura Programación III de la Tecnicatura
          Universitaria en Programación, UTN - Facultad Regional Rosario.
        </p>
        <p>
          El equipo de desarrollo está compuesto por:
        </p>
        <ul className="about-list-cards">
          <li className="member-card">👩‍💻 Ríos Elena</li>
          <li className="member-card">👩‍💻 Baptista Gabriela</li>
          <li className="member-card">👩‍💻 Raña Evelyn</li>
          <li className="member-card">👩‍💻 Calvo Celeste</li>
        </ul>
        <p>
          Nuestro objetivo es fomentar la lectura y la participación en
          comunidades literarias digitales, conectando personas con intereses en
          común.
        </p>
      </div>

      <GoToTop />
      <Footer />
    </div>
  );
};

export default AboutUs;
