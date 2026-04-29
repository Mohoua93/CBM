import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "../styles/PrivateTransport.css";

import heroPrivateTransport from "../assets/hero-transport-prive.png";

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

function PrivateTransport() {
  return (
    <main className="private-transport-page">
      <section
        className="private-transport-hero"
        style={{ backgroundImage: `url(${heroPrivateTransport})` }}
      >
        <div className="private-transport-hero__overlay" />

        <motion.div
          className="private-transport-hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
        

          <h1 className="private-transport-hero__title">
            Transport privé<br />
            
          </h1>

          <p className="private-transport-hero__text">
            Profitez d’un service de transport privé haut de gamme, pensé pour
            vos trajets professionnels, personnels, événements et transferts avec
            chauffeur. Confort, ponctualité et discrétion à chaque déplacement.
          </p>

          <div className="private-transport-hero__actions">
            <Link to="/reservation" className="private-transport-hero__btn">
              Réserver un trajet
            </Link>

            <Link
              to="/flotte"
              className="private-transport-hero__btn private-transport-hero__btn--ghost"
            >
              Découvrir la flotte
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="private-transport-intro">
        <motion.div
          className="private-transport-intro__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          

          <h2>
            Un chauffeur privé pour vos déplacements quotidiens comme vos
            trajets d’exception.
          </h2>

          <p>
            Notre service de transport privé vous accompagne avec une prise en
            charge personnalisée, des véhicules premium et une organisation
            fluide. Que ce soit pour un transfert aéroport, un rendez-vous
            professionnel, une soirée, un événement ou un déplacement longue
            distance, chaque trajet est préparé avec soin.
          </p>
        </motion.div>
      </section>

      <section className="private-transport-benefits">
        <motion.div
          className="private-transport-benefits__grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            className="private-transport-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Ponctualité</h3>
            <p>
              Votre chauffeur anticipe votre trajet, les conditions de
              circulation et vos contraintes horaires pour une prise en charge
              fiable.
            </p>
          </motion.article>

          <motion.article
            className="private-transport-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Confort premium</h3>
            <p>
              Voyagez dans des véhicules haut de gamme, entretenus avec soin,
              spacieux, silencieux et adaptés à vos besoins.
            </p>
          </motion.article>

          <motion.article
            className="private-transport-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Service discret</h3>
            <p>
              Un accompagnement professionnel, sobre et confidentiel pour vos
              déplacements privés, business ou événementiels.
            </p>
          </motion.article>
        </motion.div>
      </section>

      <section className="private-transport-services">
        <div className="private-transport-services__content">
          <motion.div
            className="private-transport-services__heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            

            <h2>Un service adapté à chaque besoin de transport.</h2>
          </motion.div>

          <motion.div
            className="private-transport-services__list"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="private-transport-services__item"
              variants={cardItem}
            >
       
              <p>
                Prise en charge à l’heure, suivi des horaires, accueil soigné et
                transfert confortable vers votre destination.
              </p>
            </motion.div>

            <motion.div
              className="private-transport-services__item"
              variants={cardItem}
            >
              
              <p>
                Déplacements business, réunions, salons, séminaires et
                transport de collaborateurs ou clients VIP.
              </p>
            </motion.div>

            <motion.div
              className="private-transport-services__item"
              variants={cardItem}
            >
           
              <p>
                Mariage, soirée, restaurant, anniversaire, gala ou événement
                premium avec prise en charge élégante.
              </p>
            </motion.div>

            <motion.div
              className="private-transport-services__item"
              variants={cardItem}
            >
             
              <p>
                Trajets inter-villes, déplacements régionaux ou transferts longue
                distance dans un cadre confortable et sécurisé.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="private-transport-experience">
        <motion.div
          className="private-transport-experience__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          

          <h2>Une prise en charge simple, claire et professionnelle.</h2>

          <div className="private-transport-experience__steps">
            <div className="private-transport-experience__step">
              
              <p>Vous indiquez votre lieu de départ, destination et horaires.</p>
            </div>

            <div className="private-transport-experience__step">
              
              <p>
                Nous confirmons la disponibilité du véhicule et organisons la
                prestation.
              </p>
            </div>

            <div className="private-transport-experience__step">
              
              <p>
                Votre chauffeur assure la prise en charge et le trajet dans les
                meilleures conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="private-transport-cta">
        <motion.div
          className="private-transport-cta__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          

          <h2>Besoin d’un chauffeur privé pour votre prochain trajet ?</h2>

          <p>
            Envoyez-nous votre demande avec vos horaires, votre destination, le
            nombre de passagers et le véhicule souhaité. Nous vous proposerons
            une solution adaptée.
          </p>

          <Link to="/reservation" className="private-transport-cta__btn">
            Faire une demande
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default PrivateTransport;