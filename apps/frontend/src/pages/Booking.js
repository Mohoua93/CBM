import { useTranslation } from "react-i18next";
import "../styles/Booking.css";

function Booking() {
  const { t } = useTranslation();

  return (
    <div className="booking-page">
      <section className="booking-hero">
        <div className="booking-hero__content">
          <span className="booking-hero__eyebrow">
            {t("bookingPage.hero.eyebrow")}
          </span>

          <h1 className="booking-hero__title">
            {t("bookingPage.hero.titleLine1")}
            <br />
            {t("bookingPage.hero.titleLine2")}
          </h1>

          <p className="booking-hero__text">
            {t("bookingPage.hero.text")}
          </p>

          <div className="booking-hero__highlights">
            <div className="booking-highlight">
              <span className="booking-highlight__number">24/7</span>
              <p>{t("bookingPage.hero.highlights.availability")}</p>
            </div>

            <div className="booking-highlight">
              <span className="booking-highlight__number">Premium</span>
              <p>{t("bookingPage.hero.highlights.premium")}</p>
            </div>

            <div className="booking-highlight">
              <span className="booking-highlight__number">
                {t("bookingPage.hero.highlights.customLabel")}
              </span>
              <p>{t("bookingPage.hero.highlights.customText")}</p>
            </div>
          </div>
        </div>

        <div className="booking-form-card">
          <h2>{t("bookingPage.form.title")}</h2>

          <form className="booking-form-page">
            <div className="booking-form-page__grid">
              <div className="booking-field-page">
                <label htmlFor="service">
                  {t("bookingPage.form.serviceLabel")}
                </label>

                <select id="service" name="service">
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

                <select id="vehicle" name="vehicle">
                  <option value="">
                    {t("bookingPage.form.selectPlaceholder")}
                  </option>

                  <option value="classe-s-e">
                    {t("bookingPage.form.vehicleOptions.classSE")}
                  </option>

                  <option value="classe-v">
                    {t("bookingPage.form.vehicleOptions.classV")}
                  </option>

                  <option value="range-rover">
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
                  placeholder={t("bookingPage.form.destinationPlaceholder")}
                />
              </div>

              <div className="booking-field-page">
                <label htmlFor="date">
                  {t("bookingPage.form.dateLabel")}
                </label>

                <input id="date" name="date" type="date" />
              </div>

              <div className="booking-field-page">
                <label htmlFor="time">
                  {t("bookingPage.form.timeLabel")}
                </label>

                <input id="time" name="time" type="time" />
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
                  placeholder={t("bookingPage.form.detailsPlaceholder")}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="booking-submit">
              {t("bookingPage.form.submitButton")}
            </button>
          </form>
        </div>
      </section>

      <section className="booking-info">
        <div className="booking-info__card">
          <h3>{t("bookingPage.info.howItWorks.title")}</h3>
          <p>{t("bookingPage.info.howItWorks.text")}</p>
        </div>

        <div className="booking-info__card">
          <h3>{t("bookingPage.info.fastResponse.title")}</h3>
          <p>{t("bookingPage.info.fastResponse.text")}</p>
        </div>

        <div className="booking-info__card">
          <h3>{t("bookingPage.info.premiumService.title")}</h3>
          <p>{t("bookingPage.info.premiumService.text")}</p>
        </div>
      </section>
    </div>
  );
}

export default Booking;