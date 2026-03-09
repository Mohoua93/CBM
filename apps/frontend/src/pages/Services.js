import { Link } from "react-router-dom";
import "../styles/Services.css";

const servicesList = [
  {
    title: "Transferts vers les aéroports",
    description:
      "Prise en charge et dépose vers les principaux aéroports avec ponctualité, confort et suivi de votre trajet.",
  },
  {
    title: "Mise à disposition",
    description:
      "Un chauffeur privé et un véhicule haut de gamme à votre service pendant plusieurs heures ou une journée entière.",
  },
  {
    title: "Excursions en France et en Europe",
    description:
      "Des forfaits sur mesure pour vos déplacements touristiques, shopping, rendez-vous et séjours privés.",
  },
  {
    title: "Toutes distances France / Europe",
    description:
      "Trajets longue distance en toute sérénité pour vos besoins personnels ou professionnels, sans compromis sur le confort.",
  },
  {
    title: "Chauffeur pour mariages",
    description:
      "Une prestation élégante et discrète pour accompagner vos cérémonies et déplacements le jour de votre mariage.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <span className="services-hero__eyebrow">Nos services</span>

          <h1 className="services-hero__title">
            Une prestation
            <br />
            haut de gamme
          </h1>

          <p className="services-hero__text">
            CBM vous propose un service de chauffeur privé premium pour tous vos
            déplacements en France et en Europe, avec discrétion, ponctualité
            et exigence de qualité.
          </p>
        </div>
      </section>

      <section className="services-grid-section">
        <div className="services-grid">
          {servicesList.map((service) => (
            <article className="service-box" key={service.title}>
              <span className="service-box__number">CBM</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-highlight">
        <div className="services-highlight__content">
          <h2>Un accompagnement sur mesure</h2>
          <p>
            Chaque prestation est pensée pour répondre aux attentes d’une
            clientèle recherchant un transport fiable, confortable et raffiné.
            Que ce soit pour un transfert, une journée de rendez-vous, une
            excursion privée ou un événement important, CBM met à votre
            disposition des véhicules de prestige avec chauffeur.
          </p>

          <div className="services-highlight__actions">
            <Link to="/reservation" className="services-btn services-btn--gold">
              Réserver
            </Link>
            <Link to="/contact" className="services-btn services-btn--outline">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;