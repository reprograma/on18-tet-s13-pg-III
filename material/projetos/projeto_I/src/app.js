const express = require("express");
const cors = require("cors");
const bibliotecaRoutes = require("./routes/bibliotecaRoutes");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("API ON");
});

app.use("/biblioteca", bibliotecaRoutes);

module.exports = app;
