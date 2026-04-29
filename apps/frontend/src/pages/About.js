import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "../styles/About.css";

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 36,
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

const cardItem = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
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

function About() {
  const { t } = useTranslation();

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__overlay" />

        <motion.div
          className="about-hero__content"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          
          <h1 className="about-hero__title">
            {t("aboutPage.hero.titleLine1")}
            <br />
            
          </h1>

          <p className="about-hero__text">{t("aboutPage.hero.text")}</p>
        </motion.div>
      </section>

      <section className="about-story">
        <motion.div
          className="about-story__intro"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          <h2>{t("aboutPage.story.title")}</h2>
          <p>{t("aboutPage.story.text")}</p>
        </motion.div>

        <motion.div
          className="about-story__grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.article
            className="about-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>{t("aboutPage.cards.experience.title")}</h3>
            <p>{t("aboutPage.cards.experience.text")}</p>
          </motion.article>

          <motion.article
            className="about-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>{t("aboutPage.cards.family.title")}</h3>
            <p>{t("aboutPage.cards.family.text")}</p>
          </motion.article>

          <motion.article
            className="about-card"
            variants={cardItem}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            
            <h3>{t("aboutPage.cards.premium.title")}</h3>
            <p>{t("aboutPage.cards.premium.text")}</p>
          </motion.article>
        </motion.div>
      </section>

      <section className="about-values">
        <motion.div
          className="about-values__content"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="about-values__heading">
            
            <h2>{t("aboutPage.values.title")}</h2>
          </div>

          <div className="about-values__list">
            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.discretion.label")}
              </span>
              <p>{t("aboutPage.values.discretion.text")}</p>
            </div>

            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.punctuality.label")}
              </span>
              <p>{t("aboutPage.values.punctuality.text")}</p>
            </div>

            <div className="about-value">
              <span className="about-value__label">
                {t("aboutPage.values.excellence.label")}
              </span>
              <p>{t("aboutPage.values.excellence.text")}</p>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

export default About;