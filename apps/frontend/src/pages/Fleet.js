import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Fleet.css";

// Import des images
import fleetHero from "../assets/fleet-hero.jpg";
import mercedesS from "../assets/ClassS.png";
import mercedesE from "../assets/ClassE.png";
import mercedesV from "../assets/ClassV.png";
import rangeRover from "../assets/RangeRover.png";

const VEHICLES_CATALOG = [
  {
    id: "mercedesSE",
    img: mercedesS,
    path: "/flotte/mercedes-classe-s",
  },
  {
    id: "mercedesE",
    img: mercedesE,
    path: "/flotte/mercedes-classe-e",
  },
  {
    id: "mercedesV",
    img: mercedesV,
    path: "/flotte/mercedes-classe-v",
  },
  {
    id: "rangeRover",
    img: rangeRover,
    path: "/flotte/range-rover",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Fleet() {
  const { t } = useTranslation();

  return (
    <div className="fleet-page">
      <section className="fleet">
        <motion.section
          className="fleet-hero"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          style={{ backgroundImage: `url(${fleetHero})` }}
        >
          <div className="fleet-hero__overlay" />

          <div className="fleet-hero__content">
            <motion.h1
              className="fleet-hero__title"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("fleetPage.hero.title")}
            </motion.h1>

            <motion.p
              className="fleet-hero__subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {t("fleetPage.hero.subtitle")}
            </motion.p>

            <motion.div
              className="fleet-hero__actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#fleet-grid" className="fleet-hero__btn">
                {t("fleetPage.hero.cta")}
              </a>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          id="fleet-grid"
          className="fleet__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {VEHICLES_CATALOG.map((vehicle) => (
            <motion.article
              key={vehicle.id}
              className="fleet-card-mini"
              variants={cardVariants}
            >
              <div className="fleet-card-mini__image-container">
                <img
                  src={vehicle.img}
                  alt={t(`fleetPage.vehicles.${vehicle.id}.alt`)}
                  className="fleet-card-mini__img"
                />
              </div>

              <div className="fleet-card-mini__content">
                <h2 className="fleet-card-mini__title">
                  {t(`fleetPage.vehicles.${vehicle.id}.title`)}
                </h2>

                <p className="fleet-card-mini__description">
                  {t(`fleetPage.vehicles.${vehicle.id}.text`)}
                </p>

                <Link to={vehicle.path} className="btn-know-more">
                  {t("fleetPage.cta")}
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default Fleet;