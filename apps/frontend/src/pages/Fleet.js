import { useTranslation } from "react-i18next";
import "../styles/Fleet.css";
import mercedesSE from "../assets/class-S.png";
import mercedesV from "../assets/class-V.png";
import rangeRover from "../assets/range-rover.png";

function Fleet() {
  const { t } = useTranslation();

  return (
    <div className="fleet-page">
      <section className="fleet">
        <div className="fleet__content">
          <span className="fleet__eyebrow">{t("fleetPage.eyebrow")}</span>

          <h1 className="fleet__title">
            {t("fleetPage.titleLine1")}
            <br />
            {t("fleetPage.titleLine2")}
          </h1>

          <p className="fleet__text">{t("fleetPage.text1")}</p>
          <p className="fleet__text">{t("fleetPage.text2")}</p>
          <p className="fleet__text">{t("fleetPage.text3")}</p>
        </div>

        <div className="fleet__gallery">
          <article className="fleet-card">
            <img
              src={mercedesSE}
              alt={t("fleetPage.vehicles.mercedesSE.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.mercedesSE.title")}</h2>
              <p>{t("fleetPage.vehicles.mercedesSE.text")}</p>
            </div>
          </article>

          <article className="fleet-card">
            <img
              src={mercedesV}
              alt={t("fleetPage.vehicles.mercedesV.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.mercedesV.title")}</h2>
              <p>{t("fleetPage.vehicles.mercedesV.text")}</p>
            </div>
          </article>

          <article className="fleet-card">
            <img
              src={rangeRover}
              alt={t("fleetPage.vehicles.rangeRover.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.rangeRover.title")}</h2>
              <p>{t("fleetPage.vehicles.rangeRover.text")}</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Fleet;