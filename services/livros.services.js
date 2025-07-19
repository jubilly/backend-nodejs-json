import livroModel from "../models/Livros.js";

async function getTodosLivros() {
  const list = await livroModel.find({});
  return list;
}

async function getLivroPorId(id) {
  const livro = await livroModel.findById(id);
  return livro;
}

async function insereLivro(params) {
  const livro = await livroModel.create(params);
  return livro;
}

async function modificaLivro(id, body) {
  const livro = await livroModel.findByIdAndUpdate(id, body, {
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
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
};
