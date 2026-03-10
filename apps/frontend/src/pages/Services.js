import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Services.css";

const servicesItems = [
  "airportTransfers",
  "availability",
  "excursions",
  "longDistance",
  "weddingChauffeur",
];

function Services() {
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">
            {t("servicesPage.hero.eyebrow")}
          </span>

          <h1 className="services-hero__title">
            {t("servicesPage.hero.titleLine1")}
            <br />
            {t("servicesPage.hero.titleLine2")}
          </h1>

          <p className="services-hero__text">
            {t("servicesPage.hero.text")}
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {servicesItems.map((itemKey) => (
            <article className="service-box" key={itemKey}>
              <span className="service-box__number">CBM</span>
              <h2>{t(`servicesPage.list.${itemKey}.title`)}</h2>
              <p>{t(`servicesPage.list.${itemKey}.description`)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-highlight">
        <div className="services-highlight__content">
          <h2>{t("servicesPage.highlight.title")}</h2>
          <p>{t("servicesPage.highlight.text")}</p>

          <div className="services-highlight__actions">
            <Link to="/reservation" className="services-btn services-btn--gold">
              {t("servicesPage.highlight.bookingButton")}
            </Link>
            <Link to="/contact" className="services-btn services-btn--outline">
              {t("servicesPage.highlight.contactButton")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;