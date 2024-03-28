const getTipoDisciplinas = "SELECT * FROM tipo_disciplina";
const getTipoDisciplinaById = "SELECT * FROM tipo_disciplina WHERE id_tipo_disciplina = $1";
const createTipoDisciplina = "INSERT INTO tipo_disciplina (tx_descricao) VALUES ($1)";
const deleteTipoDisciplina = "DELETE FROM tipo_disciplina WHERE id_tipo_disciplina = $1";
const updateTipoDisciplina = "UPDATE tipo_disciplina SET tx_descricao = $1 WHERE id_tipo_disciplina = $2";

module.exports = {
  getTipoDisciplinas,
  getTipoDisciplinaById,
  createTipoDisciplina,
  deleteTipoDisciplina,
  updateTipoDisciplina
}