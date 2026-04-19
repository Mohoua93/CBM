import { Link } from "react-router-dom";
import VehicleMarquee from "../components/VehicleMarquee";
import "../styles/VehicleDetail.css";

function VehicleDetail({ vehicle }) {
  const isClasseV = vehicle.name === "Mercedes Classe V";

  const heroStyle = {
    backgroundImage: `url(${vehicle.heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: isClasseV ? "cover" : "cover",
    backgroundPosition: isClasseV ? "center 68%" : "center center",
    backgroundColor: "#000",
    width: "100%",
  };

  return (
    <div className="vehicle-detail-page">
      <section className="vehicle-detail-hero" style={heroStyle}>
        <div className="vehicle-detail-hero__overlay" />
      </section>

      <div className="vehicle-detail-divider vehicle-detail-divider--hero-to-gallery" />

      <section className="vehicle-gallery-section">
        <div className="vehicle-gallery-section__container">
          <h2 className="vehicle-section-title">
            Découvrez {vehicle.name} en images
          </h2>

          <VehicleMarquee images={vehicle.gallery} title="" />
        </div>
      </section>

      <div className="vehicle-detail-divider vehicle-detail-divider--gallery-to-content" />

      <section className="vehicle-description-section">
        <div className="vehicle-description-container">
          <div className="vehicle-detail-image">
            <img src={vehicle.image} alt={vehicle.name} />
          </div>

          <div className="vehicle-detail-text">
            <h2>Une présence remarquable</h2>
            <p>{vehicle.beauty}</p>

            <h2>Un confort pensé pour l’excellence</h2>
            <p>{vehicle.comfort}</p>

            <h2>Ses avantages</h2>
            <ul>
              {vehicle.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>

            <h2>Clientèle cible</h2>
            <p>{vehicle.targetAudience}</p>

            <div className="vehicle-detail-actions">
              <Link to="/reservation" className="vehicle-detail-btn">
                Réserver ce véhicule
              </Link>

              <Link to="/flotte" className="vehicle-detail-btn secondary">
                Retour à la flotte
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default VehicleDetail;