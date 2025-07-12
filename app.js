import express from "express";
import { routerLivros } from "./rotas/livro.js";
import { routerFavoritos } from "./rotas/favoritos.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/livros", routerLivros);

app.use("/favoritos", routerFavoritos);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando a porta: ${PORT}`);
});
