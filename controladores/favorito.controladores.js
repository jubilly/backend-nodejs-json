import {
  getTodosFavoritos,
  updateFavorito,
} from "../servicos/favorito.servicos.js";

function getFavoritos(request, response) {
  try {
    const favoritos = getTodosFavoritos();
    response.send({
      success: true,
      message: favoritos.message,
      payload: favoritos.payload,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

function updateFavoritos(request, response) {
  try {
    const id = request.params.id;
    const isFavorito = request.body.favorito;

    const update = updateFavorito(id, isFavorito);

    response.send({
      success: true,
      message: update.message,
      payload: update.payload,
    });
  } catch (error) {
    response.status(500);
    response.send(error.message);
  }
}

export { getFavoritos, updateFavoritos };
