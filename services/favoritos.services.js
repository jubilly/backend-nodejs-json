import favoritosModel from "../models/Favoritos.js";
import mongoose from "mongoose";

async function getTodosFavoritos() {
  const favoritos = await favoritosModel.find({}).populate("livro_id");

  return favoritos;
}

async function insereFavorito(id) {
  const insere = await favoritosModel.create({ livro_id: id });

  return {
    message: insere
      ? "Livro favoritado com sucesso!"
      : "Livro removido dos favoritos com sucesso!",
    payload: insere,
  };
}

async function deleteFavorito(id) {
  const objectId = new mongoose.Types.ObjectId(id);
  const target = await favoritosModel.findByIdAndDelete(objectId);

  return target;
}

export { getTodosFavoritos, insereFavorito, deleteFavorito };
