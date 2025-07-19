import mongoose from "mongoose";
import { createAutor, getAutorPorId } from "../services/autor.services.js";
import {
  getLivroPorId,
  getTodosLivros,
  getLivrosPorEditora,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
} from "../services/livros.services.js";
import { preprocessCSS } from "vite";

async function getLivros(request, response) {
  const livros = await getTodosLivros();
  try {
    response.send({
      success: true,
      message: "Lista de livros",
      payload: livros,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function getLivro(request, response) {
  const id = request.params.id;

  if (id) {
    const livro = await getLivroPorId(id);
    response.send(livro);
  } else {
    response.status(422);
    response.send("Id invalido");
  }
}

// http://localhost:8000/livros/search?editora=Pressman
async function getLivrosEditora(request, response) {
  const editora = request.query.editora;

  if (editora) {
    const livros = await getLivrosPorEditora(editora);
    response.send(livros);
  } else {
    response.status(422);
    response.send("Editora não informada");
  }
}

async function setLivro(request, response) {
  const body = request.body;

  try {
    const livro = await insereLivro(body);
    response.status(201).send({
      success: true,
      message: "Livro inserido com sucesso!",
      payload: livro,
    });
  } catch (error) {
    response.status(422);
    response.send(error.message);
  }
}

async function patchLivro(request, response) {
  const id = request.params.id;

  try {
    const body = request.body;
    const livroModificado = await modificaLivro(id, body);

    response.status(201).send({
      success: true,
      message: "Livro atualizado com sucesso!",
      payload: {
        livro: livroModificado,
      },
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function deletaLivro(request, response) {
  const id = request.params.id;

  if (id) {
    await deletaLivroPorId(id);
    response.send("Livro deletado com sucesso");
  } else {
    response.status(422);
    response.send(error.message);
  }
}

// export { getLivros, getLivro, setLivro, patchLivro, deletaLivro };
export {
  getLivros,
  getLivro,
  getLivrosEditora,
  setLivro,
  patchLivro,
  deletaLivro,
};
