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
          <Link to="/" className="footer__logo">
            CBM
          </Link>
          <p className="footer__text">{t("footer.description")}</p>
        </div>

        <div className="footer__links">
          <h3 className="footer__title">{t("footer.navigationTitle")}</h3>
          <nav className="footer__nav">
            <Link to="/" className="footer__link">
              {t("nav.home")}
            </Link>
            <Link to="/a-propos" className="footer__link">
              {t("nav.about")}
            </Link>
            <Link to="/services" className="footer__link">
              {t("nav.services")}
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

        <div className="footer__contact">
          <h3 className="footer__title">{t("footer.contactTitle")}</h3>
          <p className="footer__text">{t("footer.availability")}</p>
          <a href="tel:+33000000000" className="footer__link">
            +33 0 00 00 00 00
          </a>
          <a href="mailto:contact@cbm.fr" className="footer__link">
            contact@cbm.fr
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {currentYear} CBM. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;