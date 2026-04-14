// ClassS.jsx (Page Fiche Véhicule)
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "../styles/VehiclePage.css"; // Nouveau fichier CSS à créer

// Import des images générées (ajuste les chemins)
import imgExt1 from "../assets/class-s/ext-front.png";
import imgExt2 from "../assets/class-s/ext-rear.png";
import imgInt1 from "../assets/class-s/int-dash.png";
import imgInt2 from "../assets/class-s/int-rear.png";

const carouselImages = [
  { id: 1, src: imgExt1, alt: "Mercedes Classe S - Extérieur Face" },
  { id: 2, src: imgInt1, alt: "Mercedes Classe S - Intérieur Cockpit" },
  { id: 3, src: imgExt2, alt: "Mercedes Classe S - Extérieur Arrière" },
  { id: 4, src: imgInt2, alt: "Mercedes Classe S - Sièges Arrières Executive" },
];

function ClassSPage() {
  return (
    <motion.div 
      className="vehicle-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <header className="vehicle-page__header">
        <h1>Mercedes-Benz Classe S</h1>
        <p className="subtitle">La définition même du luxe automobile</p>
      </header>

      {/* CARROUSEL D'IMAGES */}
      <section className="vehicle-page__carousel">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1} // Une image à la fois (carrousel immersif)
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper"
        >
          {carouselImages.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} className="carousel__img" />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* TEXTE STRUCTURÉ ET COMPLET */}
      <section className="vehicle-page__content">
        <div className="container">
          
          <article className="descr-block">
            <h2>L'Incarne du Prestige</h2>
            <p>
              Voyager à bord de la Mercedes Classe S, c'est choisir l'excellence absolue. 
              Référence mondiale des berlines de luxe, elle allie une silhouette iconique 
              à une technologie d'avant-garde. Chaque trajet devient une expérience de 
              sérénité, que vous soyez au volant ou, plus probablement, installé à l'arrière.
            </p>
          </article>

          <div className="descr-grid">
            <article className="descr-block">
              <h3>Confort Exceptionnel</h3>
              <p>
                L'habitacle est un sanctuaire de calme. Les matériaux nobles (cuir nappa, 
                bois précieux) sont assemblés avec une précision artisanale. La suspension 
                AIRMATIC efface les irrégularités de la route, tandis que l'isolation 
                phonique atteint des sommets. Les sièges Executive à l'arrière, 
                chauffants, climatisés et massants, offrent un niveau de relaxation inégalé.
              </p>
            </article>

            <article className="descr-block">
              <h3>Sécurité & Technologie</h3>
              <p>
                La Classe S anticipe le danger. Elle est équipée des systèmes d'aide 
                à la conduite les plus avancés du marché : DIGITAL LIGHT, pilote de 
                distance actif DISTRONIC, et une protection préventive PRE-SAFE® à 360°. 
                Le système MBUX de dernière génération assure une connectivité intuitive.
              </p>
            </article>
          </div>

          <article className="descr-block premium-highlight">
            <h3>Le Choix Premium</h3>
            <p>
              Pour vos transferts aéroport, vos déplacements professionnels ou un événement 
              spécial, la Classe S garantit une arrivée remarquée et un confort souverain. 
              C'est le véhicule le plus complet pour ceux qui n'acceptent aucun compromis 
              entre performance, luxe et sécurité.
            </p>
          </article>

        </div>
      </section>
    </motion.div>
  );
}

export default ClassSPage;