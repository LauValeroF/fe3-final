// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Dentista from "./Routes/Detail";
import Contacto from "./Routes/Contact";
import Favs from "./Routes/Favs"
import { AppProvider } from "./Components/utils/AppContext"

function App() {
  return (
    <Router>
      <AppProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<Dentista />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
