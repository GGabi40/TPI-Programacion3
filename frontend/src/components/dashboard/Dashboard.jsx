import React from 'react'
import LeftNav from '../nav/LeftNav'
import { Routes, Route } from 'react-router'
import Clubes from '../clubes/Clubes'
import GoToTop from '../goToTop/GoToTop'

const Dashboard = () => {
  return (
    <div>
        <LeftNav />

        <Routes>
            {/* FALTA AGREGAR ELEMENTOS */}
            <Route index element={<Clubes />} /> {/* /* PRINCIPAL - donde estan los clubes */}
            <Route path='mi-perfil' />
            <Route path='mis-clubes' />
            <Route path='descubre' />
        </Routes>

        <GoToTop />
    </div>
  )
}

export default Dashboard