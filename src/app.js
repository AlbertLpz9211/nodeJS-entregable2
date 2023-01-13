//importar express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");


const userRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes")

//crear una instancia de express
const app = express();
app.use(express.json()); //middleware de express
const PORT = 8000;

db.authenticate()
  .then(() => console.log("Autenticadion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a utilizar el metodo sync para sincronmizar el modelo a nuestra base de datos
//devuelve una promesa y la resolvemos con then
db.sync({ force: false }) // force: true --> inicializa por completo conforme a los modelos
  .then(() => {
    console.log("base de datos sincronizada");
  })
  .catch((error) => {
    console.log(error);
  }); //devuelve una promesa

app.get("/", (req, res) => {
  res.status(200).json({ message: "buenvenido al servidor" });
});

app.use("/api/v1", userRoutes);

app.use("/api/v1", todosRoutes);


app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
