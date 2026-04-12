import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/Greeter.css';

// Import de l'image (assure-toi d'avoir une image nommée greeter-service.jpg dans assets)
import greeterImg from '../assets/hero-mercedes.png'; 

function Greeter() {
  const { t } = useTranslation();

  // Animation au scroll (Simple reveal)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="greeter-page">
      {/* Hero Section Page */}
      <section className="greeter-hero">
        <div className="greeter-hero__overlay"></div>
        <div className="greeter-hero__content reveal">
          <h1>{t('greeter.title', 'Service Greeter')}</h1>
          <p>{t('greeter.subtitle', 'L\'excellence de l\'accueil personnalisé dès votre arrivée.')}</p>
        </div>
      </section>

      {/* Explication du service */}
      <section className="greeter-details">
        <div className="greeter-container">
          <div className="greeter-grid">
            <div className="greeter-text reveal">
              <h2 className="gold-text">Plus qu'un transport, un accompagnement</h2>
              <p>
                Oubliez le stress des aéroports et des gares bondées. Avec notre service <strong>Greeter</strong>, 
                votre chauffeur ou un hôte dédié vous attend dès la sortie de votre vol ou de votre train avec une tablette à votre nom.
              </p>
              <ul className="greeter-list">
                <li>Aide au transport de vos bagages.</li>
                <li>Accompagnement prioritaire vers votre véhicule.</li>
                <li>Suivi de votre vol en temps réel pour une ponctualité absolue.</li>
                <li>Accueil VIP multilingue.</li>
              </ul>
              <Link to="/reservation" className="btn-gold">Réserver ce service</Link>
            </div>
            
            <div className="greeter-image reveal">
              <img src={greeterImg} alt="Service d'accueil VIP" />
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}

export default Greeter;