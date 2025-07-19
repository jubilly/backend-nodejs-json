import mongoose from "mongoose";
import autorModel from "../models/Autor.js";

async function createAutor(body) {
  const autor = await autorModel.create(body);
  return autor;
}

async function getTodosAutores() {
  const autores = await autorModel.find({});
  return autores;
}

async function getAutorPorId(id) {
  const autor = await autorModel.findById(id);

  return autor;
}

async function modificaAutor(id, data) {
  const objectId = new mongoose.Types.ObjectId(id);

  const autor = await autorModel.findByIdAndUpdate(objectId, data, {
    new: true,
  });

  return autor;
}

async function deletaAutorPorId(id) {
  const autor = await autorModel.findByIdAndDelete(id);
  return autor;
}

export {
  createAutor,
  getTodosAutores,
  getAutorPorId,
  modificaAutor,
  deletaAutorPorId,
};
