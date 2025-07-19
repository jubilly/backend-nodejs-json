import {
  createAutor,
  deletaAutorPorId,
  getAutorPorId,
  getTodosAutores,
  modificaAutor,
} from "../services/autor.services.js";

async function getAutores(request, response) {
  try {
    const autores = await getTodosAutores();
    response.send({
      success: true,
      message: "Autores encontrados com sucesso!",
      payload: autores,
    });
  } catch (error) {
    response.status(500).send({
      success: false,
      message: "Erro ao buscar autores",
      error: error.message,
    });
  }
}

async function getAutoresPorId(request, response) {
  const id = request.params.id;
  try {
    const autor = await getAutorPorId(id);
    if (!autor) {
      return response.status(404).send({
        success: false,
        message: "Autor não encontrado",
      });
    }
    response.send({
      success: true,
      message: "Autor encontrado com sucesso!",
      payload: autor,
    });
  } catch (error) {
    response.status(500).send({
      success: false,
      message: "Erro ao buscar autor",
      error: error.message,
    });
  }
}

async function insereAutor(request, response) {
  try {
    const autor = request.body;
    const novoAutor = await createAutor(autor);
    response.send({
      success: true,
      message: "Autor inserido com sucesso!",
      payload: novoAutor,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function patchAutor(request, response) {
  try {
    const id = request.params.id;
    const body = request.body;

    const autorAtualizado = await modificaAutor(id, body);

    response.send({
      success: true,
      message: "Autor atualizado com sucesso!",
      payload: autorAtualizado,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function deletaAutor(request, response) {
  try {
    const id = request.params.id;
    const autorExistente = await getAutorPorId(id);
    if (!autorExistente) {
      return response.status(404).send({
        success: false,
        message: "Autor não encontrado",
      });
    }

    await deletaAutorPorId(id);

    response.send({
      success: true,
      message: "Autor deletado com sucesso!",
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

export { getAutores, getAutoresPorId, insereAutor, patchAutor, deletaAutor };
