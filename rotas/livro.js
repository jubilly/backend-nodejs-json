import { Router } from "express";
import {
  getLivros,
  getLivro,
  setLivro,
  patchLivro,
  deletaLivro,
} from "../controladores/livro.controladores.js";

export const routerLivros = Router();

routerLivros.get("/", getLivros);

routerLivros.get("/:id", getLivro);

routerLivros.post("/", setLivro);

routerLivros.patch("/:id", patchLivro);

routerLivros.delete("/:id", deletaLivro);
