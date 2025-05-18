import React from 'react'
import LeftNav from '../nav/LeftNav'
import { Routes, Route } from 'react-router'
import Clubes from '../clubes/Clubes'
import GoToTop from '../goToTop/GoToTop'
import MisClubes from '../misClubes/MisClubes'
import Search from '../search/Search'

const Dashboard = () => {

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  return (
    <div>
        <LeftNav />

        <Search onSearch={handleSearch} /> {/* Cuando esté Protected, poner Search dentro:
                                            Actúa como un Layout, renderiza en todos los componentes */}

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