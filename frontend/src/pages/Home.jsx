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
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
        </main>
        <Footer />
    </div>
  )
}

export default Home