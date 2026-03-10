import { useTranslation } from "react-i18next";
import "../styles/Contact.css";
import heroImage from "../assets/hero-vtc.png";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-info__icon" aria-hidden="true">
      <path
        d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.28.54 3.48.54a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.18 2.38.54 3.48a1 1 0 0 1-.24 1l-2.2 2.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-info__icon" aria-hidden="true">
      <path
        d="M4 6h16v12H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="contact-info__icon" aria-hidden="true">
      <path
        d="M20 11.9A8 8 0 0 1 8.2 19l-4.2 1.2L5.2 16A8 8 0 1 1 20 11.9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 8.9c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3 1 2.6 1.1 2.8.1.2 1.8 2.9 4.4 3.9 2.1.8 2.5.6 3 .6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1 .1-1.1-.1-.1-.4-.2-.9-.5s-1.6-.8-1.8-.9c-.2-.1-.4-.1-.6.1s-.7.9-.8 1c-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__overlay"></div>

        <div className="contact-hero__content">
          <h1>{t("contactPage.hero.title")}</h1>
        </div>

        <div className="contact-hero__media">
          <img
            src={heroImage}
            alt={t("contactPage.hero.imageAlt")}
            className="contact-hero__image"
          />
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-card__intro">
            <h2>{t("contactPage.intro.title")}</h2>
            <p>{t("contactPage.intro.text")}</p>
          </div>

          <form className="contact-form">
            <div className="contact-form__row contact-form__row--full">
              <input
                type="text"
                name="name"
                placeholder={t("contactPage.form.namePlaceholder")}
              />
            </div>

            <div className="contact-form__row">
              <input
                type="tel"
                name="phone"
                placeholder={t("contactPage.form.phonePlaceholder")}
              />
              <input
                type="email"
                name="email"
                placeholder={t("contactPage.form.emailPlaceholder")}
              />
            </div>

            <div className="contact-form__row contact-form__row--full">
              <textarea
                name="message"
                placeholder={t("contactPage.form.messagePlaceholder")}
                rows="8"
              ></textarea>
            </div>

            <button type="submit" className="contact-form__submit">
              {t("contactPage.form.submitButton")}
            </button>
          </form>

          <div className="contact-info">
            <article className="contact-info__block">
              <h3>{t("contactPage.info.title")}</h3>

              <div className="contact-info__item">
                <PhoneIcon />
                <a href="tel:+33780901234">+33 7 80 90 12 34</a>
              </div>

              <div className="contact-info__item">
                <MailIcon />
                <a href="mailto:contact@cbm-chauffeur.com">
                  contact@cbm-chauffeur.com
                </a>
              </div>
            </article>

            <article className="contact-info__block">
              <h3>{t("contactPage.whatsapp.title")}</h3>

              <div className="contact-info__item">
                <WhatsAppIcon />
                <a
                  href="https://wa.me/33780901234"
                  target="_blank"
                  rel="noreferrer"
                >
                  +33 7 80 90 12 34
                </a>
              </div>

              <a
                href="https://wa.me/33780901234"
                target="_blank"
                rel="noreferrer"
                className="contact-info__whatsapp-btn"
              >
                {t("contactPage.whatsapp.button")}
              </a>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;