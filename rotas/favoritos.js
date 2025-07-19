import { Router } from "express";
import {
  getFavoritos,
  insereFavoritos,
  deletaFavorito,
} from "../controladores/favorito.controladores.js";

export const routerFavoritos = Router();

routerFavoritos.get("/", getFavoritos);
routerFavoritos.post("/:id", insereFavoritos);
routerFavoritos.delete("/:id", deletaFavorito);
