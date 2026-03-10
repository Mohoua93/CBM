import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

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
            {t("nav.home")}
          </NavLink>
          <NavLink to="/a-propos" className={getDesktopLinkClass}>
            {t("nav.about")}
          </NavLink>
          <NavLink to="/services" className={getDesktopLinkClass}>
            {t("nav.services")}
          </NavLink>
          <NavLink to="/flotte" className={getDesktopLinkClass}>
            {t("nav.fleet")}
          </NavLink>
          <NavLink to="/reservation" className={getDesktopLinkClass}>
            {t("nav.booking")}
          </NavLink>
          <NavLink to="/contact" className={getDesktopLinkClass}>
            {t("nav.contact")}
          </NavLink>

          <div className="header__languages">
            <LanguageSwitcher />
          </div>
        </nav>

        {!menuOpen && (
          <button
            className="header__burger"
            type="button"
            aria-label={t("header.openMenu")}
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
            aria-label={t("header.closeMenu")}
            onClick={closeMenu}
          >
            ×
          </button>
        </div>

        <nav className="header__mobile-nav">
          <NavLink to="/" className={getMobileLinkClass} onClick={closeMenu}>
            {t("nav.home")}
          </NavLink>
          <NavLink
            to="/a-propos"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            to="/services"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {t("nav.services")}
          </NavLink>
          <NavLink
            to="/flotte"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {t("nav.fleet")}
          </NavLink>
          <NavLink
            to="/reservation"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {t("nav.booking")}
          </NavLink>
          <NavLink
            to="/contact"
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
            {t("nav.contact")}
          </NavLink>

          <div className="header__mobile-languages">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;