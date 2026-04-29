import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import "../styles/Booking.css";

import bookingHero from "../assets/hero-booking.png";

const API_URL =
  process.env.REACT_APP_API_URL || "https://api.cbmservicesandcar.fr";

const heroVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, y: 35, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const initialFormData = {
  service: "",
  vehicle: "",
  pickup: "",
  destination: "",
  date: "",
  time: "",
  passengers: "",
  luggage: "",
  name: "",
  phone: "",
  email: "",
  details: "",
};

function Booking() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: false,
      error: "",
      success: "",
    });

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.pickup.trim() ||
      !formData.destination.trim() ||
      !formData.date.trim() ||
      !formData.time.trim()
    ) {
      setStatus({
        loading: false,
        error:
          t("bookingPage.form.requiredFieldsError") ||
          "Veuillez renseigner le nom, l'email, le départ, la destination, la date et l'heure.",
        success: "",
      });
      return;
    }

    try {
      setStatus({
        loading: true,
        error: "",
        success: "",
      });

      const response = await fetch(`${API_URL}/api/reservation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || t("bookingPage.form.errorMessage"));
      }

      setStatus({
        loading: false,
        error: "",
        success: data.message || t("bookingPage.form.successMessage"),
      });

      setFormData(initialFormData);
    } catch (error) {
      setStatus({
        loading: false,
        error: error.message || t("bookingPage.form.errorMessage"),
        success: "",
      });
    }
  };

  return (
    <main className="booking-page">
      <section
        className="booking-hero"
        style={{ backgroundImage: `url(${bookingHero})` }}
      >
        <div className="booking-hero__overlay" />

        <div className="booking-hero__inner">
          <motion.div
            className="booking-hero__content"
            variants={heroVariants}
            initial="hidden"
            animate="show"
          >
            <span className="booking-hero__eyebrow">
              {t("bookingPage.hero.eyebrow")}
            </span>

            <h1 className="booking-hero__title">
              {t("bookingPage.hero.titleLine1")}
              <br />
              <span>{t("bookingPage.hero.titleLine2")}</span>
            </h1>

            <p className="booking-hero__text">{t("bookingPage.hero.text")}</p>

            <motion.div
              className="booking-hero__highlights"
              variants={cardsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <motion.div
                className="booking-info__card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <h3>{t("bookingPage.info.howItWorks.title")}</h3>
                <p>{t("bookingPage.info.howItWorks.text")}</p>
              </motion.div>

              <motion.div
                className="booking-info__card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <h3>{t("bookingPage.info.fastResponse.title")}</h3>
                <p>{t("bookingPage.info.fastResponse.text")}</p>
              </motion.div>

              <motion.div
                className="booking-info__card"
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
              >
                <h3>{t("bookingPage.info.premiumService.title")}</h3>
                <p>{t("bookingPage.info.premiumService.text")}</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="booking-form-card"
            variants={formVariants}
            initial="hidden"
            animate="show"
          >
            <span className="booking-form-card__label">
              {t("bookingPage.form.title")}
            </span>

            <h2>Demande de réservation</h2>

            <form className="booking-form-page" onSubmit={handleSubmit}>
              <div className="booking-form-page__grid">
                <div className="booking-field-page">
                  <label htmlFor="service">
                    {t("bookingPage.form.serviceLabel")}
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">
                      {t("bookingPage.form.selectPlaceholder")}
                    </option>
                    <option value="transfert">
                      {t("bookingPage.form.serviceOptions.transfer")}
                    </option>
                    <option value="mise-a-disposition">
                      {t("bookingPage.form.serviceOptions.availability")}
                    </option>
                    <option value="evenement">
                      {t("bookingPage.form.serviceOptions.event")}
                    </option>
                    <option value="mariage">
                      {t("bookingPage.form.serviceOptions.wedding")}
                    </option>
                    <option value="conciergerie">
                      {t("bookingPage.form.serviceOptions.concierge")}
                    </option>
                  </select>
                </div>

                <div className="booking-field-page">
                  <label htmlFor="vehicle">
                    {t("bookingPage.form.vehicleLabel")}
                  </label>

                  <select
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                  >
                    <option value="">
                      {t("bookingPage.form.selectPlaceholder")}
                    </option>

                    <option value="classe-s">
                      {t("bookingPage.form.vehicleOptions.classS")}
                    </option>

                    <option value="classe-e">
                      {t("bookingPage.form.vehicleOptions.classE")}
                    </option>

                    <option value="classe-v">
                      {t("bookingPage.form.vehicleOptions.classV")}
                    </option>

                    <option value="range-rover-autobiography">
                      {t("bookingPage.form.vehicleOptions.rangeRover")}
                    </option>
                  </select>
                </div>

                <div className="booking-field-page booking-field-page--full">
                  <label htmlFor="pickup">
                    {t("bookingPage.form.pickupLabel")}
                  </label>

                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.pickupPlaceholder")}
                  />
                </div>

                <div className="booking-field-page booking-field-page--full">
                  <label htmlFor="destination">
                    {t("bookingPage.form.destinationLabel")}
                  </label>

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.destinationPlaceholder")}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="date">
                    {t("bookingPage.form.dateLabel")}
                  </label>

                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="time">
                    {t("bookingPage.form.timeLabel")}
                  </label>

                  <input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="passengers">
                    {t("bookingPage.form.passengersLabel")}
                  </label>

                  <input
                    id="passengers"
                    name="passengers"
                    type="number"
                    min="1"
                    value={formData.passengers}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.passengersPlaceholder")}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="luggage">
                    {t("bookingPage.form.luggageLabel")}
                  </label>

                  <input
                    id="luggage"
                    name="luggage"
                    type="number"
                    min="0"
                    value={formData.luggage}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.luggagePlaceholder")}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="name">
                    {t("bookingPage.form.nameLabel")}
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.namePlaceholder")}
                  />
                </div>

                <div className="booking-field-page">
                  <label htmlFor="phone">
                    {t("bookingPage.form.phoneLabel")}
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.phonePlaceholder")}
                  />
                </div>

                <div className="booking-field-page booking-field-page--full">
                  <label htmlFor="email">
                    {t("bookingPage.form.emailLabel")}
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.emailPlaceholder")}
                  />
                </div>

                <div className="booking-field-page booking-field-page--full">
                  <label htmlFor="details">
                    {t("bookingPage.form.detailsLabel")}
                  </label>

                  <textarea
                    id="details"
                    name="details"
                    rows="6"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder={t("bookingPage.form.detailsPlaceholder")}
                  />
                </div>
              </div>

              {status.error && (
                <p className="booking-message booking-message--error">
                  {status.error}
                </p>
              )}

              {status.success && (
                <p className="booking-message booking-message--success">
                  {status.success}
                </p>
              )}

              <button
                type="submit"
                className="booking-submit"
                disabled={status.loading}
              >
                {status.loading
                  ? t("bookingPage.form.loadingButton")
                  : t("bookingPage.form.submitButton")}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Booking;