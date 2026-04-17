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
          {doubledImages.map((image, index) => (
            <div className="vehicle-marquee__item" key={`${image.src}-${index}`}>
              <img
                src={image.src}
                alt={image.alt || `Véhicule ${index + 1}`}
                className="vehicle-marquee__img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleMarquee;