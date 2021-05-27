const express = require("express");
const mongoose = require("mongoose");
require("./config/config");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(require("./rutas/index"));

mongoose.connect(
  "mongodb://localhost:27017/academy",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err, res) => {
    if (err) throw err;
    console.log("Base de datos online");
  }
);

app.listen(process.env.PORT, () => {
  console.log("Escuchando en el puerto", process.env.PORT);
});
