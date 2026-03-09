import "../styles/About.css";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">À propos</span>

          <h1 className="about-hero__title">
            L’exigence d’un service
            <br />
            transmis de père en fils
          </h1>

          <p className="about-hero__text">
            CBM est une entreprise familiale spécialisée dans le transport privé
            haut de gamme. Depuis plus de 20 ans, nous mettons notre expérience,
            notre rigueur et notre sens du service au profit d’une clientèle
            exigeante, à la recherche de confort, de discrétion et de fiabilité.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__intro">
          <h2>Une histoire de famille</h2>
          <p>
            Chez CBM, le métier de chauffeur VTC est bien plus qu’une activité :
            c’est un véritable savoir-faire familial. De père en fils, nous
            perpétuons une même vision du service, fondée sur l’élégance, la
            ponctualité, la courtoisie et l’attention portée à chaque détail.
          </p>
        </div>

        <div className="about-story__grid">
          <article className="about-card">
            <h3>Plus de 20 ans d’expérience</h3>
            <p>
              Notre expérience du transport privé nous permet de répondre avec
              précision aux attentes de nos clients, qu’il s’agisse de trajets
              quotidiens, de transferts aéroports, d’événements ou de prestations
              sur mesure.
            </p>
          </article>

          <article className="about-card">
            <h3>Une entreprise familiale</h3>
            <p>
              Nous avons construit CBM autour de valeurs fortes : confiance,
              sérieux, disponibilité et accompagnement personnalisé. Cette
              dimension familiale nous permet d’offrir une relation humaine et
              un suivi attentif à chaque demande.
            </p>
          </article>

          <article className="about-card">
            <h3>Un service premium</h3>
            <p>
              Nous mettons à disposition des véhicules haut de gamme avec
              chauffeur pour garantir une expérience de transport confortable,
              élégante et parfaitement adaptée à une clientèle privée et
              professionnelle.
            </p>
          </article>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__content">
          <h2>Nos engagements</h2>

          <div className="about-values__list">
            <div className="about-value">
              <span className="about-value__label">Discrétion</span>
              <p>
                Un service réservé, professionnel et respectueux de la
                confidentialité de chaque client.
              </p>
            </div>

            <div className="about-value">
              <span className="about-value__label">Ponctualité</span>
              <p>
                Une organisation rigoureuse pour garantir des trajets fluides et
                une prise en charge toujours à l’heure.
              </p>
            </div>

            <div className="about-value">
              <span className="about-value__label">Excellence</span>
              <p>
                Une attention constante portée au confort, à la présentation et
                à la qualité globale de la prestation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;