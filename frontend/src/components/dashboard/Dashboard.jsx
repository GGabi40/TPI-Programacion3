import React from 'react'
import LeftNav from '../nav/LeftNav'
import { Routes, Route } from 'react-router'
import Clubes from '../clubes/Clubes'
import GoToTop from '../goToTop/GoToTop'
import MisClubes from '../misClubes/MisClubes'
import Search from '../search/Search'
import Profile from '../profile/Profile'
import FooterSmall from '../footer/FooterSmall'

const Dashboard = () => {

  const handleSearch = (query) => {
    console.log("Buscando desde Dashboard:", query);
  };

  return (
    <div>
        <LeftNav />

        <Search 
          onSearch={handleSearch} 
          placeholder='Buscar...' 
          showButton={true} 
        />

        <Routes>
            <Route index element={<Clubes />} /> {/* /* PRINCIPAL - donde estan los clubes */}
            <Route path="/mi-perfil" element={<Profile />} />
            <Route path='mis-clubes' element={<MisClubes />} />
            <Route path='descubre' />
        </Routes>

        <GoToTop />
        <FooterSmall />
    </div>
  )
}

export default Dashboard