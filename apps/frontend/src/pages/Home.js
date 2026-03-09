import { Link } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/hero-vtc.png";

function CarIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true">
      <path
        d="M16 38h32l-4-14a4 4 0 0 0-4-3H24a4 4 0 0 0-4 3l-4 14Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M14 38h36a4 4 0 0 1 4 4v8h-6v-4H16v4h-6v-8a4 4 0 0 1 4-4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="20" cy="50" r="3" fill="currentColor" />
      <circle cx="44" cy="50" r="3" fill="currentColor" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true">
      <path
        d="M32 14a10 10 0 0 0-10 10v4c0 5-2 9-5 12l-3 3h36l-3-3c-3-3-5-7-5-12v-4a10 10 0 0 0-10-10Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M26 47a6 6 0 0 0 12 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="32"
        cy="10"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true">
      <circle
        cx="32"
        cy="32"
        r="18"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M32 22v12l8 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-overlay"></div>

        <div className="home__hero-content">
          <h1 className="home__title">
            Chauffeur Privé
            <br />
            de Prestige
          </h1>

          <p className="home__subtitle">
            Transport haut de gamme pour événements, mariages, soirées...
          </p>

          <div className="home__actions">
            <Link to="/reservation" className="home__btn home__btn--gold">
              Réserver
            </Link>

            <Link to="/contact" className="home__btn home__btn--outline">
              Contactez-nous
            </Link>
          </div>
        </div>

        <div className="home__hero-media">
          <img
            src={heroImage}
            alt="Chauffeur privé CBM"
            className="home__hero-image"
          />
        </div>
      </section>

      <section className="home__services">
        <div className="section-heading section-heading--center">
          <h2>Nos Services</h2>
        </div>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <CarIcon />
            </div>
            <h3>Transport Privé</h3>
            <p>Trajets personnalisés pour courtes et longues distances.</p>
            <Link to="/services" className="service-card__link">
              En savoir plus
            </Link>
          </article>

          <article className="service-card">
            <div className="service-card__icon-wrap">
              <BellIcon />
            </div>
            <h3>Conciergerie</h3>
            <p>Réservations de restaurants, activités, événements.</p>
            <Link to="/services" className="service-card__link">
              En savoir plus
            </Link>
          </article>

          <article className="service-card">
            <div className="service-card__icon-wrap">
              <ClockIcon />
            </div>
            <h3>Mise à Disposition</h3>
            <p>Véhicule avec chauffeur pour plusieurs heures.</p>
            <Link to="/services" className="service-card__link">
              En savoir plus
            </Link>
          </article>
        </div>
      </section>

      <section className="home__booking">
        <div className="section-heading section-heading--center">
          <h2>Réservation</h2>
          <p>Réservez votre chauffeur privé avec CBM</p>
        </div>

        <form className="booking-form">
          <div className="booking-form__grid">
            <div className="booking-field">
              <label htmlFor="service">Type de service</label>
              <select id="service" name="service">
                <option>Choisir un service</option>
                <option>Transport privé</option>
                <option>Conciergerie</option>
                <option>Mise à disposition</option>
              </select>
            </div>

            <div className="booking-field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" />
            </div>

            <div className="booking-field">
              <label htmlFor="passengers">Nombre de passagers</label>
              <input
                id="passengers"
                name="passengers"
                type="number"
                min="1"
                placeholder="1"
              />
            </div>
          </div>

          <div className="booking-form__actions">
            <button type="submit" className="home__btn home__btn--gold">
              Réserver
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;