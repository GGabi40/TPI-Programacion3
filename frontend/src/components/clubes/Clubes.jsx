import React from "react";
import ClubList from "../clubList/ClubList";

/* Acá se visualizarán todos los clubes,
utilizando ClubList y CardClub */
const Clubes = () => {

  /* EJEMPLO CON MOCK */
  const misClubes = [
    {
      name: "Club de Lectura",
      description: "Un club para amantes de la lectura.",
      progress: "sincronica",
      gender: "ficcion",
      interest: "Novelas clásicas",
      privacy: false,
      restriction: false,
      color: "violet",
    },
    {
      name: "Club de Misterio",
      description: "Lectura de novelas de misterio y suspenso.",
      progress: "asincronica",
      gender: "misterio",
      interest: "Sherlock Holmes, Agatha Christie",
      privacy: false,
      restriction: false,
      color: "violet",
    },
    {
      name: "Club de Romance",
      description: "Historias de amor y drama.",
      progress: "sincronica",
      gender: "romance",
      interest: "Jane Austen, Nicholas Sparks",
      privacy: true,
      restriction: false,
      color: "red",
    },
  ];

  const descubreClubes = [
    {
      name: "Club de Sherlock Holmes",
      description: "Amantes del detective más famoso.",
      progress: "asincronica",
      gender: "misterio",
      interest: "Arthur Conan Doyle",
      privacy: false,
      restriction: false,
      color: "blue",
    },
  ];

  return (
    <div className="hero-container">
      
      <ClubList clubs={misClubes} title='Mis Clubes' showButtons={false} />
      <ClubList clubs={descubreClubes} title='Descubre' showButtons={false} />
      
    </div>
  );
};

export default Clubes;
