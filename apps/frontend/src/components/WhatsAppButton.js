import "../styles/WhatsAppButton.css";

function WhatsAppButton() {
  const phoneNumber = "33600000000"; // Remplace par ton numéro WhatsApp
  const instagramUrl = "https://www.instagram.com/cbmservicesandcar/"; // Remplace par ton lien Instagram

  const message =
    "Bonjour, je souhaite obtenir plus d'informations sur vos services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="social-floating">
      <a
        href={instagramUrl}
        className="social-floating__button social-floating__button--instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nous suivre sur Instagram"
      >
        <svg
          className="social-floating__icon"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.25-2.5a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z"
          />
        </svg>
      </a>

      <a
        href={whatsappUrl}
        className="social-floating__button social-floating__button--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec nous sur WhatsApp"
      >
        <span className="social-floating__tooltip">Discutons ensemble</span>

        <svg
          className="social-floating__icon"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M16.04 3C8.86 3 3.02 8.84 3.02 16.02c0 2.29.6 4.53 1.75 6.5L3 29l6.65-1.74a12.94 12.94 0 0 0 6.39 1.67h.01c7.18 0 13.02-5.84 13.02-13.02C29.07 8.84 23.23 3 16.04 3Zm0 23.73h-.01c-1.91 0-3.78-.51-5.42-1.47l-.39-.23-3.94 1.03 1.05-3.84-.25-.4a10.74 10.74 0 0 1-1.65-5.8c0-5.87 4.77-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.12 7.52c-.01 5.87-4.79 10.71-10.68 10.71Zm5.84-7.97c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.5-.16-.71.16-.21.32-.82 1.05-1.01 1.27-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.15.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.71-1.71-.98-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.63 0 1.55 1.14 3.05 1.3 3.26.16.21 2.24 3.42 5.43 4.79.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default WhatsAppButton;