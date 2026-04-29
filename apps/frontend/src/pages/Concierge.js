import { motion } from "motion/react";
import { Link } from "react-router-dom";
import "../styles/Concierge.css";

import heroConcierge from "../assets/hero-conciergerie.png";

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

function Concierge() {
  return (
    <main className="concierge-page">
      <section
        className="concierge-hero"
        style={{ backgroundImage: `url(${heroConcierge})` }}
      >
        <div className="concierge-hero__overlay" />

        <motion.div
          className="concierge-hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
         

          <h1 className="concierge-hero__title">
            Conciergerie <br />
            
          </h1>

          <p className="concierge-hero__text">
            Un service d’assistance haut de gamme pensé pour simplifier chacun
            de vos déplacements, organiser vos demandes spécifiques et vous
            offrir une expérience fluide, discrète et personnalisée.
          </p>

          <div className="concierge-hero__actions">
            <Link to="/reservation" className="concierge-hero__btn">
              Faire une demande
            </Link>

            <Link
              to="/contact"
              className="concierge-hero__btn concierge-hero__btn--ghost"
            >
              Nous contacter
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="concierge-intro">
        <motion.div
          className="concierge-intro__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          

          <h2>
            Une conciergerie pensée pour accompagner vos besoins avant, pendant
            et après votre trajet.
          </h2>

          <p>
            Notre service de conciergerie vous accompagne dans l’organisation de
            prestations sur mesure : réservations, coordination de planning,
            demandes particulières, accompagnement VIP, accueil client ou
            assistance pendant vos déplacements. Chaque demande est traitée avec
            attention, confidentialité et réactivité.
          </p>
        </motion.div>
      </section>

      <section className="concierge-services">
        <motion.div
          className="concierge-services__grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            className="concierge-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Réservations premium</h3>
            <p>
              Restaurant, hôtel, événement, transfert spécifique ou demande
              personnalisée : nous facilitons vos réservations selon vos
              préférences.
            </p>
          </motion.article>

          <motion.article
            className="concierge-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Organisation sur mesure</h3>
            <p>
              Nous coordonnons vos trajets, horaires, points de rendez-vous et
              besoins particuliers pour une expérience fluide et parfaitement
              maîtrisée.
            </p>
          </motion.article>

          <motion.article
            className="concierge-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>Assistance discrète</h3>
            <p>
              Un accompagnement professionnel et confidentiel, adapté aux
              exigences d’une clientèle privée, business ou événementielle.
            </p>
          </motion.article>
        </motion.div>
      </section>

      <section className="concierge-details">
        <div className="concierge-details__content">
          <motion.div
            className="concierge-details__heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            

            <h2>Une assistance complète pour vos demandes les plus spécifiques.</h2>
          </motion.div>

          <motion.div
            className="concierge-details__list"
            variants={cardsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="concierge-details__item" variants={cardItem}>
              
              <p>
                Coordination de transferts, suivi d’arrivée, adaptation du
                planning, gestion des horaires et accompagnement entre plusieurs
                lieux.
              </p>
            </motion.div>

            <motion.div className="concierge-details__item" variants={cardItem}>
              
              <p>
                Accueil personnalisé, discrétion, exigences particulières,
                assistance privée et service adapté aux profils premium.
              </p>
            </motion.div>

            <motion.div className="concierge-details__item" variants={cardItem}>
              
              <p>
                Coordination chauffeur, transport d’invités, gestion des
                arrivées, départs, horaires et demandes spécifiques.
              </p>
            </motion.div>

            <motion.div className="concierge-details__item" variants={cardItem}>
              
              <p>
                Besoin particulier, organisation urgente, attente prolongée,
                arrêt supplémentaire ou accompagnement spécifique.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="concierge-process">
        <motion.div
          className="concierge-process__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          

          <h2>Un service simple, réactif et entièrement personnalisé.</h2>

          <div className="concierge-process__steps">
            <div className="concierge-process__step">
              
              <p>Vous nous transmettez votre demande ou votre programme.</p>
            </div>

            <div className="concierge-process__step">
              
              <p>Nous analysons vos besoins et organisons la prestation.</p>
            </div>

            <div className="concierge-process__step">
              
              <p>Votre chauffeur et notre équipe assurent le suivi du service.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="concierge-cta">
        <motion.div
          className="concierge-cta__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          

          <h2>Besoin d’un service de conciergerie privé ?</h2>

          <p>
            Décrivez-nous votre besoin, vos contraintes horaires, votre lieu de
            prise en charge et vos demandes particulières. Nous vous proposerons
            une solution adaptée.
          </p>

          <Link to="/contact" className="concierge-cta__btn">
            Nous écrire
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

export default Concierge;