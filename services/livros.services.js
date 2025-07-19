import mongoose from "mongoose";
import livroModel from "../models/Livros.js";

async function getTodosLivros() {
  const list = await livroModel.find({});
  return list;
}

async function getLivroPorId(id) {
  const livro = await livroModel.findById(id);
  return livro;
}

async function getLivrosPorEditora(editora) {
  const livros = await livroModel.find({ editora: editora });
  return livros;
}

async function insereLivro(params) {
  const livro = await livroModel.create(params);
  return livro;
}

async function modificaLivro(id, data) {
  const objectId = new mongoose.Types.ObjectId(id);

  const livro = await livroModel.findByIdAndUpdate(objectId, data, {
    new: true,
  });

  return livro;
}

async function deletaLivroPorId(id) {
  const livro = await livroModel.findByIdAndDelete(id);
  return livro;
}

export {
  getTodosLivros,
  getLivroPorId,
  getLivrosPorEditora,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
};
