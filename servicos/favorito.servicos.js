import * as fs from "fs";

const livrosCaminho = "data/livros.json";

function getTodosLivros() {
  const dados = fs.readFileSync(livrosCaminho, "utf-8");
  return JSON.parse(dados);
}

function getTodosFavoritos() {
  const livros = getTodosLivros();

  const favoritos = livros.filter((livro) => livro.favorito == true);

  return {
    payload: favoritos,
    message:
      favoritos.length > 0
        ? "Livros encontrados com sucesso"
        : "Não há livros favoritos cadastrados",
  };
}

function updateFavorito(id, isFavorito) {
  const livros = getTodosLivros();

  const itemFavoritado = livros.findIndex((livro) => livro.id === parseInt(id));

  livros[itemFavoritado].favorito = isFavorito;

  const novaListaLivros = [...livros];

  fs.writeFileSync(livrosCaminho, JSON.stringify(novaListaLivros));

  return {
    message: isFavorito
      ? "Livro favoritado com sucesso!"
      : "Livro removido dos favoritos com sucesso!",
    payload: novaListaLivros,
  };
}

export { getTodosLivros, getTodosFavoritos, updateFavorito };
