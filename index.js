// haciendo apì rest

const express = require("express");
// Metemos en una constante para luego llamar a sus metodos
const app = express();

// Se levanta el servidor
app.listen(3010,(err) => {
if (err){
  
  console.log("No se ha podido levantar el servidor");
  return;
}
  console.log("Servidor escuchando en el puerto 3010");

});

// Hasta aqui se hace el servidor
// Ahora a hacer los middleware

app.use((req,res,next)=>{
console.log("Paso 1");
next();
});

app.use((req, res, next) => {
  console.log("Paso 2");
  next();
});

app.use((req, res, next) => {
  console.log("Paso 3");
  next();
});
