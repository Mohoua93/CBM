import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <NavLink to="/">CBM</NavLink>
        </div>

        <nav className="header__nav">
          <NavLink to="/" className="header__link">
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className="header__link">
            À propos
          </NavLink>
          <NavLink to="/services" className="header__link">
            Services
          </NavLink>
          <NavLink to="/flotte" className="header__link">
            Flotte
          </NavLink>
          <NavLink to="/reservation" className="header__link">
            Réservation
          </NavLink>
          <NavLink to="/contact" className="header__link">
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;