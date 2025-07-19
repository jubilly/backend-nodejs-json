import mongoose from "mongoose";

const favoritosSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    livro_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "livros",
    },
  },
  {
    versionKey: false,
  }
);

const favoritosModel = mongoose.model("favoritos", favoritosSchema);
export default favoritosModel;
