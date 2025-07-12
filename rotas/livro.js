import { Router } from "express";
import {
  getLivros,
  getLivro,
  setLivro,
  patchLivro,
} from "../controladores/livro.controladores.js";

export const routerLivros = Router();

routerLivros.get("/", getLivros);

routerLivros.get("/:id", getLivro);

routerLivros.post("/", setLivro);

routerLivros.patch("/:id", patchLivro);
