import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Navigation from "./components/navbar/Navigation.jsx";
import './App.css';
import bgHome from "./assets/home/background-home-desktop.jpg"
import bgDestination from "./assets/destination/background-destination-desktop.jpg"
import bgCrew from "./assets/crew/background-crew-desktop.jpg"
import bgTechnology from "./assets/technology/background-technology-desktop.jpg"
import bgHomeMobile from "./assets/home/background-home-mobile.jpg"
import bgDestinationMobile from "./assets/destination/background-destination-mobile.jpg"
import bgTechnologyMobile from "./assets/technology/background-technology-mobile.jpg"
import bgCrewMobile from "./assets/crew/background-crew-mobile.jpg"

function App() {
  const location = useLocation();
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const routeBackgrounds = {
        "/space-tourism-website/": window.innerWidth <= 900 ? bgHomeMobile : bgHome,
        "/space-tourism-website/destination": window.innerWidth <= 900 ? bgDestinationMobile : bgDestination,
        "/space-tourism-website/crew": window.innerWidth <= 900 ? bgCrewMobile : bgCrew,
        "/space-tourism-website/technology": window.innerWidth <= 900 ? bgTechnologyMobile : bgTechnology,
      };
      setBackgroundImage(routeBackgrounds[location.pathname]);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  return (
    <main>
    <div className="main-container" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
    </main>
  );
}

export default App;
