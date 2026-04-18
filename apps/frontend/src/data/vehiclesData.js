import mercedesSHero from "../assets/class-s/2.jpeg";
import mercedesS1 from "../assets/class-s/1.jpeg";
import mercedesS2 from "../assets/class-s/2.jpeg";
import mercedesS3 from "../assets/class-s/3.jpeg";
import mercedesS4 from "../assets/class-s/4.jpeg";
import mercedesS5 from "../assets/class-s/5.jpeg";
import mercedesS6 from "../assets/class-s/6.jpeg";


import mercedesEHero from "../assets/class-e/4.jpeg";
import mercedesE1 from "../assets/class-e/1.jpeg";
import mercedesE2 from "../assets/class-e/2.jpeg";
import mercedesE3 from "../assets/class-e/3.jpeg";
import mercedesE4 from "../assets/class-e/4.jpeg"; 

import mercedesVHero from "../assets/class-v/1.jpeg";
import mercedesV1 from "../assets/class-v/1.jpeg";
import mercedesV2 from "../assets/class-v/2.jpeg";
import mercedesV3 from "../assets/class-v/3.jpeg";
import mercedesV4 from "../assets/class-v/4.jpeg";

import rangeRoverHero from "../assets/range-rover/5.jpeg";
import rangeRover1 from "../assets/range-rover/1.jpeg";
import rangeRover2 from "../assets/range-rover/2.jpeg";
import rangeRover3 from "../assets/range-rover/3.jpeg";
import rangeRover4 from "../assets/range-rover/4.jpeg";
import rangeRover5 from "../assets/range-rover/5.jpeg";
import rangeRover6 from "../assets/range-rover/6.jpeg";

