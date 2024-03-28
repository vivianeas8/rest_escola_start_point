const getTitulos = "SELECT * FROM titulo";
const getTituloById = "SELECT * FROM titulo WHERE id_titulo = $1";
const createTitulo = "INSERT INTO titulo (tx_descricao) VALUES ($1)";
const deleteTitulo = "DELETE FROM titulo WHERE id_titulo = $1";
const updateTitulo = "UPDATE titulo SET tx_descricao = $1 WHERE id_titulo = $2";

module.exports = {
  getTitulos,
  getTituloById,
  createTitulo,
  deleteTitulo,
  updateTitulo
}