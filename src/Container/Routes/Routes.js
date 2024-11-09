import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "../../Components/About/Contact";
import MapContainer from "../../Components/About/MapContainer";
import NotFound from "../NotFound";
import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../Components/About/About";
import Gallery from "../../Components/Gallery/Gallery";
import Reservation from "../../Components/Reservation/Reservation";
import Home from "../../Components/Home/Home";
import MainMenu from "../../Components/Menu/MainMenu";
import Navigation from "../../Components/Navigation/Navigation";
import Loaction from "../../Components/Location/Index";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<MainMenu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/location" element={<Loaction />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Contact />
        <MapContainer />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
