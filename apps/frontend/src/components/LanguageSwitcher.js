import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/LanguageSwitcher.css";

const languages = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
  { code: "tr", flag: "🇹🇷", label: "Türkçe" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
  { code: "th", flag: "🇹🇭", label: "ไทย" },
  { code: "zh", flag: "🇨🇳", label: "中文" },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("cbm_language", lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="language-switcher">
      {languages.map((language) => (
        <button
          key={language.code}
          type="button"
          onClick={() => changeLanguage(language.code)}
          aria-label={language.label}
          title={language.label}
        >
          {language.flag}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;