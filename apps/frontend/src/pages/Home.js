import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  return (
    <div className="home">
      <section className="home__hero home__hero--reveal">
        <div className="home__hero-overlay"></div>

        <div className="home__hero-content home__hero-content--reveal">
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

        <div className="home__hero-media home__hero-media--reveal">
          <img
            src={heroImage}
            alt={t("home.hero.imageAlt")}
            className="home__hero-image"
          />
        </div>
      </section>

      <section className="home__services home__services--reveal">
        <div className="section-heading section-heading--center">
          <h2>{t("home.services.title")}</h2>
        </div>

        <div className="services-grid services-grid--reveal">
          <article className="service-card">
            <div className="service-card__icon-wrap">
              <CarIcon />
            </div>
            <h3>{t("home.services.privateTransport.title")}</h3>
            <p>{t("home.services.privateTransport.description")}</p>
            <Link to="/services" className="service-card__link">
              {t("home.services.learnMore")}
            </Link>
          </article>

          <article className="service-card">
            <div className="service-card__icon-wrap">
              <BellIcon />
            </div>
            <h3>{t("home.services.concierge.title")}</h3>
            <p>{t("home.services.concierge.description")}</p>
            <Link to="/services" className="service-card__link">
              {t("home.services.learnMore")}
            </Link>
          </article>

          <article className="service-card">
            <div className="service-card__icon-wrap">
              <ClockIcon />
            </div>
            <h3>{t("home.services.availability.title")}</h3>
            <p>{t("home.services.availability.description")}</p>
            <Link to="/services" className="service-card__link">
              {t("home.services.learnMore")}
            </Link>
          </article>
        </div>
      </section>

      <section className="home__booking home__booking--reveal">
        <div className="section-heading section-heading--center">
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
                <option>{t("home.booking.serviceOption3")}</option>
              </select>
            </div>

            <div className="booking-field">
              <label htmlFor="date">{t("home.booking.dateLabel")}</label>
              <input id="date" name="date" type="date" />
            </div>

            <div className="booking-field">
              <label htmlFor="passengers">
                {t("home.booking.passengersLabel")}
              </label>
              <input
                id="passengers"
                name="passengers"
                type="number"
                min="1"
                placeholder={t("home.booking.passengersPlaceholder")}
              />
            </div>
          </div>

          <div className="booking-form__actions">
            <button type="submit" className="home__btn home__btn--gold">
              {t("home.booking.submitButton")}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Home;