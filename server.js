const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./db");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./api/routes/postRoutes/postRoutes"));
app.use(require("./api/routes/updateRoutes/updateRoutes"));
app.get("/", function (req, res) {
  res.send("I am working fine...");
});

app.listen(PORT, () => console.log(`Server is listening at PORT no. ${PORT}`));
