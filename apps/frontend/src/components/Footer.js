import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Retour à l'accueil">
            <span className="footer__logo-main">C.B.M</span>
            <span className="footer__logo-sub">Services & Cars</span>
          </Link>

          <p className="footer__text">{t("footer.description")}</p>
        </div>

        <div className="footer__section">
          <h3 className="footer__title">{t("footer.navigationTitle")}</h3>

          <nav className="footer__nav" aria-label="Navigation du pied de page">
            <Link to="/" className="footer__link">
              {t("nav.home")}
            </Link>

            <Link to="/a-propos" className="footer__link">
              {t("nav.about")}
            </Link>

            <Link to="/flotte" className="footer__link">
              {t("nav.fleet")}
            </Link>

            <Link to="/reservation" className="footer__link">
              {t("nav.booking")}
            </Link>

            <Link to="/contact" className="footer__link">
              {t("nav.contact")}
            </Link>
          </nav>
        </div>

        <div className="footer__section footer__contact">
          <h3 className="footer__title">{t("footer.contactTitle")}</h3>

          <p className="footer__text footer__contact-text">
            {t("footer.availability")}
          </p>

          <div className="footer__contact-list">
            <a href="tel:+33667862728" className="footer__link">
              +33 6 67 86 27 28
            </a>

            <a href="mailto:contact@cbmservicesandcar.fr" className="footer__link">
              contact@cbmservicesandcar.fr
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {currentYear} CBM Services & Cars. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;