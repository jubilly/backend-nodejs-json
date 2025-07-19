import {
  getLivroPorId,
  getTodosLivros,
  insereLivro,
  modificaLivro,
  deletaLivroPorId,
} from "../services/livros.services.js";

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

async function setLivro(request, response) {
  const body = request.body;

  try {
    await insereLivro(body);
    response.send(201);
  } catch (error) {
    response.status(422);
    response.send(error.message);
  }
}

async function patchLivro(request, response) {
  const id = request.params.id;

  try {
    const body = request.body;
    await modificaLivro(id, body);
    response.send(201);
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
export { getLivros, getLivro, setLivro, patchLivro, deletaLivro };
