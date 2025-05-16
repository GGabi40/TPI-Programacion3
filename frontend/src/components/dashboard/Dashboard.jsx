import React from 'react'
import LeftNav from '../nav/LeftNav'
import { Routes, Route } from 'react-router'
import Clubes from '../clubes/Clubes'
import GoToTop from '../goToTop/GoToTop'
import MisClubes from '../misClubes/MisClubes'

const Dashboard = () => {
  return (
    <div>
        <LeftNav />

        <Routes>
            <Route index element={<Clubes />} /> {/* /* PRINCIPAL - donde estan los clubes */}
            <Route path='mi-perfil' />
            <Route path='mis-clubes' element={<MisClubes />} />
            <Route path='descubre' />
        </Routes>

        <GoToTop />
    </div>
  )
}

export default Dashboard