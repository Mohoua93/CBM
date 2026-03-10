import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2>CBM</h2>
      </div>

      <ul className="navbar-links">
        <li>{t("nav.home")}</li>
        <li>{t("nav.services")}</li>
        <li>{t("nav.about")}</li>
        <li>{t("nav.fleet")}</li>
        <li>{t("nav.contact")}</li>
      </ul>

      <div className="navbar-right">
        <button>{t("nav.booking")}</button>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}

export default Navbar;