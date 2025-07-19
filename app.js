import express from "express";
import { routerLivros } from "./rotas/livro.js";
import { routerFavoritos } from "./rotas/favoritos.js";
import { routerAutor } from "./rotas/autor.js";

import cors from "cors";
import connectDB from "./config/dbConnect.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/livros", routerLivros);

app.use("/favoritos", routerFavoritos);

app.use("/autor", routerAutor);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando a porta: ${PORT}`);
});

const conexao = await connectDB();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com banco feita com sucesso");
});
