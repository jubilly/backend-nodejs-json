import * as fs from "fs";

const livros = "./data/livros.json";

const teste = fs.readFileSync(livros);

const parsed = JSON.parse(teste);
