import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "../styles/Fleet.css";
import mercedesSE from "../assets/class-S.png";
import mercedesV from "../assets/class-V.png";
import rangeRover from "../assets/range-rover.png";

const contentVariants = {
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

const galleryVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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

function Fleet() {
  const { t } = useTranslation();

  return (
    <div className="fleet-page">
      <section className="fleet">
        <motion.div
          className="fleet__content"
          variants={contentVariants}
          initial="hidden"
          animate="show"
        >
          <span className="fleet__eyebrow">{t("fleetPage.eyebrow")}</span>

          <h1 className="fleet__title">
            {t("fleetPage.titleLine1")}
            <br />
            {t("fleetPage.titleLine2")}
          </h1>

          <p className="fleet__text">{t("fleetPage.text1")}</p>
          <p className="fleet__text">{t("fleetPage.text2")}</p>
          <p className="fleet__text">{t("fleetPage.text3")}</p>
        </motion.div>

        <motion.div
          className="fleet__gallery"
          variants={galleryVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.article
            className="fleet-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img
              src={mercedesSE}
              alt={t("fleetPage.vehicles.mercedesSE.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.mercedesSE.title")}</h2>
              <p>{t("fleetPage.vehicles.mercedesSE.text")}</p>
            </div>
          </motion.article>

          <motion.article
            className="fleet-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img
              src={mercedesV}
              alt={t("fleetPage.vehicles.mercedesV.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.mercedesV.title")}</h2>
              <p>{t("fleetPage.vehicles.mercedesV.text")}</p>
            </div>
          </motion.article>

          <motion.article
            className="fleet-card"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <img
              src={rangeRover}
              alt={t("fleetPage.vehicles.rangeRover.alt")}
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>{t("fleetPage.vehicles.rangeRover.title")}</h2>
              <p>{t("fleetPage.vehicles.rangeRover.text")}</p>
            </div>
          </motion.article>
        </motion.div>
      </section>
    </div>
  );
}

export default Fleet;