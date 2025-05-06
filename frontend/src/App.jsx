import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/register/Register";

import Home from "./pages/home/Home"; // landing Page
import Dashboard from "./components/dashboard/Dashboard"; // dashboard
import NotFound from "./components/error/notFound/NotFound"; // error 404

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
