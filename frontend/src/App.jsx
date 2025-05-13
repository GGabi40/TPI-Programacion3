import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/register/Register";

import Home from "./pages/home/Home"; // landing Page
import Dashboard from "./components/dashboard/Dashboard"; // dashboard
import NotFound from "./components/error/notFound/NotFound"; // error 404
import NewClub from "./components/newclub/NewClub"; //create club
import ModifyClub from "./components/modifyClub/ModifyClub"; //modify club
import MisClubes from "./components/misClubes/MisClubes";


function App() {
  return (
    <>
      <BrowserRouter>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/modifyclub" element={<ModifyClub />} />
          <Route path="/newclub" element={<NewClub />} />
          <Route path="/misclubes" element={<MisClubes />} />
          
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
