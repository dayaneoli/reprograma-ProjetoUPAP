require("dotenv-safe").config();

const express = require("express");

const cors = require("cors");

const db = require("./database/mongoConfig");

const app = express();


app.use(express.json());
app.use(cors());


const upaRotas = require("./routes/upaRoutes"); 
const anajacintaRotas = require("./routes/anajacintaRoutes");
const guanabaraRotas = require("./routes/guanabaraRoutes");

// const usuarioRotas = require("./routes/usuario"); 

//definição das rotas raizes 
app.use("/upa", upaRotas);
app.use("/anajacinta", anajacintaRotas);
app.use("/guanabara", guanabaraRotas);

// app.use("/usuario", usuarioRotas);
db.connect();

//Exportar a aplicação
module.exports = app;
