import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const getDesktopLinkClass = ({ isActive }) =>
    isActive ? "header__link header__link--active" : "header__link";

  const getMobileLinkClass = ({ isActive }) =>
    isActive
      ? "header__mobile-link header__mobile-link--active"
      : "header__mobile-link";

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          CBM
        </NavLink>

        <nav className="header__nav">
          <NavLink to="/" className={getDesktopLinkClass}>
            Accueil
          </NavLink>
          <NavLink to="/a-propos" className={getDesktopLinkClass}>
            À propos
          </NavLink>
          <NavLink to="/services" className={getDesktopLinkClass}>
            Services
          </NavLink>
          <NavLink to="/flotte" className={getDesktopLinkClass}>
            Flotte
          </NavLink>
          <NavLink to="/reservation" className={getDesktopLinkClass}>
            Réservation
          </NavLink>
          <NavLink to="/contact" className={getDesktopLinkClass}>
            Contact
          </NavLink>
        </nav>

        {!menuOpen && (
          <button
            className="header__burger"
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </div>

      <div
        className={`header__mobile-menu ${
          menuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
        <div className="header__mobile-top">
          <NavLink to="/" className="header__mobile-logo" onClick={closeMenu}>
            CBM
          </NavLink>

          <button
            className="header__mobile-close"
            type="button"
            aria-label="Fermer le menu"
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="header__mobile-nav">
          <NavLink to="/" className={getMobileLinkClass} onClick={closeMenu}>
            Accueil
          </NavLink>
          <NavLink
            to="/a-propos"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            À propos
          </NavLink>
          <NavLink
            to="/services"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/flotte"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            Flotte
          </NavLink>
          <NavLink
            to="/reservation"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            Réservation
          </NavLink>
          <NavLink
            to="/contact"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;