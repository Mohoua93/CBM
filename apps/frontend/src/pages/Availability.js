import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "../styles/Availability.css";

import heroAvailability from "../assets/hero-mise-a-disposition.png";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function Availability() {
  return (
    <main className="availability-page">
      <section
        className="availability-hero"
        style={{ backgroundImage: `url(${heroAvailability})` }}
      >
        <div className="availability-hero__overlay" />

        <motion.div
          className="availability-hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          

          <h1 className="availability-hero__title">
            Mise à <br />
            <span>disposition</span>
          </h1>

          <p className="availability-hero__text">
            Profitez d’un chauffeur privé et d’un véhicule haut de gamme à votre
            disposition pour quelques heures, une journée complète ou plusieurs
            jours, selon vos besoins.
          </p>

          <div className="availability-hero__actions">
            <Link to="/reservation" className="availability-hero__btn">
              Réserver maintenant
            </Link>

            <Link to="/contact" className="availability-hero__btn availability-hero__btn--ghost">
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="availability-intro">
        <motion.div
          className="availability-intro__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          

          <h2>
            Votre chauffeur reste disponible pendant toute la durée de votre
            programme.
          </h2>

          <p>
            La mise à disposition est idéale pour vos rendez-vous professionnels,
            événements privés, journées shopping, déplacements VIP, séminaires,
            mariages ou accompagnements personnalisés. Vous gardez le contrôle
            sur votre planning, sans contrainte de stationnement, de circulation
            ou d’attente.
          </p>
        </motion.div>
      </section>

      <section className="availability-benefits">
        <motion.div
          className="availability-benefits__grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            className="availability-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Flexibilité totale</h3>
            <p>
              Votre chauffeur s’adapte à votre rythme, à vos changements de
              programme et à vos différents arrêts tout au long de la prestation.
            </p>
          </motion.article>

          <motion.article
            className="availability-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Confort haut de gamme</h3>
            <p>
              Voyagez dans un véhicule premium, propre, silencieux et élégant,
              pensé pour vos trajets professionnels comme personnels.
            </p>
          </motion.article>

          <motion.article
            className="availability-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Discrétion absolue</h3>
            <p>
              Nos chauffeurs assurent un service professionnel, ponctuel et
              discret, adapté aux exigences d’une clientèle premium.
            </p>
          </motion.article>
        </motion.div>
      </section>

      <section className="availability-program">
        <div className="availability-program__content">
          <motion.div
            className="availability-program__heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            

            <h2>Une solution adaptée à tous vos déplacements sur mesure.</h2>
          </motion.div>

          <motion.div
            className="availability-program__list"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="availability-program__item" variants={cardItem}>
              
              <p>
                Rendez-vous professionnels, déplacements entre plusieurs sites,
                séminaires, salons et journées de représentation.
              </p>
            </motion.div>

            <motion.div className="availability-program__item" variants={cardItem}>
         
              <p>
                Mariages, soirées privées, événements corporate, galas,
                anniversaires ou prestations VIP.
              </p>
            </motion.div>

            <motion.div className="availability-program__item" variants={cardItem}>
             
              <p>
                Journée shopping, restaurant, hôtel, accompagnement familial ou
                programme touristique personnalisé.
              </p>
            </motion.div>

            <motion.div className="availability-program__item" variants={cardItem}>
              
              <p>
                Mise à disposition à la demi-journée, journée complète ou sur
                plusieurs jours selon votre planning.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="availability-cta">
        <motion.div
          className="availability-cta__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          

          <h2>Besoin d’un chauffeur privé pour plusieurs heures ?</h2>

          <p>
            Indiquez-nous votre programme, vos horaires, le véhicule souhaité et
            le nombre de passagers. Nous vous proposerons une solution adaptée à
            votre besoin.
          </p>

          <Link to="/reservation" className="availability-cta__btn">
            Faire une demande
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Availability;