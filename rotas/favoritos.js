import { Router } from "express";
import {
  getFavoritos,
  updateFavoritos,
} from "../controladores/favorito.controladores.js";

export const routerFavoritos = Router();

routerFavoritos.get("/", getFavoritos);
routerFavoritos.patch("/:id", updateFavoritos);
