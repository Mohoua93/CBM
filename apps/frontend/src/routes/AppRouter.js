import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Fleet from "../pages/Fleet";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Availability from "../pages/Availability";
import Greeter from "../pages/Greeter";
import Concierge from "../pages/Concierge";

// 🔽 IMPORT DES PAGES VÉHICULES
import MercedesClasseS from "../pages/MercedesClasseS";
import MercedesClasseE from "../pages/MercedesClasseE";
import MercedesClasseV from "../pages/MercedesClasseV";
import RangeRover from "../pages/RangeRover";

import ScrollToTop from "../components/ScrollToTop";
import IntroAnimation from "../components/IntroAnimation";

function AppRouter() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

    if (location.pathname === "/" && !hasSeenIntro) {
      setShowIntro(true);
      sessionStorage.setItem("hasSeenIntro", "true");

      const timer = setTimeout(() => {
        setShowIntro(false);
      }, 2800);

      return () => clearTimeout(timer);
    }

    setShowIntro(false);
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {showIntro && <IntroAnimation />}

      <Routes>
        {/* ROUTES PRINCIPALES */}
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/flotte" element={<Fleet />} />
        <Route path="/reservation" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mise-a-disposition" element={<Availability />} />
        <Route path="/greeter" element={<Greeter />} />
        <Route path="/conciergerie" element={<Concierge />} />

        {/* 🔽 ROUTES VÉHICULES */}
        <Route path="/flotte/mercedes-classe-s" element={<MercedesClasseS />} />
        <Route path="/flotte/mercedes-classe-e" element={<MercedesClasseE />} />
        <Route path="/flotte/mercedes-classe-v" element={<MercedesClasseV />} />
        <Route path="/flotte/range-rover" element={<RangeRover />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;