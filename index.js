// Haciendo el apì rest

const express = require("express");
const morgan = require("morgan");
// Metemos en una constante para luego llamar a sus metodos
const app = express();

// Se levanta el servidor
app.listen(3010, (err) => {
  if (err) {
    console.log("No se ha podido levantar el servidor");
    return;
  }
  console.log("Servidor escuchando en el puerto 3010");
});

// Hasta aqui se hace el servidor
// Ahora a hacer los middleware

const middleware1 = (req, res, next) => {
  console.log("Paso 1");
  next();
};
const middleware2 = (req, res, next) => {
  console.log("Paso 2");
  if (req.method === "GET") {
    next();
  } else {
    res.json({ mensaje: "Me paro en el paso 2" });
  }
};
const middleware3 = (req, res, next) => {
  console.log("Paso 3");
  next();
};

app.use(morgan("dev"));
app.use(express.json());
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

app.get(
  "/alumnos",
  (req, res, next) => {
    // No se consolea en el cliente
    console.log("Paso /alumnos 1");
    req.aula = 1;
    next();
  },
  (req, res, next) => {
    console.log("Paso /alumnos 2");
    next();
  },
  (req, res, next) => {
    const { aula } = req;
    console.log("Paso /alumnos 3");
    console.log(`Listado de alumnos del aula ${aula}`);
    res.json({ alumnos: [] });
  }
);
