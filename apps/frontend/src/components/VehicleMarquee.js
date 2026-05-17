import "../styles/VehicleMarquee.css";

function VehicleMarquee({ images = [], title }) {
  const doubledImages = [...images, ...images];

  return (
    <section className="vehicle-marquee">
      {title && (
        <div className="vehicle-marquee__header">
          <h2>{title}</h2>
        </div>
      )}

      <div className="vehicle-marquee__wrapper">
        <div className="vehicle-marquee__track">
          {doubledImages.map((image, index) => {
            const imageSrc = typeof image === "string" ? image : image.src;
            const imageAlt =
              typeof image === "string"
                ? `Véhicule ${index + 1}`
                : image.alt || `Véhicule ${index + 1}`;

            return (
              <div
                className="vehicle-marquee__item"
                key={`${imageSrc}-${index}`}
                role="img"
                aria-label={imageAlt}
                style={{
                  backgroundImage: `url(${imageSrc})`,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default VehicleMarquee;