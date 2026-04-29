import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/Logo-transp.png";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

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
    `header__link ${isActive ? "header__link--active" : ""}`;

  const getMobileLinkClass = ({ isActive }) =>
    `header__mobile-link ${isActive ? "header__mobile-link--active" : ""}`;

  return (
    <header
      className={`header ${
        scrolled ? "header--scrolled" : "header--transparent"
      }`}
    >
      <div className="header__container">
        <NavLink to="/" className="header__logo" onClick={closeMenu}>
          <img
            src={logo}
            alt="CBM Services & Cars"
            className="header__logo-image"
          />
        </NavLink>

        <nav className="header__nav">
          <NavLink to="/" end className={getDesktopLinkClass}>
            {t("nav.home")}
          </NavLink>
          <NavLink to="/a-propos" className={getDesktopLinkClass}>
            {t("nav.about")}
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
            onClick={toggleMenu}
            aria-label={t("header.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
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
          <button
            className="header__mobile-close"
            type="button"
            onClick={closeMenu}
            aria-label={t("header.closeMenu")}
          >
            ×
          </button>
        </div>

        <nav id="mobile-navigation" className="header__mobile-nav">
          <NavLink
            to="/"
            end
            className={getMobileLinkClass}
            onClick={closeMenu}
          >
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