export const vehiclesData = {
  mercedesS: {
    name: "Mercedes Classe S",
    subtitle:
      "L’excellence absolue pour une clientèle exigeante en quête de prestige, de silence et d’élégance.",
    image: mercedesS1,
    heroImage: mercedesSHero,
    gallery: [
      { src: mercedesS1, alt: "Mercedes Classe S vue 1" },
      { src: mercedesS2, alt: "Mercedes Classe S vue 2" },
      { src: mercedesS3, alt: "Mercedes Classe S vue 3" },
      { src: mercedesS4, alt: "Mercedes Classe S vue 4" },
      { src: mercedesS5, alt: "Mercedes Classe S vue 5" },
      { src: mercedesS6, alt: "Mercedes Classe S vue 6" },
    ],
    beauty:
      "La Mercedes Classe S incarne le raffinement automobile dans sa forme la plus aboutie. Sa silhouette longue, fluide et majestueuse inspire immédiatement le respect. Chaque détail de son design a été pensé pour exprimer le prestige : une calandre imposante, des lignes épurées, une signature lumineuse sophistiquée et une allure qui conjugue puissance discrète et distinction naturelle. C’est un véhicule qui attire le regard sans jamais en faire trop, parfaitement adapté à un service haut de gamme.",
    comfort:
      "À bord, la Classe S offre une expérience d’un niveau exceptionnel. Les sièges spacieux, les finitions luxueuses, la qualité des matériaux et l’insonorisation remarquable créent une atmosphère apaisante, idéale pour les trajets professionnels comme privés. Chaque déplacement devient un moment de sérénité. Les passagers profitent d’un espace généreux, d’une assise premium, d’une conduite souple et d’un environnement pensé pour le repos, le confort et la discrétion.",
    advantages: [
      "Berline de prestige idéale pour les transferts VIP",
      "Confort de très haut niveau pour les trajets longue distance",
      "Silence de conduite remarquable",
      "Image premium parfaite pour une clientèle d’affaires",
      "Habitacle spacieux et finitions luxueuses",
      "Excellente stabilité et douceur de route",
    ],
    targetAudience:
      "La Mercedes Classe S s’adresse à une clientèle VIP, dirigeants, personnalités, diplomates, chefs d’entreprise, clients premium d’hôtels de luxe, ainsi qu’aux voyageurs souhaitant vivre une expérience de transport exclusive et irréprochable.",
  },

  mercedesE: {
    name: "Mercedes Classe E",
    subtitle:
      "L’équilibre parfait entre élégance, confort et discrétion pour les déplacements haut de gamme du quotidien.",
    image: mercedesE1,
    heroImage: mercedesEHero,
    gallery: [
      { src: mercedesE1, alt: "Mercedes Classe E vue 1" },
      { src: mercedesE2, alt: "Mercedes Classe E vue 2" },
      { src: mercedesE3, alt: "Mercedes Classe E vue 3" },
      { src: mercedesE4, alt: "Mercedes Classe E vue 4" },
    ],
    beauty:
      "La Mercedes Classe E séduit par son élégance sobre et moderne. Son design exprime immédiatement le sérieux, la distinction et la qualité allemande. Moins démonstrative qu’une limousine, elle conserve pourtant une allure statutaire très appréciée dans l’univers du transport premium. Sa ligne harmonieuse, son profil dynamique et sa présentation soignée en font une voiture à la fois chic, professionnelle et intemporelle.",
    comfort:
      "Pensée pour offrir une qualité de voyage supérieure, la Classe E propose un habitacle raffiné, une excellente ergonomie et une conduite particulièrement agréable. Elle absorbe parfaitement les irrégularités de la route et garantit aux passagers un trajet fluide, calme et confortable. Son intérieur est idéal pour travailler, se détendre ou simplement profiter d’un transfert dans des conditions optimales.",
    advantages: [
      "Parfaite pour les transferts business et aéroportuaires",
      "Excellente combinaison entre standing et discrétion",
      "Confort élevé pour les trajets urbains et interurbains",
      "Véhicule élégant adapté à une clientèle professionnelle",
      "Très bonne habitabilité",
      "Image premium sans excès",
    ],
    targetAudience:
      "La Mercedes Classe E convient parfaitement aux professionnels, cadres, voyageurs d’affaires, couples, clients d’hôtels et particuliers recherchant une prestation haut de gamme, élégante et efficace au quotidien.",
  },

  mercedesV: {
    name: "Mercedes Classe V",
    subtitle:
      "Le van premium par excellence pour voyager en groupe sans compromis sur le confort et le standing.",
    image: mercedesV1,
    heroImage: mercedesVHero,
    gallery: [
      { src: mercedesV1, alt: "Mercedes Classe V vue 1" },
      { src: mercedesV2, alt: "Mercedes Classe V vue 2" },
      { src: mercedesV3, alt: "Mercedes Classe V vue 3" },
      { src: mercedesV4, alt: "Mercedes Classe V vue 4" },
    ],
    beauty:
      "La Mercedes Classe V redéfinit l’image du transport en van avec une esthétique moderne, valorisante et haut de gamme. Son design imposant, ses lignes soignées et sa finition premium lui permettent de se distinguer des véhicules utilitaires classiques. Elle renvoie une image sérieuse, élégante et parfaitement adaptée à un service de transport de luxe pour familles, groupes ou clientèle événementielle.",
    comfort:
      "Son véritable atout se révèle à l’intérieur : un espace remarquable, une modularité intelligente et un niveau de confort pensé pour les longs trajets. Chaque passager bénéficie d’une assise confortable, d’un accès facile et d’un volume généreux. C’est le véhicule idéal pour transporter plusieurs personnes avec leurs bagages tout en conservant une expérience premium. Le confort collectif devient ici une priorité, sans sacrifier la qualité de présentation.",
    advantages: [
      "Capacité idéale pour les groupes et familles",
      "Grand espace pour les bagages",
      "Confort supérieur pour tous les passagers",
      "Parfait pour transferts aéroport, événements et tourisme",
      "Image premium rare dans la catégorie van",
      "Solution idéale pour voyager ensemble avec élégance",
    ],
    targetAudience:
      "La Mercedes Classe V s’adresse aux familles, groupes d’amis, délégations professionnelles, clients événementiels, transferts vers aéroports et gares, ainsi qu’aux voyageurs souhaitant un véhicule spacieux et premium pour plusieurs passagers.",
  },

  rangeRover: {
    name: "Range Rover",
    subtitle:
      "Le luxe SUV dans toute sa splendeur, entre présence, confort souverain et prestige assumé.",
    image: rangeRover1,
    heroImage: rangeRoverHero,
    gallery: [
      { src: rangeRover1, alt: "Range Rover vue 1" },
      { src: rangeRover2, alt: "Range Rover vue 2" },
      { src: rangeRover3, alt: "Range Rover vue 3" },
      { src: rangeRover4, alt: "Range Rover vue 4" },
      { src: rangeRover5, alt: "Range Rover vue 5" },
      { src: rangeRover6, alt: "Range Rover vue 6" },
    ],
    beauty:
      "Le Range Rover impose une signature visuelle unique. Son allure noble, puissante et contemporaine exprime immédiatement le luxe, la confiance et le caractère. Sa silhouette statutaire, ses proportions équilibrées et sa présence naturelle sur la route en font un véhicule particulièrement apprécié par une clientèle en quête d’exclusivité. Il dégage une image à la fois moderne, haut de gamme et prestigieuse.",
    comfort:
      "À l’intérieur, le Range Rover propose une expérience de voyage raffinée et immersive. La position de conduite haute, la qualité des matériaux, l’espace à bord et la sensation de maîtrise procurent un confort exceptionnel. Les passagers profitent d’un environnement premium, calme et valorisant, parfaitement adapté aux trajets haut de gamme, privés ou professionnels.",
    advantages: [
      "SUV de luxe au fort impact visuel",
      "Position surélevée très appréciée des passagers",
      "Confort premium et habitacle raffiné",
      "Image exclusive et statutaire",
      "Idéal pour une clientèle recherchant un véhicule distinctif",
      "Excellent compromis entre prestige, espace et présence",
    ],
    targetAudience:
      "Le Range Rover vise une clientèle premium, VIP, personnalités, entrepreneurs, clientèle internationale, ainsi que les passagers recherchant un véhicule de luxe avec une identité forte, plus distinctive qu’une berline classique.",
  },
};