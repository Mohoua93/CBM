import "../styles/Fleet.css";
import mercedesSE from "../assets/class-S.png";
import mercedesV from "../assets/class-V.png";
import rangeRover from "../assets/range-rover.png";

function Fleet() {
  return (
    <div className="fleet-page">
      <section className="fleet">
        <div className="fleet__content">
          <span className="fleet__eyebrow">Notre flotte</span>

          <h1 className="fleet__title">
            Des véhicules
            <br />
            d’exception
          </h1>

          <p className="fleet__text">
            CBM met à votre disposition une flotte premium sélectionnée pour
            répondre aux exigences d’une clientèle recherchant confort,
            discrétion et excellence de service.
          </p>

          <p className="fleet__text">
            Que ce soit pour un transfert privé, une mise à disposition, un
            événement ou un déplacement professionnel, nos véhicules offrent une
            expérience haut de gamme avec chauffeur.
          </p>

          <p className="fleet__text">
            Notre sélection comprend des berlines de prestige, des vans luxueux
            et des SUV emblématiques, parfaitement adaptés à tous types de
            trajets.
          </p>
        </div>

        <div className="fleet__gallery">
          <article className="fleet-card">
            <img
              src={mercedesSE}
              alt="Mercedes Classe S ou Classe E"
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>Mercedes Classe S / Classe E</h2>
              <p>Berlines élégantes pour vos transferts et rendez-vous premium.</p>
            </div>
          </article>

          <article className="fleet-card">
            <img
              src={mercedesV}
              alt="Mercedes Classe V"
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>Mercedes Classe V</h2>
              <p>Idéal pour les groupes, les familles et les déplacements business.</p>
            </div>
          </article>

          <article className="fleet-card">
            <img
              src={rangeRover}
              alt="Range Rover"
              className="fleet-card__image"
            />
            <div className="fleet-card__overlay">
              <h2>Range Rover</h2>
              <p>SUV haut de gamme alliant prestance, espace et confort absolu.</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Fleet;