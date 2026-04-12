import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Home.css";

// --- COMPOSANTS ICONES ---
function CarIcon() {
  return <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true"><path d="M16 38h32l-4-14a4 4 0 0 0-4-3H24a4 4 0 0 0-4 3l-4 14Z" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M14 38h36a4 4 0 0 1 4 4v8h-6v-4H16v4h-6v-8a4 4 0 0 1 4-4Z" fill="none" stroke="currentColor" strokeWidth="2.5" /><circle cx="20" cy="50" r="3" fill="currentColor" /><circle cx="44" cy="50" r="3" fill="currentColor" /></svg>;
}

function BellIcon() {
  return <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true"><path d="M32 14a10 10 0 0 0-10 10v4c0 5-2 9-5 12l-3 3h36l-3-3c-3-3-5-7-5-12v-4a10 10 0 0 0-10-10Z" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M26 47a6 6 0 0 0 12 0" fill="none" stroke="currentColor" strokeWidth="2.5" /><circle cx="32" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="2.5" /></svg>;
}

function ClockIcon() {
  return <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true"><circle cx="32" cy="32" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" /><path d="M32 22v12l8 5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>;
}

function GreeterIcon() {
  return (
    <svg viewBox="0 0 64 64" className="service-card__icon" aria-hidden="true">
      <path d="M32 20a6 6 0 1 0-6-6 6 6 0 0 0 6 6Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M18 50v-4a8 8 0 0 1 8-8h12a8 8 0 0 1 8 8v4" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M42 26l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// --- COMPOSANT HOME ---
function Home() {
  const { t } = useTranslation();

  return (
    <div className="home">
      {/* 1. HERO SECTION */}
      <section className="home__hero">
        <div className="home__hero-content">
          <h1 className="home__title">
            {t("home.hero.titleLine1")}
            <br />
            {t("home.hero.titleLine2")}
          </h1>
          <p className="home__subtitle">{t("home.hero.subtitle")}</p>
          <div className="home__actions">
            <Link to="/reservation" className="home__btn home__btn--gold">
              {t("home.hero.bookingButton")}
            </Link>
            <Link to="/contact" className="home__btn home__btn--outline">
              {t("home.hero.contactButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* 2. RÉSERVATION RAPIDE */}
      <section className="home__booking">
        <div className="section-heading">
          <h2>{t("home.booking.title")}</h2>
          <p>{t("home.booking.subtitle")}</p>
        </div>
        <form className="booking-form">
          <div className="booking-form__grid">
            <div className="booking-field">
              <label htmlFor="service">{t("home.booking.serviceLabel")}</label>
              <select id="service" name="service">
                <option>{t("home.booking.servicePlaceholder")}</option>
                <option>{t("home.booking.serviceOption1")}</option>
                <option>{t("home.booking.serviceOption2")}</option>
              </select>
            </div>
            <div className="booking-field">
              <label htmlFor="date">{t("home.booking.dateLabel")}</label>
              <input id="date" name="date" type="date" />
            </div>
            <div className="booking-field">
              <label htmlFor="passengers">{t("home.booking.passengersLabel")}</label>
              <input id="passengers" name="passengers" type="number" min="1" placeholder="1" />
            </div>
          </div>
          <div className="booking-form__actions">
            <button type="submit" className="home__btn home__btn--gold">
              {t("home.booking.submitButton")}
            </button>
          </div>
        </form>
      </section>

      {/* 3. NOS SERVICES */}
      <section className="home__services">
        <div className="section-heading">
          <h2>{t("home.services.title")}</h2>
        </div>
        <div className="services-grid">
          {/* SERVICE 1 : TRANSPORT PRIVÉ */}
          <article className="service-card">
            <div className="service-card__icon-wrap"><CarIcon /></div>
            <h3>{t("home.services.privateTransport.title")}</h3>
            <p>{t("home.services.privateTransport.description")}</p>
            <Link to="/transport-prive" className="service-card__link">{t("home.services.learnMore")}</Link>
          </article>

          {/* SERVICE 2 : CONCIERGERIE */}
          <article className="service-card">
            <div className="service-card__icon-wrap"><BellIcon /></div>
            <h3>{t("home.services.concierge.title")}</h3>
            <p>{t("home.services.concierge.description")}</p>
            <Link to="/conciergerie" className="service-card__link">{t("home.services.learnMore")}</Link>
          </article>

          {/* SERVICE 3 : GREETER */}
          <article className="service-card">
            <div className="service-card__icon-wrap"><GreeterIcon /></div>
            <h3>{t("home.services.greeter.title", "Service Greeter")}</h3>
            <p>{t("home.services.greeter.description", "Un accueil personnalisé et privilégié dès votre arrivée pour une transition fluide et sans attente.")}</p>
            <Link to="/greeter" className="service-card__link">{t("home.services.learnMore")}</Link>
          </article>

          {/* SERVICE 4 : MISE À DISPOSITION */}
          <article className="service-card">
            <div className="service-card__icon-wrap"><ClockIcon /></div>
            <h3>{t("home.services.availability.title")}</h3>
            <p>{t("home.services.availability.description")}</p>
            <Link to="/mise-a-disposition" className="service-card__link">{t("home.services.learnMore")}</Link>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Home;