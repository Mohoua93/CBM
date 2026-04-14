import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const savedLanguage = localStorage.getItem("cbm_language");
const defaultLanguage = savedLanguage || "fr";

const resources = {
  fr: {
    translation: {
      nav: {
        home: "Accueil",
        services: "Services",
        about: "À propos",
        fleet: "Flotte",
        contact: "Contact",
        booking: "Réservation"
      },
      header: {
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu"
      },
      hero: {
        title: "Transport privé premium",
        subtitle: "Une expérience premium avec chauffeur privé.",
        cta: "Réserver maintenant"
      },
      services: {
        title: "Nos services",
        airport: "Transfert aéroport",
        business: "Transport business",
        event: "Mise à disposition événementielle"
      },
      home: {
        hero: {
          titleLine1: "Chauffeur Privé",
          titleLine2: "Premium",
          subtitle:
            "Transport premium pour événements, mariages, soirées...",
          bookingButton: "Réserver",
          contactButton: "Contactez-nous",
          imageAlt: "Chauffeur privé CBM"
        },
        services: {
          title: "Nos Services",
          learnMore: "En savoir plus",
          privateTransport: {
            title: "Transport Privé",
            description:
              "Trajets personnalisés pour courtes et longues distances."
          },
          concierge: {
            title: "Conciergerie",
            description:
              "Réservations de restaurants, activités, événements."
          },
          availability: {
            title: "Mise à Disposition",
            description: "Véhicule avec chauffeur pour plusieurs heures."
          }
        },
        booking: {
          title: "Réservation",
          subtitle: "Réservez votre chauffeur privé avec CBM",
          serviceLabel: "Type de service",
          servicePlaceholder: "Choisir un service",
          serviceOption1: "Transport privé",
          serviceOption2: "Conciergerie",
          serviceOption3: "Mise à disposition",
          dateLabel: "Date",
          passengersLabel: "Nombre de passagers",
          passengersPlaceholder: "1",
          submitButton: "Réserver"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "Réservation",
          titleLine1: "Réservez votre",
          titleLine2: "chauffeur privé",
          text:
            "Réservez votre trajet en quelques instants. CBM vous accompagne pour vos transferts privés, déplacements professionnels, événements, mariages et mises à disposition.",
          highlights: {
            availability: "Disponibilité sur réservation",
            premium: "Service discret et premium",
            customLabel: "Sur mesure",
            customText: "Prestations adaptées à vos besoins"
          }
        },
        form: {
          title: "Demande de réservation",
          serviceLabel: "Type de service",
          vehicleLabel: "Véhicule souhaité",
          pickupLabel: "Adresse de départ",
          destinationLabel: "Destination",
          dateLabel: "Date",
          timeLabel: "Heure",
          passengersLabel: "Nombre de passagers",
          luggageLabel: "Bagages",
          nameLabel: "Nom complet",
          phoneLabel: "Téléphone",
          emailLabel: "Email",
          detailsLabel: "Précisions",
          selectPlaceholder: "Sélectionnez",
          pickupPlaceholder: "Ex : Aéroport CDG, Paris, Hôtel...",
          destinationPlaceholder:
            "Ex : Paris 8e, Gare, Lieu d’événement...",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "Votre nom",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "votre@email.com",
          detailsPlaceholder:
            "Ajoutez ici toute précision utile : numéro de vol, attente, trajet retour, besoins spécifiques...",
          submitButton: "Envoyer la demande",
          serviceOptions: {
            transfer: "Transfert privé",
            availability: "Mise à disposition",
            event: "Événement",
            wedding: "Mariage",
            concierge: "Conciergerie"
          },
          vehicleOptions: {
            classSE: "Mercedes Classe S / Classe E",
            classV: "Mercedes Classe V",
            rangeRover: "Range Rover"
          }
        },
        info: {
          howItWorks: {
            title: "Comment ça fonctionne",
            text:
              "Remplissez votre demande, nous vous recontactons rapidement pour confirmer les détails, le véhicule adapté et la disponibilité."
          },
          fastResponse: {
            title: "Réponse rapide",
            text:
              "Nos équipes traitent vos demandes avec réactivité afin de vous proposer une solution adaptée dans les meilleurs délais."
          },
          premiumService: {
            title: "Service premium",
            text:
              "Chauffeurs professionnels, véhicules premium et accompagnement discret pour une expérience irréprochable."
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "À propos",
          titleLine1: "L’exigence d’un service",
          titleLine2: "transmis de père en fils",
          text:
            "CBM est une entreprise familiale spécialisée dans le transport privé premium. Depuis plus de 20 ans, nous mettons notre expérience, notre rigueur et notre sens du service au profit d’une clientèle exigeante, à la recherche de confort, de discrétion et de fiabilité."
        },
        story: {
          title: "Une histoire de famille",
          text:
            "Chez CBM, le métier de chauffeur VTC est bien plus qu’une activité : c’est un véritable savoir-faire familial. De père en fils, nous perpétuons une même vision du service, fondée sur l’élégance, la ponctualité, la courtoisie et l’attention portée à chaque détail."
        },
        cards: {
          experience: {
            title: "Plus de 20 ans d’expérience",
            text:
              "Notre expérience du transport privé nous permet de répondre avec précision aux attentes de nos clients, qu’il s’agisse de trajets quotidiens, de transferts aéroports, d’événements ou de prestations sur mesure."
          },
          family: {
            title: "Une entreprise familiale",
            text:
              "Nous avons construit CBM autour de valeurs fortes : confiance, sérieux, disponibilité et accompagnement personnalisé. Cette dimension familiale nous permet d’offrir une relation humaine et un suivi attentif à chaque demande."
          },
          premium: {
            title: "Un service premium",
            text:
              "Nous mettons à disposition des véhicules premium avec chauffeur pour garantir une expérience de transport confortable, élégante et parfaitement adaptée à une clientèle privée et professionnelle."
          }
        },
        values: {
          title: "Nos engagements",
          discretion: {
            label: "Discrétion",
            text:
              "Un service réservé, professionnel et respectueux de la confidentialité de chaque client."
          },
          punctuality: {
            label: "Ponctualité",
            text:
              "Une organisation rigoureuse pour garantir des trajets fluides et une prise en charge toujours à l’heure."
          },
          excellence: {
            label: "Excellence",
            text:
              "Une attention constante portée au confort, à la présentation et à la qualité globale de la prestation."
          }
        }
      },
      fleetPage: {
        hero: {
          title: "L’excellence du transport premium",
          subtitle:
            "Découvrez une sélection de véhicules d’exception alliant élégance, confort et prestige pour chacun de vos trajets.",
          cta: "Découvrir la flotte"
        },
        cta: "En savoir plus",
        vehicles: {
          mercedesSE: {
            alt: "Mercedes Classe S",
            title: "Class S",
            text:
              "Expérimentez l’excellence du transport avec notre Classe S. Un service ultra premium alliant confort absolu, discrétion et prestations haut de gamme pour vos trajets les plus exigeants."
          },
          mercedesE: {
            alt: "Mercedes Classe E",
            title: "Class E",
            text:
              "Une solution premium idéale pour vos déplacements quotidiens. Profitez d’un confort supérieur et d’un service élégant."
          },
          mercedesV: {
            alt: "Mercedes Classe V",
            title: "Mercedes Classe V",
            text:
              "Idéal pour les groupes, les familles et les déplacements business."
          },
          rangeRover: {
            alt: "Range Rover",
            title: "Range Rover",
            text:
              "SUV premium alliant prestance, espace et confort absolu."
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "Nos services",
          titleLine1: "Une prestation",
          titleLine2: "premium",
          text:
            "CBM vous propose un service de chauffeur privé premium pour tous vos déplacements en France et en Europe, avec discrétion, ponctualité et exigence de qualité."
        },
        list: {
          airportTransfers: {
            title: "Transferts vers les aéroports",
            description:
              "Prise en charge et dépose vers les principaux aéroports avec ponctualité, confort et suivi de votre trajet."
          },
          availability: {
            title: "Mise à disposition",
            description:
              "Un chauffeur privé et un véhicule premium à votre service pendant plusieurs heures ou une journée entière."
          },
          excursions: {
            title: "Excursions en France et en Europe",
            description:
              "Des forfaits sur mesure pour vos déplacements touristiques, shopping, rendez-vous et séjours privés."
          },
          longDistance: {
            title: "Toutes distances France / Europe",
            description:
              "Trajets longue distance en toute sérénité pour vos besoins personnels ou professionnels, sans compromis sur le confort."
          },
          weddingChauffeur: {
            title: "Chauffeur pour mariages",
            description:
              "Une prestation élégante et discrète pour accompagner vos cérémonies et déplacements le jour de votre mariage."
          }
        },
        highlight: {
          title: "Un accompagnement sur mesure",
          text:
            "Chaque prestation est pensée pour répondre aux attentes d’une clientèle recherchant un transport fiable, confortable et raffiné. Que ce soit pour un transfert, une journée de rendez-vous, une excursion privée ou un événement important, CBM met à votre disposition des véhicules premium avec chauffeur.",
          bookingButton: "Réserver",
          contactButton: "Nous contacter"
        }
      },
      contactPage: {
        hero: {
          title: "Contact",
          imageAlt: "Chauffeur privé CBM"
        },
        intro: {
          title: "Contactez-nous",
          text:
            "Pour toute demande de renseignements, réservation ou devis, contactez-nous via le formulaire ci-dessous ou directement par téléphone et WhatsApp."
        },
        form: {
          namePlaceholder: "Nom",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "Email",
          messagePlaceholder: "Message",
          submitButton: "Envoyer"
        },
        info: {
          title: "Informations"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "Discuter sur WhatsApp"
        }
      },
      footer: {
        description:
          "Service de chauffeur privé premium pour vos déplacements, événements et réservations sur mesure.",
        navigationTitle: "Navigation",
        contactTitle: "Contact",
        availability: "Disponible pour vos demandes 24/7",
        rights: "Tous droits réservés."
      }
    }
  },

  en: {
    translation: {
      nav: {
        home: "Home",
        services: "Services",
        about: "About",
        fleet: "Fleet",
        contact: "Contact",
        booking: "Booking"
      },
      header: {
        openMenu: "Open menu",
        closeMenu: "Close menu"
      },
      hero: {
        title: "Premium private transport",
        subtitle: "A premium experience with a private chauffeur.",
        cta: "Book now"
      },
      services: {
        title: "Our services",
        airport: "Airport transfer",
        business: "Business transport",
        event: "Event chauffeur service"
      },
      home: {
        hero: {
          titleLine1: "Private Chauffeur",
          titleLine2: "Premium",
          subtitle: "Premium transport for events, weddings, evenings...",
          bookingButton: "Book now",
          contactButton: "Contact us",
          imageAlt: "CBM private chauffeur"
        },
        services: {
          title: "Our Services",
          learnMore: "Learn more",
          privateTransport: {
            title: "Private Transport",
            description:
              "Personalized journeys for short and long distances."
          },
          concierge: {
            title: "Concierge Service",
            description: "Restaurant, activity, and event bookings."
          },
          availability: {
            title: "Hourly Disposal",
            description:
              "Vehicle with chauffeur available for several hours."
          }
        },
        booking: {
          title: "Booking",
          subtitle: "Book your private chauffeur with CBM",
          serviceLabel: "Service type",
          servicePlaceholder: "Choose a service",
          serviceOption1: "Private transport",
          serviceOption2: "Concierge service",
          serviceOption3: "Hourly disposal",
          dateLabel: "Date",
          passengersLabel: "Number of passengers",
          passengersPlaceholder: "1",
          submitButton: "Book now"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "Booking",
          titleLine1: "Book your",
          titleLine2: "private chauffeur",
          text:
            "Book your journey in just a few moments. CBM supports you for private transfers, business trips, events, weddings, and hourly services.",
          highlights: {
            availability: "Availability by reservation",
            premium: "Discreet premium service",
            customLabel: "Tailor-made",
            customText: "Services adapted to your needs"
          }
        },
        form: {
          title: "Booking request",
          serviceLabel: "Type of service",
          vehicleLabel: "Desired vehicle",
          pickupLabel: "Pickup address",
          destinationLabel: "Destination",
          dateLabel: "Date",
          timeLabel: "Time",
          passengersLabel: "Number of passengers",
          luggageLabel: "Luggage",
          nameLabel: "Full name",
          phoneLabel: "Phone",
          emailLabel: "Email",
          detailsLabel: "Details",
          selectPlaceholder: "Select",
          pickupPlaceholder: "Example: CDG Airport, Paris, Hotel...",
          destinationPlaceholder:
            "Example: Paris 8th, Station, Event venue...",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "Your name",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "your@email.com",
          detailsPlaceholder:
            "Add any useful details here: flight number, waiting time, return trip, specific needs...",
          submitButton: "Send request",
          serviceOptions: {
            transfer: "Private transfer",
            availability: "Hourly service",
            event: "Event",
            wedding: "Wedding",
            concierge: "Concierge service"
          },
          vehicleOptions: {
            classSE: "Mercedes S-Class / E-Class",
            classV: "Mercedes V-Class",
            rangeRover: "Range Rover"
          }
        },
        info: {
          howItWorks: {
            title: "How it works",
            text:
              "Fill in your request, and we will contact you quickly to confirm the details, the appropriate vehicle, and availability."
          },
          fastResponse: {
            title: "Fast response",
            text:
              "Our teams handle your requests promptly to offer you a suitable solution as quickly as possible."
          },
          premiumService: {
            title: "Premium service",
            text:
              "Professional chauffeurs, premium vehicles, and discreet support for an impeccable experience."
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "About",
          titleLine1: "The high standards of a service",
          titleLine2: "passed from father to son",
          text:
            "CBM is a family-run company specializing in premium private transport. For more than 20 years, we have placed our experience, discipline, and sense of service at the disposal of demanding clients seeking comfort, discretion, and reliability."
        },
        story: {
          title: "A family story",
          text:
            "At CBM, the profession of private chauffeur is much more than a business: it is true family know-how. From father to son, we carry on the same vision of service, built on elegance, punctuality, courtesy, and attention to every detail."
        },
        cards: {
          experience: {
            title: "More than 20 years of experience",
            text:
              "Our experience in private transport allows us to precisely meet our clients’ expectations, whether for daily journeys, airport transfers, events, or tailor-made services."
          },
          family: {
            title: "A family-run company",
            text:
              "We built CBM around strong values: trust, seriousness, availability, and personalized support. This family dimension allows us to offer a human relationship and careful follow-up for every request."
          },
          premium: {
            title: "A premium service",
            text:
              "We provide premium vehicles with chauffeur to guarantee a comfortable, elegant transport experience perfectly suited to private and business clients."
          }
        },
        values: {
          title: "Our commitments",
          discretion: {
            label: "Discretion",
            text:
              "A reserved, professional service that respects the confidentiality of every client."
          },
          punctuality: {
            label: "Punctuality",
            text:
              "Rigorous organization to guarantee smooth journeys and always on-time pickup."
          },
          excellence: {
            label: "Excellence",
            text:
              "Constant attention to comfort, presentation, and the overall quality of the service."
          }
        }
      },
      fleetPage: {
        hero: {
          title: "The excellence of high-end transportation",
          subtitle:
            "Discover a selection of exceptional vehicles combining elegance, comfort and prestige for each of your journeys.",
          cta: "Discover the fleet"
        },
        cta: "Learn more",
        vehicles: {
          mercedesSE: {
            alt: "Mercedes S-Class",
            title: "S Class",
            text:
              "Experience transport excellence with our S Class. An ultra-premium service combining absolute comfort, discretion and high-end amenities for your most demanding journeys."
          },
          mercedesE: {
            alt: "Mercedes E-Class",
            title: "E Class",
            text:
              "An ideal premium solution for your daily trips. Enjoy superior comfort and elegant service while remaining more accessible than the S Class."
          },
          mercedesV: {
            alt: "Mercedes V-Class",
            title: "Mercedes V-Class",
            text:
              "Ideal for groups, families, and business travel."
          },
          rangeRover: {
            alt: "Range Rover",
            title: "Range Rover",
            text:
              "A premium SUV combining prestige, space, and absolute comfort."
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "Our services",
          titleLine1: "A premium",
          titleLine2: "service",
          text:
            "CBM offers you a premium private chauffeur service for all your journeys in France and Europe, with discretion, punctuality, and high standards of quality."
        },
        list: {
          airportTransfers: {
            title: "Airport transfers",
            description:
              "Pickup and drop-off to major airports with punctuality, comfort, and journey tracking."
          },
          availability: {
            title: "Hourly service",
            description:
              "A private chauffeur and a premium vehicle at your service for several hours or a full day."
          },
          excursions: {
            title: "Excursions in France and Europe",
            description:
              "Tailor-made packages for sightseeing, shopping, appointments, and private stays."
          },
          longDistance: {
            title: "All distances in France / Europe",
            description:
              "Long-distance journeys with complete peace of mind for your personal or professional needs, without compromising comfort."
          },
          weddingChauffeur: {
            title: "Wedding chauffeur",
            description:
              "An elegant and discreet service to accompany your ceremonies and journeys on your wedding day."
          }
        },
        highlight: {
          title: "Tailor-made support",
          text:
            "Each service is designed to meet the expectations of clients seeking reliable, comfortable, and refined transport. Whether for a transfer, a full day of appointments, a private excursion, or an important event, CBM provides premium vehicles with chauffeur.",
          bookingButton: "Book now",
          contactButton: "Contact us"
        }
      },
      contactPage: {
        hero: {
          title: "Contact",
          imageAlt: "CBM private chauffeur"
        },
        intro: {
          title: "Contact us",
          text:
            "For any request for information, booking, or quotation, contact us via the form below or directly by phone and WhatsApp."
        },
        form: {
          namePlaceholder: "Name",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "Email",
          messagePlaceholder: "Message",
          submitButton: "Send"
        },
        info: {
          title: "Information"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "Chat on WhatsApp"
        }
      },
      footer: {
        description:
          "Premium private chauffeur service for your journeys, events, and tailor-made bookings.",
        navigationTitle: "Navigation",
        contactTitle: "Contact",
        availability: "Available for your requests 24/7",
        rights: "All rights reserved."
      }
    }
  },

  tr: {
    translation: {
      nav: {
        home: "Ana Sayfa",
        services: "Hizmetler",
        about: "Hakkımızda",
        fleet: "Filo",
        contact: "İletişim",
        booking: "Rezervasyon"
      },
      header: {
        openMenu: "Menüyü aç",
        closeMenu: "Menüyü kapat"
      },
      hero: {
        title: "Premium özel ulaşım",
        subtitle: "Özel şoförle premium bir deneyim.",
        cta: "Şimdi rezervasyon yap"
      },
      services: {
        title: "Hizmetlerimiz",
        airport: "Havalimanı transferi",
        business: "İş ulaşımı",
        event: "Etkinlik için araç tahsisi"
      },
      home: {
        hero: {
          titleLine1: "Premium",
          titleLine2: "Özel Şoför",
          subtitle:
            "Etkinlikler, düğünler ve özel geceler için premium ulaşım.",
          bookingButton: "Rezervasyon",
          contactButton: "Bize ulaşın",
          imageAlt: "CBM özel şoför"
        },
        services: {
          title: "Hizmetlerimiz",
          learnMore: "Daha fazla bilgi",
          privateTransport: {
            title: "Özel Ulaşım",
            description:
              "Kısa ve uzun mesafeler için kişiselleştirilmiş yolculuklar."
          },
          concierge: {
            title: "Konsiyerj",
            description:
              "Restoran, etkinlik ve aktivite rezervasyonları."
          },
          availability: {
            title: "Araç Tahsisi",
            description: "Birkaç saatliğine şoförlü araç hizmeti."
          }
        },
        booking: {
          title: "Rezervasyon",
          subtitle: "CBM ile özel şoförünüzü rezerve edin",
          serviceLabel: "Hizmet türü",
          servicePlaceholder: "Bir hizmet seçin",
          serviceOption1: "Özel ulaşım",
          serviceOption2: "Konsiyerj",
          serviceOption3: "Araç tahsisi",
          dateLabel: "Tarih",
          passengersLabel: "Yolcu sayısı",
          passengersPlaceholder: "1",
          submitButton: "Rezervasyon"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "Rezervasyon",
          titleLine1: "Özel şoförünüzü",
          titleLine2: "rezerve edin",
          text:
            "Yolculuğunuzu birkaç dakika içinde rezerve edin. CBM; özel transferler, iş seyahatleri, etkinlikler, düğünler ve araç tahsisi için yanınızdadır.",
          highlights: {
            availability: "Rezervasyonla hizmet",
            premium: "Gizli ve premium hizmet",
            customLabel: "Özel",
            customText: "İhtiyaçlarınıza uygun hizmetler"
          }
        },
        form: {
          title: "Rezervasyon talebi",
          serviceLabel: "Hizmet türü",
          vehicleLabel: "İstenen araç",
          pickupLabel: "Alış adresi",
          destinationLabel: "Varış noktası",
          dateLabel: "Tarih",
          timeLabel: "Saat",
          passengersLabel: "Yolcu sayısı",
          luggageLabel: "Bagaj",
          nameLabel: "Ad soyad",
          phoneLabel: "Telefon",
          emailLabel: "E-posta",
          detailsLabel: "Detaylar",
          selectPlaceholder: "Seçiniz",
          pickupPlaceholder: "Örn: CDG Havalimanı, Paris, Otel...",
          destinationPlaceholder:
            "Örn: Paris 8., Gar, Etkinlik mekanı...",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "Adınız",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "eposta@ornek.com",
          detailsPlaceholder:
            "Buraya yararlı bilgileri ekleyin: uçuş numarası, bekleme, dönüş yolculuğu, özel ihtiyaçlar...",
          submitButton: "Talebi gönder",
          serviceOptions: {
            transfer: "Özel transfer",
            availability: "Araç tahsisi",
            event: "Etkinlik",
            wedding: "Düğün",
            concierge: "Konsiyerj"
          },
          vehicleOptions: {
            classSE: "Mercedes S Serisi / E Serisi",
            classV: "Mercedes V Serisi",
            rangeRover: "Range Rover"
          }
        },
        info: {
          howItWorks: {
            title: "Nasıl çalışır",
            text:
              "Talebinizi doldurun, ardından detayları, uygun aracı ve müsaitliği teyit etmek için size hızlıca dönüş yapalım."
          },
          fastResponse: {
            title: "Hızlı yanıt",
            text:
              "Ekiplerimiz taleplerinizi hızlıca işleyerek size en kısa sürede uygun bir çözüm sunar."
          },
          premiumService: {
            title: "Premium hizmet",
            text:
              "Profesyonel şoförler, premium araçlar ve kusursuz bir deneyim için gizli destek."
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "Hakkımızda",
          titleLine1: "Bir hizmet anlayışının titizliği",
          titleLine2: "babadan oğula aktarıldı",
          text:
            "CBM, premium özel ulaşım alanında uzmanlaşmış aile şirketidir. 20 yılı aşkın süredir deneyimimizi, disiplinimizi ve hizmet anlayışımızı; konfor, gizlilik ve güvenilirlik arayan seçkin müşterilerimizin hizmetine sunuyoruz."
        },
        story: {
          title: "Bir aile hikâyesi",
          text:
            "CBM’de özel şoförlük sadece bir iş değildir: gerçek bir aile geleneğidir. Babadan oğula aktardığımız bu hizmet anlayışı; zarafet, dakiklik, nezaket ve her ayrıntıya verilen özen üzerine kuruludur."
        },
        cards: {
          experience: {
            title: "20 yılı aşkın deneyim",
            text:
              "Özel ulaşım konusundaki deneyimimiz sayesinde müşterilerimizin beklentilerine; günlük yolculuklar, havalimanı transferleri, etkinlikler ve özel hizmetler dahil olmak üzere hassasiyetle yanıt veriyoruz."
          },
          family: {
            title: "Bir aile şirketi",
            text:
              "CBM’yi güçlü değerler üzerine kurduk: güven, ciddiyet, ulaşılabilirlik ve kişiselleştirilmiş destek. Bu aile yapısı, her talepte insani bir ilişki ve dikkatli bir takip sunmamıza olanak tanır."
          },
          premium: {
            title: "Premium hizmet",
            text:
              "Özel ve profesyonel müşterilere uygun, konforlu ve zarif bir ulaşım deneyimi sunmak için şoförlü premium araçlar sağlıyoruz."
          }
        },
        values: {
          title: "Taahhütlerimiz",
          discretion: {
            label: "Gizlilik",
            text:
              "Her müşterinin mahremiyetine saygılı, profesyonel ve seçkin bir hizmet."
          },
          punctuality: {
            label: "Dakiklik",
            text:
              "Akıcı yolculuklar ve her zaman zamanında karşılama için titiz organizasyon."
          },
          excellence: {
            label: "Mükemmellik",
            text:
              "Konfor, sunum ve hizmetin genel kalitesine sürekli özen gösterilmesi."
          }
        }
      },
      fleetPage: {
        hero: {
          title: "Üst düzey ulaşımın mükemmelliği",
          subtitle:
            "Her yolculuğunuz için zarafet, konfor ve prestiji bir araya getiren seçkin araçlarımızı keşfedin.",
          cta: "Filoyu keşfedin"
        },
        cta: "Daha fazla bilgi",
        vehicles: {
          mercedesSE: {
            alt: "Mercedes S Serisi",
            title: "S Serisi",
            text:
              "S Serisi ile ulaşımın en seçkin halini deneyimleyin. En zorlu yolculuklarınız için mutlak konfor, gizlilik ve üst düzey hizmet sunan ultra premium bir deneyim."
          },
          mercedesE: {
            alt: "Mercedes E Serisi",
            title: "E Serisi",
            text:
              "Günlük yolculuklarınız için ideal premium çözüm. S Serisi’nden daha erişilebilir kalırken üstün konfor ve zarif hizmetin keyfini çıkarın."
          },
          mercedesV: {
            alt: "Mercedes V Serisi",
            title: "Mercedes V Serisi",
            text:
              "Gruplar, aileler ve iş seyahatleri için idealdir."
          },
          rangeRover: {
            alt: "Range Rover",
            title: "Range Rover",
            text:
              "Prestij, genişlik ve mutlak konforu birleştiren premium SUV."
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "Hizmetlerimiz",
          titleLine1: "Premium",
          titleLine2: "hizmet",
          text:
            "CBM, Fransa ve Avrupa’daki tüm yolculuklarınız için gizlilik, dakiklik ve yüksek kalite anlayışıyla premium özel şoför hizmeti sunar."
        },
        list: {
          airportTransfers: {
            title: "Havalimanı transferleri",
            description:
              "Başlıca havalimanlarına zamanında, konforlu ve yolculuk takibiyle karşılama ve bırakma hizmeti."
          },
          availability: {
            title: "Araç tahsisi",
            description:
              "Birkaç saat veya tam gün boyunca hizmetinizde özel şoför ve premium araç."
          },
          excursions: {
            title: "Fransa ve Avrupa’da geziler",
            description:
              "Turistik geziler, alışveriş, randevular ve özel konaklamalar için size özel paketler."
          },
          longDistance: {
            title: "Fransa / Avrupa uzun mesafe",
            description:
              "Kişisel veya profesyonel ihtiyaçlarınız için konfordan ödün vermeden huzurlu uzun mesafe yolculuklar."
          },
          weddingChauffeur: {
            title: "Düğün şoförü",
            description:
              "Düğün gününüzde törenlerinize ve yolculuklarınıza eşlik eden zarif ve gizli bir hizmet."
          }
        },
        highlight: {
          title: "Size özel destek",
          text:
            "Her hizmet, güvenilir, konforlu ve seçkin bir ulaşım arayan müşterilerin beklentilerine göre tasarlanır. İster transfer, ister toplantılarla dolu bir gün, ister özel gezi ya da önemli bir etkinlik olsun, CBM size premium araçlar sunar.",
          bookingButton: "Rezervasyon",
          contactButton: "Bize ulaşın"
        }
      },
      contactPage: {
        hero: {
          title: "İletişim",
          imageAlt: "CBM özel şoför"
        },
        intro: {
          title: "Bize ulaşın",
          text:
            "Bilgi, rezervasyon veya fiyat teklifi talepleriniz için aşağıdaki form üzerinden ya da doğrudan telefon ve WhatsApp ile bizimle iletişime geçin."
        },
        form: {
          namePlaceholder: "Ad Soyad",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "E-posta",
          messagePlaceholder: "Mesaj",
          submitButton: "Gönder"
        },
        info: {
          title: "Bilgiler"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "WhatsApp'ta yazışın"
        }
      },
      footer: {
        description:
          "Yolculuklarınız, etkinlikleriniz ve özel rezervasyonlarınız için premium özel şoför hizmeti.",
        navigationTitle: "Gezinme",
        contactTitle: "İletişim",
        availability: "Talepleriniz için 7/24 hizmetinizde",
        rights: "Tüm hakları saklıdır."
      }
    }
  },

  de: {
    translation: {
      nav: {
        home: "Startseite",
        services: "Leistungen",
        about: "Über uns",
        fleet: "Flotte",
        contact: "Kontakt",
        booking: "Reservierung"
      },
      header: {
        openMenu: "Menü öffnen",
        closeMenu: "Menü schließen"
      },
      hero: {
        title: "Premium-Privattransport",
        subtitle: "Ein Premium-Erlebnis mit privatem Chauffeur.",
        cta: "Jetzt buchen"
      },
      services: {
        title: "Unsere Leistungen",
        airport: "Flughafentransfer",
        business: "Business-Transport",
        event: "Fahrservice für Veranstaltungen"
      },
      home: {
        hero: {
          titleLine1: "Privatchauffeur",
          titleLine2: "Premium",
          subtitle:
            "Premium-Transport für Events, Hochzeiten und Abendveranstaltungen.",
          bookingButton: "Buchen",
          contactButton: "Kontaktieren Sie uns",
          imageAlt: "CBM Privatchauffeur"
        },
        services: {
          title: "Unsere Leistungen",
          learnMore: "Mehr erfahren",
          privateTransport: {
            title: "Privattransport",
            description:
              "Personalisierte Fahrten für kurze und lange Strecken."
          },
          concierge: {
            title: "Concierge-Service",
            description:
              "Reservierungen für Restaurants, Aktivitäten und Veranstaltungen."
          },
          availability: {
            title: "Bereitstellung",
            description: "Fahrzeug mit Chauffeur für mehrere Stunden."
          }
        },
        booking: {
          title: "Reservierung",
          subtitle: "Reservieren Sie Ihren Privatchauffeur mit CBM",
          serviceLabel: "Art der Leistung",
          servicePlaceholder: "Leistung auswählen",
          serviceOption1: "Privattransport",
          serviceOption2: "Concierge-Service",
          serviceOption3: "Bereitstellung",
          dateLabel: "Datum",
          passengersLabel: "Anzahl der Fahrgäste",
          passengersPlaceholder: "1",
          submitButton: "Buchen"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "Reservierung",
          titleLine1: "Reservieren Sie",
          titleLine2: "Ihren Privatchauffeur",
          text:
            "Reservieren Sie Ihre Fahrt in wenigen Augenblicken. CBM begleitet Sie bei privaten Transfers, Geschäftsfahrten, Veranstaltungen, Hochzeiten und stundenweiser Bereitstellung.",
          highlights: {
            availability: "Verfügbarkeit nach Reservierung",
            premium: "Diskreter Premium-Service",
            customLabel: "Maßgeschneidert",
            customText: "Leistungen nach Ihren Bedürfnissen"
          }
        },
        form: {
          title: "Reservierungsanfrage",
          serviceLabel: "Art der Leistung",
          vehicleLabel: "Gewünschtes Fahrzeug",
          pickupLabel: "Abholadresse",
          destinationLabel: "Ziel",
          dateLabel: "Datum",
          timeLabel: "Uhrzeit",
          passengersLabel: "Anzahl der Fahrgäste",
          luggageLabel: "Gepäck",
          nameLabel: "Vollständiger Name",
          phoneLabel: "Telefon",
          emailLabel: "E-Mail",
          detailsLabel: "Details",
          selectPlaceholder: "Auswählen",
          pickupPlaceholder: "Bsp.: Flughafen CDG, Paris, Hotel...",
          destinationPlaceholder:
            "Bsp.: Paris 8., Bahnhof, Veranstaltungsort...",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "Ihr Name",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "ihre@email.com",
          detailsPlaceholder:
            "Fügen Sie hier alle nützlichen Informationen hinzu: Flugnummer, Wartezeit, Rückfahrt, besondere Anforderungen...",
          submitButton: "Anfrage senden",
          serviceOptions: {
            transfer: "Privattransfer",
            availability: "Bereitstellung",
            event: "Veranstaltung",
            wedding: "Hochzeit",
            concierge: "Concierge-Service"
          },
          vehicleOptions: {
            classSE: "Mercedes S-Klasse / E-Klasse",
            classV: "Mercedes V-Klasse",
            rangeRover: "Range Rover"
          }
        },
        info: {
          howItWorks: {
            title: "So funktioniert es",
            text:
              "Füllen Sie Ihre Anfrage aus, wir kontaktieren Sie schnell, um die Details, das passende Fahrzeug und die Verfügbarkeit zu bestätigen."
          },
          fastResponse: {
            title: "Schnelle Antwort",
            text:
              "Unsere Teams bearbeiten Ihre Anfragen reaktionsschnell, um Ihnen schnellstmöglich eine passende Lösung anzubieten."
          },
          premiumService: {
            title: "Premium-Service",
            text:
              "Professionelle Chauffeure, Premium-Fahrzeuge und diskrete Begleitung für ein einwandfreies Erlebnis."
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "Über uns",
          titleLine1: "Der Anspruch an einen Service",
          titleLine2: "vom Vater an den Sohn weitergegeben",
          text:
            "CBM ist ein Familienunternehmen, das sich auf Premium-Privattransport spezialisiert hat. Seit mehr als 20 Jahren stellen wir unsere Erfahrung, unsere Genauigkeit und unser Serviceverständnis einer anspruchsvollen Kundschaft zur Verfügung, die Komfort, Diskretion und Zuverlässigkeit sucht."
        },
        story: {
          title: "Eine Familiengeschichte",
          text:
            "Bei CBM ist der Beruf des privaten Chauffeurs weit mehr als nur eine Tätigkeit: Er ist ein echtes familiäres Know-how. Von Vater zu Sohn führen wir dieselbe Servicephilosophie fort, die auf Eleganz, Pünktlichkeit, Höflichkeit und Liebe zum Detail beruht."
        },
        cards: {
          experience: {
            title: "Mehr als 20 Jahre Erfahrung",
            text:
              "Unsere Erfahrung im Privattransport ermöglicht es uns, die Erwartungen unserer Kunden präzise zu erfüllen, sei es bei täglichen Fahrten, Flughafentransfers, Veranstaltungen oder maßgeschneiderten Leistungen."
          },
          family: {
            title: "Ein Familienunternehmen",
            text:
              "Wir haben CBM auf starken Werten aufgebaut: Vertrauen, Seriosität, Verfügbarkeit und persönliche Begleitung. Diese familiäre Dimension ermöglicht uns eine menschliche Beziehung und eine aufmerksame Betreuung jeder Anfrage."
          },
          premium: {
            title: "Ein Premium-Service",
            text:
              "Wir stellen Premium-Fahrzeuge mit Chauffeur zur Verfügung, um ein komfortables, elegantes Transporterlebnis zu garantieren, das perfekt auf private und geschäftliche Kunden abgestimmt ist."
          }
        },
        values: {
          title: "Unsere Verpflichtungen",
          discretion: {
            label: "Diskretion",
            text:
              "Ein zurückhaltender, professioneller Service, der die Vertraulichkeit jedes Kunden respektiert."
          },
          punctuality: {
            label: "Pünktlichkeit",
            text:
              "Eine präzise Organisation für reibungslose Fahrten und eine stets pünktliche Abholung."
          },
          excellence: {
            label: "Exzellenz",
            text:
              "Ständige Aufmerksamkeit für Komfort, Auftreten und die Gesamtqualität der Leistung."
          }
        }
      },
      fleetPage: {
        hero: {
          title: "Die Exzellenz des gehobenen Transports",
          subtitle:
            "Entdecken Sie eine Auswahl außergewöhnlicher Fahrzeuge, die Eleganz, Komfort und Prestige für jede Ihrer Fahrten vereinen.",
          cta: "Die Flotte entdecken"
        },
        cta: "Mehr erfahren",
        vehicles: {
          mercedesSE: {
            alt: "Mercedes S-Klasse",
            title: "S-Klasse",
            text:
              "Erleben Sie Transport auf höchstem Niveau mit unserer S-Klasse. Ein ultra-premium Service mit absolutem Komfort, Diskretion und exklusiven Leistungen für Ihre anspruchsvollsten Fahrten."
          },
          mercedesE: {
            alt: "Mercedes E-Klasse",
            title: "E-Klasse",
            text:
              "Eine ideale Premium-Lösung für Ihre täglichen Fahrten. Genießen Sie hohen Komfort und eleganten Service, während sie zugänglicher als die S-Klasse bleibt."
          },
          mercedesV: {
            alt: "Mercedes V-Klasse",
            title: "Mercedes V-Klasse",
            text:
              "Ideal für Gruppen, Familien und Geschäftsreisen."
          },
          rangeRover: {
            alt: "Range Rover",
            title: "Range Rover",
            text:
              "Ein Premium-SUV, der Prestige, Platz und absoluten Komfort vereint."
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "Unsere Leistungen",
          titleLine1: "Ein",
          titleLine2: "Premium-Service",
          text:
            "CBM bietet Ihnen einen Premium-Privatchauffeurservice für all Ihre Fahrten in Frankreich und Europa - mit Diskretion, Pünktlichkeit und höchstem Qualitätsanspruch."
        },
        list: {
          airportTransfers: {
            title: "Flughafentransfers",
            description:
              "Abholung und Transfer zu den wichtigsten Flughäfen mit Pünktlichkeit, Komfort und Nachverfolgung Ihrer Fahrt."
          },
          availability: {
            title: "Bereitstellung",
            description:
              "Ein privater Chauffeur und ein Premium-Fahrzeug stehen Ihnen mehrere Stunden oder einen ganzen Tag zur Verfügung."
          },
          excursions: {
            title: "Ausflüge in Frankreich und Europa",
            description:
              "Maßgeschneiderte Angebote für touristische Fahrten, Shopping, Termine und private Aufenthalte."
          },
          longDistance: {
            title: "Alle Distanzen Frankreich / Europa",
            description:
              "Langstreckenfahrten in aller Ruhe für private oder geschäftliche Bedürfnisse - ohne Kompromisse beim Komfort."
          },
          weddingChauffeur: {
            title: "Chauffeur für Hochzeiten",
            description:
              "Ein eleganter und diskreter Service zur Begleitung Ihrer Zeremonien und Fahrten an Ihrem Hochzeitstag."
          }
        },
        highlight: {
          title: "Maßgeschneiderte Begleitung",
          text:
            "Jede Leistung ist darauf ausgelegt, die Erwartungen einer Kundschaft zu erfüllen, die zuverlässigen, komfortablen und stilvollen Transport sucht. Ob Transfer, ein ganzer Tag mit Terminen, ein privater Ausflug oder ein wichtiges Ereignis - CBM stellt Ihnen Premium-Fahrzeuge mit Chauffeur zur Verfügung.",
          bookingButton: "Buchen",
          contactButton: "Kontaktieren Sie uns"
        }
      },
      contactPage: {
        hero: {
          title: "Kontakt",
          imageAlt: "CBM Privatchauffeur"
        },
        intro: {
          title: "Kontaktieren Sie uns",
          text:
            "Für jede Anfrage zu Informationen, Reservierungen oder Angeboten kontaktieren Sie uns über das untenstehende Formular oder direkt per Telefon und WhatsApp."
        },
        form: {
          namePlaceholder: "Name",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "E-Mail",
          messagePlaceholder: "Nachricht",
          submitButton: "Senden"
        },
        info: {
          title: "Informationen"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "Auf WhatsApp schreiben"
        }
      },
      footer: {
        description:
          "Premium-Privatchauffeurservice für Ihre Fahrten, Veranstaltungen und maßgeschneiderten Reservierungen.",
        navigationTitle: "Navigation",
        contactTitle: "Kontakt",
        availability: "Für Ihre Anfragen rund um die Uhr verfügbar",
        rights: "Alle Rechte vorbehalten."
      }
    }
  },

  th: {
    translation: {
      nav: {
        home: "หน้าแรก",
        services: "บริการ",
        about: "เกี่ยวกับเรา",
        fleet: "รถของเรา",
        contact: "ติดต่อ",
        booking: "การจอง"
      },
      header: {
        openMenu: "เปิดเมนู",
        closeMenu: "ปิดเมนู"
      },
      hero: {
        title: "บริการรถรับส่งส่วนตัวระดับพรีเมียม",
        subtitle: "ประสบการณ์ระดับพรีเมียมพร้อมพนักงานขับรถส่วนตัว",
        cta: "จองตอนนี้"
      },
      services: {
        title: "บริการของเรา",
        airport: "รับส่งสนามบิน",
        business: "บริการสำหรับธุรกิจ",
        event: "บริการรถสำหรับงานอีเวนต์"
      },
      home: {
        hero: {
          titleLine1: "คนขับรถส่วนตัว",
          titleLine2: "ระดับพรีเมียม",
          subtitle:
            "บริการเดินทางระดับพรีเมียมสำหรับงานอีเวนต์ งานแต่งงาน และโอกาสพิเศษ",
          bookingButton: "จอง",
          contactButton: "ติดต่อเรา",
          imageAlt: "คนขับรถส่วนตัว CBM"
        },
        services: {
          title: "บริการของเรา",
          learnMore: "ดูเพิ่มเติม",
          privateTransport: {
            title: "บริการรถส่วนตัว",
            description:
              "การเดินทางแบบปรับตามความต้องการสำหรับระยะใกล้และไกล"
          },
          concierge: {
            title: "คอนเซียจ",
            description:
              "บริการจองร้านอาหาร กิจกรรม และอีเวนต์"
          },
          availability: {
            title: "บริการพร้อมรถและคนขับ",
            description: "รถพร้อมคนขับสำหรับใช้งานหลายชั่วโมง"
          }
        },
        booking: {
          title: "การจอง",
          subtitle: "จองคนขับรถส่วนตัวของคุณกับ CBM",
          serviceLabel: "ประเภทบริการ",
          servicePlaceholder: "เลือกบริการ",
          serviceOption1: "บริการรถส่วนตัว",
          serviceOption2: "คอนเซียจ",
          serviceOption3: "บริการพร้อมรถและคนขับ",
          dateLabel: "วันที่",
          passengersLabel: "จำนวนผู้โดยสาร",
          passengersPlaceholder: "1",
          submitButton: "จอง"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "การจอง",
          titleLine1: "จอง",
          titleLine2: "คนขับรถส่วนตัวของคุณ",
          text:
            "จองการเดินทางของคุณได้ภายในไม่กี่นาที CBM พร้อมดูแลการรับส่งส่วนตัว การเดินทางเพื่อธุรกิจ อีเวนต์ งานแต่งงาน และบริการพร้อมรถกับคนขับ",
          highlights: {
            availability: "ให้บริการตามการจอง",
            premium: "บริการพรีเมียมอย่างเป็นส่วนตัว",
            customLabel: "เฉพาะคุณ",
            customText: "บริการที่ปรับตามความต้องการของคุณ"
          }
        },
        form: {
          title: "คำขอจอง",
          serviceLabel: "ประเภทบริการ",
          vehicleLabel: "รถที่ต้องการ",
          pickupLabel: "สถานที่รับ",
          destinationLabel: "ปลายทาง",
          dateLabel: "วันที่",
          timeLabel: "เวลา",
          passengersLabel: "จำนวนผู้โดยสาร",
          luggageLabel: "สัมภาระ",
          nameLabel: "ชื่อ-นามสกุล",
          phoneLabel: "โทรศัพท์",
          emailLabel: "อีเมล",
          detailsLabel: "รายละเอียดเพิ่มเติม",
          selectPlaceholder: "เลือก",
          pickupPlaceholder: "ตัวอย่าง: สนามบิน CDG, ปารีส, โรงแรม...",
          destinationPlaceholder:
            "ตัวอย่าง: Paris 8e, สถานี, สถานที่จัดงาน...",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "ชื่อของคุณ",
          phonePlaceholder: "๐๖ ๖๗ ๘๖ ๒๗ ๒๘",
          emailPlaceholder: "your@email.com",
          detailsPlaceholder:
            "เพิ่มรายละเอียดที่เป็นประโยชน์ได้ที่นี่: หมายเลขเที่ยวบิน เวลารอ ขากลับ ความต้องการเฉพาะ...",
          submitButton: "ส่งคำขอ",
          serviceOptions: {
            transfer: "รับส่งส่วนตัว",
            availability: "บริการพร้อมรถและคนขับ",
            event: "อีเวนต์",
            wedding: "งานแต่งงาน",
            concierge: "คอนเซียจ"
          },
          vehicleOptions: {
            classSE: "Mercedes Classe S / Classe E",
            classV: "Mercedes Classe V",
            rangeRover: "Range Rover"
          }
        },
        info: {
          howItWorks: {
            title: "การทำงาน",
            text:
              "กรอกคำขอของคุณ แล้วเราจะติดต่อกลับอย่างรวดเร็วเพื่อยืนยันรายละเอียด รถที่เหมาะสม และวันเวลาที่พร้อมให้บริการ"
          },
          fastResponse: {
            title: "ตอบกลับรวดเร็ว",
            text:
              "ทีมงานของเราดูแลคำขอของคุณอย่างรวดเร็วเพื่อเสนอทางออกที่เหมาะสมโดยเร็วที่สุด"
          },
          premiumService: {
            title: "บริการพรีเมียม",
            text:
              "คนขับมืออาชีพ รถพรีเมียม และการดูแลอย่างเป็นส่วนตัวเพื่อประสบการณ์ที่ไร้ที่ติ"
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "เกี่ยวกับเรา",
          titleLine1: "มาตรฐานของการบริการ",
          titleLine2: "ที่ส่งต่อจากพ่อสู่ลูก",
          text:
            "CBM เป็นธุรกิจครอบครัวที่เชี่ยวชาญด้านบริการรถรับส่งส่วนตัวระดับพรีเมียม มากกว่า 20 ปีที่เราได้นำประสบการณ์ ความพิถีพิถัน และจิตวิญญาณแห่งการบริการมอบให้แก่ลูกค้าที่ต้องการความสะดวกสบาย ความเป็นส่วนตัว และความน่าเชื่อถือ"
        },
        story: {
          title: "เรื่องราวของครอบครัว",
          text:
            "ที่ CBM อาชีพคนขับรถส่วนตัวไม่ได้เป็นเพียงงานเท่านั้น แต่เป็นความชำนาญที่สืบทอดกันในครอบครัว จากพ่อสู่ลูก เราสืบสานวิสัยทัศน์ด้านการบริการแบบเดียวกัน ซึ่งตั้งอยู่บนความสง่างาม ความตรงต่อเวลา ความสุภาพ และความใส่ใจในทุกรายละเอียด"
        },
        cards: {
          experience: {
            title: "ประสบการณ์มากกว่า 20 ปี",
            text:
              "ประสบการณ์ด้านการเดินทางส่วนตัวของเราช่วยให้เราตอบสนองความต้องการของลูกค้าได้อย่างแม่นยำ ไม่ว่าจะเป็นการเดินทางประจำวัน รับส่งสนามบิน งานอีเวนต์ หรือบริการแบบเฉพาะบุคคล"
          },
          family: {
            title: "ธุรกิจครอบครัว",
            text:
              "เราได้สร้าง CBM บนคุณค่าที่แข็งแกร่ง ได้แก่ ความไว้วางใจ ความจริงจัง ความพร้อมให้บริการ และการดูแลเฉพาะบุคคล ความเป็นธุรกิจครอบครัวนี้ทำให้เรามอบความสัมพันธ์ที่อบอุ่นและการติดตามดูแลทุกคำขออย่างใกล้ชิด"
          },
          premium: {
            title: "บริการระดับพรีเมียม",
            text:
              "เราจัดเตรียมรถพรีเมียมพร้อมคนขับ เพื่อรับประกันประสบการณ์การเดินทางที่สะดวกสบาย สง่างาม และเหมาะสมอย่างยิ่งสำหรับทั้งลูกค้าส่วนตัวและลูกค้าองค์กร"
          }
        },
        values: {
          title: "พันธสัญญาของเรา",
          discretion: {
            label: "ความเป็นส่วนตัว",
            text:
              "บริการที่สุขุม เป็นมืออาชีพ และเคารพความลับของลูกค้าแต่ละราย"
          },
          punctuality: {
            label: "ตรงต่อเวลา",
            text:
              "การจัดการอย่างรอบคอบเพื่อให้การเดินทางราบรื่นและการรับลูกค้าตรงเวลาเสมอ"
          },
          excellence: {
            label: "ความเป็นเลิศ",
            text:
              "ใส่ใจอย่างต่อเนื่องต่อความสบาย ภาพลักษณ์ และคุณภาพโดยรวมของบริการ"
          }
        }
      },
      fleetPage: {
        hero: {
          title: "ความเป็นเลิศของบริการเดินทางระดับสูง",
          subtitle:
            "ค้นพบรถระดับพรีเมียมที่ผสานความสง่างาม ความสบาย และภาพลักษณ์อันโดดเด่นในทุกการเดินทางของคุณ",
          cta: "ดูรถของเรา"
        },
        cta: "ดูเพิ่มเติม",
        vehicles: {
          mercedesSE: {
            alt: "Mercedes S-Class",
            title: "S Class",
            text:
              "สัมผัสความเป็นเลิศของการเดินทางกับ S Class ของเรา บริการ ultra premium ที่รวมความสบายสูงสุด ความเป็นส่วนตัว และการบริการระดับสูงสำหรับทุกเส้นทางสำคัญของคุณ"
          },
          mercedesE: {
            alt: "Mercedes E-Class",
            title: "E Class",
            text:
              "ทางเลือก premium ที่เหมาะสำหรับการเดินทางประจำวันของคุณ เพลิดเพลินกับความสบายที่เหนือกว่าและบริการที่หรูหรา ในระดับที่เข้าถึงได้มากกว่า S Class"
          },
          mercedesV: {
            alt: "Mercedes V-Class",
            title: "Mercedes V-Class",
            text:
              "เหมาะสำหรับกลุ่ม ครอบครัว และการเดินทางเพื่อธุรกิจ"
          },
          rangeRover: {
            alt: "Range Rover",
            title: "Range Rover",
            text:
              "SUV ระดับพรีเมียมที่ผสานความสง่างาม พื้นที่ใช้สอย และความสบายอย่างเต็มที่"
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "บริการของเรา",
          titleLine1: "บริการ",
          titleLine2: "ระดับพรีเมียม",
          text:
            "CBM ให้บริการคนขับรถส่วนตัวระดับพรีเมียมสำหรับทุกการเดินทางของคุณในฝรั่งเศสและยุโรป ด้วยความเป็นส่วนตัว ความตรงต่อเวลา และมาตรฐานคุณภาพสูง"
        },
        list: {
          airportTransfers: {
            title: "บริการรับส่งสนามบิน",
            description:
              "รับและส่งไปยังสนามบินหลักด้วยความตรงต่อเวลา ความสะดวกสบาย และการติดตามการเดินทางของคุณ"
          },
          availability: {
            title: "บริการพร้อมรถและคนขับ",
            description:
              "คนขับส่วนตัวและรถพรีเมียมพร้อมให้บริการคุณหลายชั่วโมงหรือทั้งวัน"
          },
          excursions: {
            title: "ทริปในฝรั่งเศสและยุโรป",
            description:
              "แพ็กเกจแบบเฉพาะบุคคลสำหรับการท่องเที่ยว ช้อปปิ้ง นัดหมาย และการเข้าพักส่วนตัว"
          },
          longDistance: {
            title: "ทุกระยะทางในฝรั่งเศส / ยุโรป",
            description:
              "การเดินทางระยะไกลอย่างสบายใจสำหรับความต้องการส่วนตัวหรือธุรกิจ โดยไม่ลดทอนความสบาย"
          },
          weddingChauffeur: {
            title: "คนขับสำหรับงานแต่งงาน",
            description:
              "บริการที่สง่างามและเป็นส่วนตัว เพื่อดูแลงานพิธีและการเดินทางในวันแต่งงานของคุณ"
          }
        },
        highlight: {
          title: "การดูแลแบบเฉพาะคุณ",
          text:
            "ทุกบริการได้รับการออกแบบเพื่อตอบโจทย์ลูกค้าที่ต้องการการเดินทางที่เชื่อถือได้ สะดวกสบาย และหรูหรา ไม่ว่าจะเป็นการรับส่ง วันนัดหมายส่วนตัว ทริปส่วนตัว หรืออีเวนต์สำคัญ CBM พร้อมมอบรถพรีเมียมพร้อมคนขับให้คุณ",
          bookingButton: "จอง",
          contactButton: "ติดต่อเรา"
        }
      },
      contactPage: {
        hero: {
          title: "ติดต่อ",
          imageAlt: "คนขับรถส่วนตัว CBM"
        },
        intro: {
          title: "ติดต่อเรา",
          text:
            "สำหรับข้อมูลเพิ่มเติม การจอง หรือการขอใบเสนอราคา โปรดติดต่อเราผ่านแบบฟอร์มด้านล่าง หรือโดยตรงทางโทรศัพท์และ WhatsApp"
        },
        form: {
          namePlaceholder: "ชื่อ",
          phonePlaceholder: "๐๖ ๖๗ ๘๖ ๒๗ ๒๘",
          emailPlaceholder: "อีเมล",
          messagePlaceholder: "ข้อความ",
          submitButton: "ส่ง"
        },
        info: {
          title: "ข้อมูล"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "คุยผ่าน WhatsApp"
        }
      },
      footer: {
        description:
          "บริการคนขับรถส่วนตัวระดับพรีเมียมสำหรับการเดินทาง งานอีเวนต์ และการจองแบบเฉพาะบุคคลของคุณ",
        navigationTitle: "เมนูนำทาง",
        contactTitle: "ติดต่อ",
        availability: "พร้อมให้บริการสำหรับคำขอของคุณตลอด 24/7",
        rights: "สงวนลิขสิทธิ์."
      }
    }
  },

  zh: {
    translation: {
      nav: {
        home: "首页",
        services: "服务",
        about: "关于我们",
        fleet: "车队",
        contact: "联系我们",
        booking: "预订"
      },
      header: {
        openMenu: "打开菜单",
        closeMenu: "关闭菜单"
      },
      hero: {
        title: "Premium 私人出行服务",
        subtitle: "尊享私人司机带来的 Premium 出行体验。",
        cta: "立即预订"
      },
      services: {
        title: "我们的服务",
        airport: "机场接送",
        business: "商务出行",
        event: "活动专车服务"
      },
      home: {
        hero: {
          titleLine1: "Premium",
          titleLine2: "私人司机服务",
          subtitle: "为活动、婚礼、晚宴等提供 Premium 出行服务。",
          bookingButton: "预订",
          contactButton: "联系我们",
          imageAlt: "CBM 私人司机"
        },
        services: {
          title: "我们的服务",
          learnMore: "了解更多",
          privateTransport: {
            title: "私人出行",
            description:
              "为短途和长途行程提供个性化出行服务。"
          },
          concierge: {
            title: "礼宾服务",
            description:
              "餐厅、活动和各类事件预订服务。"
          },
          availability: {
            title: "包车服务",
            description: "提供数小时配司机车辆服务。"
          }
        },
        booking: {
          title: "预订",
          subtitle: "通过 CBM 预订您的私人司机",
          serviceLabel: "服务类型",
          servicePlaceholder: "选择服务",
          serviceOption1: "私人出行",
          serviceOption2: "礼宾服务",
          serviceOption3: "包车服务",
          dateLabel: "日期",
          passengersLabel: "乘客人数",
          passengersPlaceholder: "1",
          submitButton: "预订"
        }
      },
      bookingPage: {
        hero: {
          eyebrow: "预订",
          titleLine1: "预订您的",
          titleLine2: "私人司机",
          text:
            "只需片刻即可完成您的行程预订。CBM 为您的私人接送、商务出行、活动、婚礼和包车服务提供支持。",
          highlights: {
            availability: "可预约服务",
            premium: "低调的 Premium 服务",
            customLabel: "定制化",
            customText: "根据您的需求提供服务"
          }
        },
        form: {
          title: "预订申请",
          serviceLabel: "服务类型",
          vehicleLabel: "所需车辆",
          pickupLabel: "出发地址",
          destinationLabel: "目的地",
          dateLabel: "日期",
          timeLabel: "时间",
          passengersLabel: "乘客人数",
          luggageLabel: "行李",
          nameLabel: "姓名",
          phoneLabel: "电话",
          emailLabel: "邮箱",
          detailsLabel: "补充说明",
          selectPlaceholder: "请选择",
          pickupPlaceholder: "例如：CDG 机场、巴黎、酒店……",
          destinationPlaceholder:
            "例如：巴黎第8区、车站、活动地点……",
          passengersPlaceholder: "1",
          luggagePlaceholder: "0",
          namePlaceholder: "您的姓名",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "your@email.com",
          detailsPlaceholder:
            "请在此补充任何有用信息：航班号、等待时间、返程、特殊需求……",
          submitButton: "发送申请",
          serviceOptions: {
            transfer: "私人接送",
            availability: "包车服务",
            event: "活动",
            wedding: "婚礼",
            concierge: "礼宾服务"
          },
          vehicleOptions: {
            classSE: "奔驰 S 级 / E 级",
            classV: "奔驰 V 级",
            rangeRover: "揽胜"
          }
        },
        info: {
          howItWorks: {
            title: "如何运作",
            text:
              "填写您的申请后，我们会尽快与您联系，确认细节、合适车辆以及可用时间。"
          },
          fastResponse: {
            title: "快速回复",
            text:
              "我们的团队会迅速处理您的需求，并尽快为您提供合适的解决方案。"
          },
          premiumService: {
            title: "Premium 服务",
            text:
              "专业司机、Premium 车辆以及低调贴心的陪同服务，为您带来无可挑剔的体验。"
          }
        }
      },
      aboutPage: {
        hero: {
          eyebrow: "关于我们",
          titleLine1: "一份服务的高标准",
          titleLine2: "由父传子，代代相承",
          text:
            "CBM 是一家专注于 Premium 私人出行的家族企业。二十多年来，我们始终以丰富经验、严谨态度和服务精神，服务于追求舒适、私密与可靠性的高要求客户。"
        },
        story: {
          title: "一个家族的故事",
          text:
            "在 CBM，私人司机不仅仅是一项职业，更是一种真正的家族传承。从父亲到儿子，我们始终延续同一种服务理念：优雅、准时、礼貌，以及对每一个细节的重视。"
        },
        cards: {
          experience: {
            title: "二十多年的经验",
            text:
              "我们在私人出行领域的经验，使我们能够精准满足客户需求，无论是日常出行、机场接送、活动服务还是定制化安排。"
          },
          family: {
            title: "家族企业",
            text:
              "我们以坚定的价值观建立了 CBM：信任、认真、随时响应以及个性化陪伴。正是这种家族特质，让我们能够为每一项需求提供更有人情味且细致周到的服务。"
          },
          premium: {
            title: "Premium 服务",
            text:
              "我们提供配备司机的 Premium 车辆，为私人客户和商务客户带来舒适、优雅且高度契合需求的出行体验。"
          }
        },
        values: {
          title: "我们的承诺",
          discretion: {
            label: "私密性",
            text: "低调、专业，并充分尊重每位客户隐私的服务。"
          },
          punctuality: {
            label: "准时",
            text: "严谨的组织安排，确保行程顺畅并始终准时接送。"
          },
          excellence: {
            label: "卓越",
            text: "始终关注舒适度、呈现品质以及整体服务质量。"
          }
        }
      },
      fleetPage: {
        hero: {
          title: "高端出行的卓越体验",
          subtitle:
            "探索一系列兼具优雅、舒适与尊贵感的非凡车型，满足您的每一次出行需求。",
          cta: "探索车队"
        },
        cta: "了解更多",
        vehicles: {
          mercedesSE: {
            alt: "奔驰 S 级",
            title: "S Class",
            text:
              "体验我们的 S Class 所带来的卓越出行服务。为您最重要的行程提供极致舒适、私密性与高端礼遇的 ultra premium 体验。"
          },
          mercedesE: {
            alt: "奔驰 E 级",
            title: "E Class",
            text:
              "适合日常出行的理想 premium 方案。在比 S Class 更易接近的定位下，依然享受更高舒适度与优雅服务。"
          },
          mercedesV: {
            alt: "奔驰 V 级",
            title: "Mercedes V-Class",
            text:
              "非常适合团体、家庭和商务出行。"
          },
          rangeRover: {
            alt: "揽胜",
            title: "Range Rover",
            text:
              "兼具气场、空间与极致舒适的 premium SUV。"
          }
        }
      },
      servicesPage: {
        hero: {
          eyebrow: "我们的服务",
          titleLine1: "Premium",
          titleLine2: "专属服务",
          text:
            "CBM 为您在法国及欧洲的所有行程提供 Premium 私人司机服务，兼具私密性、准时性与高品质标准。"
        },
        list: {
          airportTransfers: {
            title: "机场接送",
            description:
              "提供往返主要机场的接送服务，确保准时、舒适，并全程跟踪您的行程。"
          },
          availability: {
            title: "包车服务",
            description:
              "Premium 车辆与私人司机，可按数小时或全天为您服务。"
          },
          excursions: {
            title: "法国及欧洲出游",
            description:
              "为旅游、购物、商务会面和私人行程提供定制套餐。"
          },
          longDistance: {
            title: "法国 / 欧洲长途出行",
            description:
              "无论个人还是商务需求，都能在不牺牲舒适度的前提下安心进行长途行程。"
          },
          weddingChauffeur: {
            title: "婚礼司机服务",
            description:
              "以优雅且低调的方式，为您的婚礼典礼和当天出行提供陪伴服务。"
          }
        },
        highlight: {
          title: "量身定制的陪伴服务",
          text:
            "每一项服务都旨在满足追求可靠、舒适与精致出行体验客户的期待。无论是接送服务、全天商务安排、私人出游还是重要活动，CBM 都可为您提供 Premium 车辆与司机服务。",
          bookingButton: "预订",
          contactButton: "联系我们"
        }
      },
      contactPage: {
        hero: {
          title: "联系",
          imageAlt: "CBM 私人司机"
        },
        intro: {
          title: "联系我们",
          text:
            "如需咨询信息、预订或报价，请通过下方表单联系我们，或直接通过电话和 WhatsApp 与我们联系。"
        },
        form: {
          namePlaceholder: "姓名",
          phonePlaceholder: "06 67 86 27 28",
          emailPlaceholder: "邮箱",
          messagePlaceholder: "留言",
          submitButton: "发送"
        },
        info: {
          title: "信息"
        },
        whatsapp: {
          title: "WhatsApp",
          button: "通过 WhatsApp 联系"
        }
      },
      footer: {
        description: "为您的出行、活动和定制预订提供 Premium 私人司机服务。",
        navigationTitle: "导航",
        contactTitle: "联系",
        availability: "全天候 24/7 为您提供服务",
        rights: "版权所有."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLanguage,
    fallbackLng: "fr",
    supportedLngs: ["fr", "en", "tr", "de", "th", "zh"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "cbm_language",
      caches: ["localStorage"]
    }
  });

document.documentElement.lang = defaultLanguage;
document.documentElement.dir = "ltr";

i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = "ltr";
  localStorage.setItem("cbm_language", lng);
});

export default i18n;