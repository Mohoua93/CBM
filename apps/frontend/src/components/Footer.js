import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            CBM
          </Link>
          <p className="footer__text">
            Service de chauffeur privé premium pour vos déplacements, événements
            et réservations sur mesure.
          </p>
        </div>

        <div className="footer__links">
          <h3 className="footer__title">Navigation</h3>
          <nav className="footer__nav">
            <Link to="/" className="footer__link">
              Accueil
            </Link>
            <Link to="/a-propos" className="footer__link">
              À propos
            </Link>
            <Link to="/services" className="footer__link">
              Services
            </Link>
            <Link to="/flotte" className="footer__link">
              Flotte
            </Link>
            <Link to="/reservation" className="footer__link">
              Réservation
            </Link>
            <Link to="/contact" className="footer__link">
              Contact
            </Link>
          </nav>
        </div>

        <div className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <p className="footer__text">Disponible pour vos demandes 24/7</p>
          <a href="tel:+33000000000" className="footer__link">
            +33 0 00 00 00 00
          </a>
          <a href="mailto:contact@cbm.fr" className="footer__link">
            contact@cbm.fr
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {currentYear} CBM. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;