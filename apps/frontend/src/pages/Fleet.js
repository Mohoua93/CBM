import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/Fleet.css";

// Import des images
import fleetHero from "../assets/fleet-hero.jpg";
import mercedesS from "../assets/class-S.png";
import mercedesE from "../assets/class-E.png";
import mercedesV from "../assets/class-V.png";
import rangeRover from "../assets/range-rover.png";

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

        {/* HERO */}
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
              L’excellence du transport haut de gamme
            </motion.h1>

            <motion.p
              className="fleet-hero__subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              Découvrez une sélection de véhicules d’exception alliant
              élégance, confort et prestige pour chacun de vos trajets.
            </motion.p>

            <motion.div
              className="fleet-hero__actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#fleet-grid" className="fleet-hero__btn">
                Découvrir la flotte
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* GRID VEHICULES */}
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

                {/* 🔥 PERSONNALISATION DES 2 PREMIÈRES CARDS */}
                {vehicle.id === "mercedesSE" ? (
                  <>
                    <h2 className="fleet-card-mini__title">
                      Class S
                    </h2>

                    <p className="fleet-card-mini__description">
                      Expérimentez l’excellence du transport avec notre Classe S.
                      Un service ultra premium alliant confort absolu, discrétion et
                      prestations haut de gamme pour vos trajets les plus exigeants.
                    </p>
                  </>
                ) : vehicle.id === "mercedesE" ? (
                  <>
                    <h2 className="fleet-card-mini__title">
                      Class E
                    </h2>

                    <p className="fleet-card-mini__description">
                      Une solution premium idéale pour vos déplacements quotidiens.
                      Profitez d’un confort supérieur et d’un service élégant,
                      tout en restant plus accessible que la Classe S.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="fleet-card-mini__title">
                      {t(`fleetPage.vehicles.${vehicle.id}.title`)}
                    </h2>

                    <p className="fleet-card-mini__description">
                      {t(`fleetPage.vehicles.${vehicle.id}.text`)}
                    </p>
                  </>
                )}

                <Link to={vehicle.path} className="btn-know-more">
                  En savoir plus
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