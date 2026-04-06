import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Fleet from "../pages/Fleet";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

import ScrollToTop from "../components/ScrollToTop";
import IntroAnimation from "../components/IntroAnimation";

function AppRouter() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setShowIntro(true);

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
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/flotte" element={<Fleet />} />
        <Route path="/reservation" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;