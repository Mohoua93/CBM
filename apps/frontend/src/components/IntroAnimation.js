import React, { useEffect, useState } from "react";
import "../styles/IntroAnimation.css";
import logo from "../assets/Logo-transp.png";
import { useNavigate } from "react-router-dom";

function IntroAnimation({ onFinish }) {
  const [phase, setPhase] = useState("enter");
  const navigate = useNavigate();

  useEffect(() => {
    // Durée totale de l'intro (4.8 secondes)
    const totalDuration = 5800; 
    // Durée du gros zoom final (1 seconde)
    const zoomDuration = 1200; 

    // On déclenche l'animation de zoom final
    const tZoom = setTimeout(() => {
      setPhase("zoom");
    }, totalDuration - zoomDuration);

    // Fin de l'animation et navigation vers l'accueil
    const tEnd = setTimeout(() => {
      setPhase("hidden");
      if (typeof onFinish === "function") onFinish();
      navigate("/");
    }, totalDuration);

    return () => {
      clearTimeout(tZoom);
      clearTimeout(tEnd);
    };
  }, [navigate, onFinish]);



  if (phase === "hidden") return null;

  return (
    // La classe dynamique est gérée ici
    <div className={`intro ${phase === "zoom" ? "intro--zoom" : ""}`}>
      <div className="intro__bg"></div>
      <div className="intro__glow"></div>

      {/* C'est ce bloc qui va exploser vers l'écran */}
      <div className="intro__content">

        <div className="intro__logo-wrap">
          <img
            className="intro__logo"
            src={logo}
            alt="C.B.M Services & Cars"
          />
        </div>

        <div className="intro__divider"></div>

        <p className="intro__subtitle">Transport privé</p>
        <p className="intro__signature">Excellence • Confort • Prestige</p>
      </div>
    </div>
  );
}

export default IntroAnimation;