import React from 'react'
import TopNav from '../components/nav/TopNav'
import Footer from '../components/footer/Footer'

import '../styles/landing/landing.css'

const Home = () => {
  return (
    <div className='home-container'>
        <TopNav />

        <main className='container'>
          <h2 className='text-align'>La comunidad de lectores más grande de Latinoamérica</h2>
        </main>

          <div className="banner">
              <h3 className="text-align">Descubra nuevos mundos, comparta sus historias y unase a los clubes de lectura que más te apasionen.</h3>
              
              <p className='banner-text'>Desde novelas clásicas hasta ciencia ficción, pasando por poesía o manga — aquí encontrá un espacio para leer, debatir y conectar con otras personas lectoras.</p>
          </div>
        
        <main className="container">
          <section className="cards">
            <div className="card-ad">
              <div className="icon"></div>
              <h4>Únase a Clubes de Lectura</h4>
              <p>Explore clubes temáticos según tus géneros favoritos.</p>
            </div>
            <div className="card-ad">
              <div className="icon"></div>
              <h4>Comente y Comparta</h4>
              <p>Participe en debates, dejá tus opiniones y descubra nuevos puntos de vista.</p>
            </div>
            <div className="card-ad">
              <div className="icon"></div>
              <h4>Agenda de Lectura</h4>
              <p>Siga el ritmo del club con calendarios, fechas de discusión y recordatorios.</p>
            </div>
          </section>
        </main>
        <Footer />
    </div>
  )
}

export default Home