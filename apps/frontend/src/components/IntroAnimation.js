import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo-transp.png";
import "../styles/IntroAnimation.css";

function IntroAnimation({ onFinish }) {
  const [phase, setPhase] = useState("visible");
  const navigate = useNavigate();
  const particlesRef = useRef(null);

  useEffect(() => {
    // Spawn particles
    const container = particlesRef.current;
    if (container) {
      for (let i = 0; i < 18; i++) {
        const p = document.createElement("div");
        p.className = "intro__particle";
        p.style.left = (10 + Math.random() * 80) + "%";
        p.style.bottom = (Math.random() * 30) + "%";
        p.style.width = p.style.height = (Math.random() > 0.6 ? 2 : 1) + "px";
        p.style.animationDuration = (4 + Math.random() * 6) + "s";
        p.style.animationDelay = (Math.random() * 3) + "s";
        container.appendChild(p);
      }
    }

    const tFade = setTimeout(() => setPhase("fade-out"), 5000);
    const tEnd = setTimeout(() => {
      setPhase("hidden");
      if (typeof onFinish === "function") onFinish();
      navigate("/");
    }, 5800);

    return () => { clearTimeout(tFade); clearTimeout(tEnd); };
  }, [navigate, onFinish]);

  if (phase === "hidden") return null;

  return (
    <div className={`intro ${phase === "fade-out" ? "intro--exit" : ""}`}>
      <div className="intro__bg" />
      <div className="intro__grain" />
      <div className="intro__particles" ref={particlesRef} />
      <div className="intro__line intro__line--top" />
      <div className="intro__line intro__line--bottom" />
      <div className="intro__corner intro__corner--tl" />
      <div className="intro__corner intro__corner--tr" />
      <div className="intro__corner intro__corner--bl" />
      <div className="intro__corner intro__corner--br" />

      <div className="intro__content">
        <div className="intro__logo-wrap">
          <img className="intro__logo" src={logo} alt="C.B.M Services & Cars" />
        </div>
        <h1 className="intro__name">C.B.M Services</h1>
        <p className="intro__name-sub">&amp; Cars</p>
        <div className="intro__divider" />
        <p className="intro__subtitle">Transport privé</p>
        <p className="intro__signature">Excellence&nbsp;&nbsp;•&nbsp;&nbsp;Confort&nbsp;&nbsp;•&nbsp;&nbsp;Prestige</p>
      </div>
    </div>
  );
}

export default IntroAnimation;