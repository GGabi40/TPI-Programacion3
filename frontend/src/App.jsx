import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from 'react';
import Register from "./components/register/Register";
import Login from "./components/login/Login"; // formulario login
import Protected from "./components/protected/Protected";
import Home from "./pages/home/Home"; // landing Page
import Dashboard from "./components/dashboard/Dashboard"; // dashboard
import NotFound from "./components/error/notFound/NotFound"; // error 404
import NewClub from "./components/newclub/NewClub"; //create club
import ModifyClub from "./components/modifyClub/ModifyClub"; //modify club

import ClubDetails from "./components/clubDetails/ClubDetails";
import MisClubes from "./components/misClubes/MisClubes";
import Profile from "./components/profile/Profile";
import NewActivity from "./components/newActivity/NewActivity";
import Descubre from "./components/descubre/DescubreClubes";
import Books from "./components/Books";
import 'sweetalert2/dist/sweetalert2.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          {/* Ruta sin proteger - Home y NotFound */}
          {/* agregue el register para que sea publica aunque no este logged */}
          {/* agregar nav y footer en ambas */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

            {/* Acá todas estarán protegidas x Login */}
            <Route element={<Protected />}> 
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/mi-perfil" element={<Profile />} />
              <Route path="/clubDetails/:id" element={<ClubDetails />} /> {/* UseParams */}
              <Route path="/modifyclub/:id" element={<ModifyClub />} />
              <Route path="/newclub" element={<NewClub />} />
              <Route path="/mis-clubes" element={<MisClubes />} />
              <Route path="/newact" element={<NewActivity />} />
              <Route path="/descubre" element={<Descubre />} />
            </Route>
            



            {/* PRUEBA DE CUSTOMHOOK - Put, GetAll y Delete */}
            <Route path="/especial" element={<Books />} />



            {/* </Route> */}
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
