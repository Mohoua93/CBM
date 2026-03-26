import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "../styles/Services.css";

const servicesItems = [
  "airportTransfers",
  "availability",
  "excursions",
  "longDistance",
  "weddingChauffeur",
];

const heroVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const gridVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const highlightVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Services() {
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <section className="services-hero">
        <motion.div
          className="services-hero__content"
          variants={heroVariants}
          initial="hidden"
          animate="show"
        >
          <span className="services-hero__eyebrow">
            {t("servicesPage.hero.eyebrow")}
          </span>

          <h1 className="services-hero__title">
            {t("servicesPage.hero.titleLine1")}
            <br />
            {t("servicesPage.hero.titleLine2")}
          </h1>

          <p className="services-hero__text">
            {t("servicesPage.hero.text")}
          </p>
        </motion.div>
      </section>

      <section className="services-grid-section">
        <motion.div
          className="services-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {servicesItems.map((itemKey) => (
            <motion.article
              className="service-box"
              key={itemKey}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <span className="service-box__number">CBM</span>
              <h2>{t(`servicesPage.list.${itemKey}.title`)}</h2>
              <p>{t(`servicesPage.list.${itemKey}.description`)}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="services-highlight">
        <motion.div
          className="services-highlight__content"
          variants={highlightVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2>{t("servicesPage.highlight.title")}</h2>
          <p>{t("servicesPage.highlight.text")}</p>

          <div className="services-highlight__actions">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/reservation"
                className="services-btn services-btn--gold"
              >
                {t("servicesPage.highlight.bookingButton")}
              </Link>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/contact"
                className="services-btn services-btn--outline"
              >
                {t("servicesPage.highlight.contactButton")}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Services;