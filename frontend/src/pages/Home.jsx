import React from 'react'
import TopNav from '../components/nav/TopNav'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div className='home-container'>
        <TopNav />
        <main className='container'>
          <h2>Texto aqui</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab dolore modi natus omnis voluptatibus cum nihil sint illo, beatae sed inventore rerum provident aliquam corporis neque laborum voluptates saepe! Tempora!</p>
          
        </main>
        <Footer />
    </div>
  )
}

export default Home