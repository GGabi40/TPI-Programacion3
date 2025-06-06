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
import JoinedClubs from "./components/joinedClubs/JoinedClubs";
import Profile from "./components/profile/Profile";
import NewActivity from "./components/newActivity/NewActivity";
import Discover from "./components/discoverClubs/DiscoverClubs";
import 'sweetalert2/dist/sweetalert2.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutUs from "./pages/AboutUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import JoinAdmin from "./pages/joinAdmin/JoinAdmin";
import ModifyActivity from "./components/modifyActivity/ModifyActivity";


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* Ruta sin proteger - Home y NotFound */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />



          {/* Acá todas estarán protegidas x Login */}
          <Route element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/club-details/:id" element={<ClubDetails />} /> {/* UseParams */}
            <Route path="/modify-club/:id" element={<ModifyClub />} />
            <Route path="/new-club" element={<NewClub />} />
            <Route path="/joined-clubs" element={<JoinedClubs />} />
            <Route path="/new-activity/:id" element={<NewActivity />} />
            <Route path="/edit-activity/:id" element={<ModifyActivity />} />
            <Route path="/discover-clubs" element={<Discover />} />
            <Route path="/join-us" element={<JoinAdmin />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
