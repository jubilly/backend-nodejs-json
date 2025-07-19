import {
  getTodosFavoritos,
  insereFavorito,
  deleteFavorito,
} from "../services/favoritos.services.js";

async function getFavoritos(request, response) {
  try {
    const favoritos = await getTodosFavoritos();
    response.send({
      success: true,
      message: "Lista de favoritos",
      payload: favoritos,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function insereFavoritos(request, response) {
  try {
    const id = request.params.id;

    const update = await insereFavorito(id);

    response.send({
      success: true,
      message: "Livro atualizado com sucesso!",
      payload: update.payload,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

async function deletaFavorito(request, response) {
  try {
    const id = request.params.id;
    const target = await deleteFavorito(id);
    if (!target) {
      return response.status(404).send({
        success: false,
        message: "Favorito não encontrado",
      });
    }
    response.send({
      success: true,
      message: "Favorito deletado com sucesso!",
      payload: target,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

export { getFavoritos, insereFavoritos, deletaFavorito };
