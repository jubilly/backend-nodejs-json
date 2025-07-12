import * as fs from "fs";

const livrosCaminho = "data/livros.json";

function getTodosLivros() {
  const dados = fs.readFileSync(livrosCaminho, "utf-8");
  return JSON.parse(dados);
}

function getLivroPorId(id) {
  const livros = getTodosLivros();
  return livros.find((livro) => livro.id === id);
}

function insereLivro(livroNovo) {
  const livros = getTodosLivros();
  const novaListaLivros = [...livros, livroNovo];

  fs.writeFileSync(livrosCaminho, JSON.stringify(novaListaLivros));
}

function modificaLivro(id, modificacoes) {
  const livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));
  const indiceModificado = livrosAtuais.findIndex((livro) => livro.id === id);

  const conteudoMudado = {
    ...livrosAtuais[indiceModificado],
    ...modificacoes,
  };
  livrosAtuais[indiceModificado] = conteudoMudado;

  fs.writeFileSync(livrosCaminho, JSON.stringify(livrosAtuais), "utf-8");
}

function deletaLivroPorId(id) {
  const todosLivros = fs.readFileSync(livros, "utf-8");

  const delecao = todosLivros.filter((livro) => livro.id !== id);

  fs.writeFileSync(livrosCaminho, JSON.stringify(delecao), "utf-8");
}

export {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
};
