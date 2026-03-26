const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URL_WWW,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed by CORS"));
    },
  })
);

app.use(express.json());

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function sanitizeHeader(value = "") {
  return String(value).replace(/[\r\n]+/g, " ").trim();
}

function isValidEmail(value = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

async function sendBrevoEmail({ subject, replyTo, htmlContent }) {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: {
        name: "CBM",
        email: process.env.FROM_EMAIL,
      },
      to: [
        {
          email: process.env.CONTACT_TO_EMAIL,
        },
      ],
      replyTo: {
        email: replyTo,
      },
      subject,
      htmlContent,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Erreur lors de l'envoi de l'email.");
  }

  return data;
}

app.get("/", (req, res) => {
  res.send("API CBM en ligne");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "Veuillez renseigner le nom, l'email et le message.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: "Veuillez renseigner une adresse email valide.",
      });
    }

    if (
      !process.env.BREVO_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      return res.status(500).json({
        message: "Le service email n'est pas configuré correctement.",
      });
    }

    const trimmedName = String(name).trim();
    const trimmedPhone = String(phone || "").trim();
    const trimmedEmail = String(email).trim();
    const trimmedMessage = String(message).trim();

    const safeName = escapeHtml(trimmedName);
    const safePhone = escapeHtml(trimmedPhone || "Non renseigné");
    const safeEmail = escapeHtml(trimmedEmail);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, "<br />");

    await sendBrevoEmail({
      subject: `Nouveau message de contact - ${sanitizeHeader(trimmedName).slice(
        0,
        80
      )}`,
      replyTo: sanitizeHeader(trimmedEmail),
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouveau message depuis le site CBM</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Message :</strong><br />${safeMessage}</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: "Votre message a bien été envoyé.",
    });
  } catch (error) {
    console.error("Erreur /api/contact :", error);

    return res.status(500).json({
      message: "Une erreur est survenue lors de l'envoi du message.",
    });
  }
});

app.post("/api/reservation", async (req, res) => {
  try {
    const {
      service,
      vehicle,
      pickup,
      destination,
      date,
      time,
      passengers,
      luggage,
      name,
      phone,
      email,
      details,
    } = req.body;

    if (!name || !email || !pickup || !destination || !date || !time) {
      return res.status(400).json({
        message:
          "Veuillez renseigner le nom, l'email, le départ, la destination, la date et l'heure.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        message: "Veuillez renseigner une adresse email valide.",
      });
    }

    if (
      !process.env.BREVO_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.CONTACT_TO_EMAIL
    ) {
      return res.status(500).json({
        message: "Le service email n'est pas configuré correctement.",
      });
    }

    const safeService = escapeHtml(String(service || "Non renseigné").trim());
    const safeVehicle = escapeHtml(String(vehicle || "Non renseigné").trim());
    const safePickup = escapeHtml(String(pickup).trim());
    const safeDestination = escapeHtml(String(destination).trim());
    const safeDate = escapeHtml(String(date).trim());
    const safeTime = escapeHtml(String(time).trim());
    const safePassengers = escapeHtml(
      String(passengers || "Non renseigné").trim()
    );
    const safeLuggage = escapeHtml(String(luggage || "Non renseigné").trim());
    const safeName = escapeHtml(String(name).trim());
    const safePhone = escapeHtml(String(phone || "Non renseigné").trim());
    const safeEmail = escapeHtml(String(email).trim());
    const safeDetails = escapeHtml(String(details || "").trim()).replace(
      /\n/g,
      "<br />"
    );

    await sendBrevoEmail({
      subject: `Nouvelle réservation - ${sanitizeHeader(name).slice(0, 80)}`,
      replyTo: sanitizeHeader(email),
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2>Nouvelle demande de réservation</h2>
          <p><strong>Service :</strong> ${safeService}</p>
          <p><strong>Véhicule :</strong> ${safeVehicle}</p>
          <p><strong>Départ :</strong> ${safePickup}</p>
          <p><strong>Destination :</strong> ${safeDestination}</p>
          <p><strong>Date :</strong> ${safeDate}</p>
          <p><strong>Heure :</strong> ${safeTime}</p>
          <p><strong>Passagers :</strong> ${safePassengers}</p>
          <p><strong>Bagages :</strong> ${safeLuggage}</p>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Téléphone :</strong> ${safePhone}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Détails :</strong><br />${safeDetails || "Aucun détail"}</p>
        </div>
      `,
    });

    return res.status(200).json({
      message: "Votre demande de réservation a bien été envoyée.",
    });
  } catch (error) {
    console.error("Erreur /api/reservation :", error);

    return res.status(500).json({
      message: "Une erreur est survenue lors de l'envoi de la réservation.",
    });
  }
});

app.use((err, req, res, next) => {
  if (err.message === "Origin not allowed by CORS") {
    return res.status(403).json({ message: "Requête bloquée par CORS." });
  }

  console.error("Erreur serveur :", err);
  return res.status(500).json({ message: "Erreur interne du serveur." });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});