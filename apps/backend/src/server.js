const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API CBM en ligne");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend opérationnel" });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});