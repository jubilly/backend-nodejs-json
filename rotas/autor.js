import { Router } from "express";
import {
  getAutores,
  getAutoresPorId,
  insereAutor,
  patchAutor,
  deletaAutor,
} from "../controladores/autor.controladores.js";

export const routerAutor = Router();

routerAutor.get("/", getAutores);
routerAutor.get("/:id", getAutoresPorId);

routerAutor.post("/", insereAutor);

routerAutor.patch("/:id", patchAutor);

routerAutor.delete("/:id", deletaAutor);
