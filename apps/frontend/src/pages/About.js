import { useTranslation } from "react-i18next";
import "../styles/About.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">
            {t("aboutPage.hero.eyebrow")}
          </span>

          <h1 className="about-hero__title">
            {t("aboutPage.hero.titleLine1")}
            <br />
            {t("aboutPage.hero.titleLine2")}
          </h1>

          <p className="about-hero__text">{t("aboutPage.hero.text")}</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__intro">
          <h2>{t("aboutPage.story.title")}</h2>
          <p>{t("aboutPage.story.text")}</p>
        </div>

        <div className="about-story__grid">
          <article className="about-card">
            <h3>{t("aboutPage.cards.experience.title")}</h3>
            <p>{t("aboutPage.cards.experience.text")}</p>
          </article>

          <article className="about-card">
            <h3>{t("aboutPage.cards.family.title")}</h3>
            <p>{t("aboutPage.cards.family.text")}</p>
          </article>

          <article className="about-card">
            <h3>{t("aboutPage.cards.premium.title")}</h3>
            <p>{t("aboutPage.cards.premium.text")}</p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__content">
          <h2>{t("aboutPage.values.title")}</h2>

          <div className="about-values__list">
            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.discretion.label")}
              </span>
              <p>{t("aboutPage.values.discretion.text")}</p>
            </div>

            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.punctuality.label")}
              </span>
              <p>{t("aboutPage.values.punctuality.text")}</p>
            </div>

            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.excellence.label")}
              </span>
              <p>{t("aboutPage.values.excellence.text")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;