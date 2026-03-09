import "../styles/Booking.css";

function Booking() {
  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="booking-hero__content">
          <span className="booking-hero__eyebrow">Réservation</span>

          <h1 className="booking-hero__title">
            Réservez votre
            <br />
            chauffeur privé
          </h1>

          <p className="booking-hero__text">
            Réservez votre trajet en quelques instants. CBM vous accompagne pour
            vos transferts privés, déplacements professionnels, événements,
            mariages et mises à disposition.
          </p>

          <div className="booking-hero__highlights">
            <div className="booking-highlight">
              <span className="booking-highlight__number">24/7</span>
              <p>Disponibilité sur réservation</p>
            </div>

            <div className="booking-highlight">
              <span className="booking-highlight__number">Premium</span>
              <p>Service discret et haut de gamme</p>
            </div>

            <div className="booking-highlight">
              <span className="booking-highlight__number">Sur mesure</span>
              <p>Prestations adaptées à vos besoins</p>
            </div>
          </div>
        </div>

        <div className="booking-form-card">
          <h2>Demande de réservation</h2>

          <form className="booking-form-page">
            <div className="booking-form-page__grid">
              <div className="booking-field-page">
                <label htmlFor="service">Type de service</label>
                <select id="service" name="service">
                  <option value="">Sélectionnez</option>
                  <option value="transfert">Transfert privé</option>
                  <option value="mise-a-disposition">Mise à disposition</option>
                  <option value="evenement">Événement</option>
                  <option value="mariage">Mariage</option>
                  <option value="conciergerie">Conciergerie</option>
                </select>
              </div>

              <div className="booking-field-page">
                <label htmlFor="vehicle">Véhicule souhaité</label>
                <select id="vehicle" name="vehicle">
                  <option value="">Sélectionnez</option>
                  <option value="classe-s-e">Mercedes Classe S / Classe E</option>
                  <option value="classe-v">Mercedes Classe V</option>
                  <option value="range-rover">Range Rover</option>
                </select>
              </div>

              <div className="booking-field-page booking-field-page--full">
                <label htmlFor="pickup">Adresse de départ</label>
                <input
                  id="pickup"
                  name="pickup"
                  type="text"
                  placeholder="Ex : Aéroport CDG, Paris, Hôtel..."
                />
              </div>

              <div className="booking-field-page booking-field-page--full">
                <label htmlFor="destination">Destination</label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Ex : Paris 8e, Gare, Lieu d’événement..."
                />
              </div>

              <div className="booking-field-page">
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" />
              </div>

              <div className="booking-field-page">
                <label htmlFor="time">Heure</label>
                <input id="time" name="time" type="time" />
              </div>

              <div className="booking-field-page">
                <label htmlFor="passengers">Nombre de passagers</label>
                <input
                  id="passengers"
                  name="passengers"
                  type="number"
                  min="1"
                  placeholder="1"
                />
              </div>

              <div className="booking-field-page">
                <label htmlFor="luggage">Bagages</label>
                <input
                  id="luggage"
                  name="luggage"
                  type="number"
                  min="0"
                  placeholder="0"
                />
              </div>

              <div className="booking-field-page">
                <label htmlFor="name">Nom complet</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Votre nom"
                />
              </div>

              <div className="booking-field-page">
                <label htmlFor="phone">Téléphone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+33 6 00 00 00 00"
                />
              </div>

              <div className="booking-field-page booking-field-page--full">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                />
              </div>

              <div className="booking-field-page booking-field-page--full">
                <label htmlFor="details">Précisions</label>
                <textarea
                  id="details"
                  name="details"
                  rows="6"
                  placeholder="Ajoutez ici toute précision utile : numéro de vol, attente, trajet retour, besoins spécifiques..."
                ></textarea>
              </div>
            </div>

            <button type="submit" className="booking-submit">
              Envoyer la demande
            </button>
          </form>
        </div>
      </section>

      <section className="booking-info">
        <div className="booking-info__card">
          <h3>Comment ça fonctionne</h3>
          <p>
            Remplissez votre demande, nous vous recontactons rapidement pour
            confirmer les détails, le véhicule adapté et la disponibilité.
          </p>
        </div>

        <div className="booking-info__card">
          <h3>Réponse rapide</h3>
          <p>
            Nos équipes traitent vos demandes avec réactivité afin de vous
            proposer une solution adaptée dans les meilleurs délais.
          </p>
        </div>

        <div className="booking-info__card">
          <h3>Service premium</h3>
          <p>
            Chauffeurs professionnels, véhicules haut de gamme et accompagnement
            discret pour une expérience irréprochable.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Booking;