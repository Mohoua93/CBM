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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo">
          CBM
        </NavLink>

        <nav className="header__nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            À propos
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/flotte"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Flotte
          </NavLink>

          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Réservation
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "header__link header__link--active" : "header__link"
            }
          >
            Contact
          </NavLink>
        </nav>

        <button
          className={`header__burger ${menuOpen ? "header__burger--open" : ""}`}
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            À propos
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/flotte"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            Flotte
          </NavLink>

          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
            onClick={closeMenu}
          >
            Réservation
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "header__mobile-link header__mobile-link--active"
                : "header__mobile-link"
            }
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