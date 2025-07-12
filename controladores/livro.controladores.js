import {
  getTodosLivros,
  getLivroPorId,
  insereLivro,
  deletaLivroPorId,
  modificaLivro,
} from "../servicos/livros.servicos.js";

function getLivros(request, response) {
  const livros = getTodosLivros();
  try {
    response.send({
      success: true,
      message: "Hello world!!!!",
      payload: livros,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

function getLivro(request, response) {
  const id = request.params.id;

  if (id && Number(id)) {
    const livro = getLivroPorId(id);
    response.send(livro);
  } else {
    response.status(422);
    response.send("Id invalido");
  }
}

function setLivro(request, response) {
  const body = request.body;

  console.log("body", body);
  try {
    insereLivro(body);
    response.send(201);
  } catch (error) {
    response.status(422);
    response.send(error.message);
  }
}

function patchLivro(request, response) {
  const id = request.params.id;

  try {
    const body = request.body;
    modificaLivro(id, body);
    response.send(201);
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

function deletaLivro(request, response) {
  const id = request.params.id;

  if (id && Number(id)) {
    deletaLivroPorId(id);
    response.send("Livro deletado com sucesso");
  } else {
    response.status(422);
    response.send(error.message);
  }
}

export { getLivros, getLivro, setLivro, patchLivro, deletaLivro };
