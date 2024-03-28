const getInstituicoes = "SELECT * FROM instituicao";
const getInstituicaoById = "SELECT * FROM instituicao WHERE id_instituicao = $1";
const createInstituicao = "INSERT INTO instituicao (tx_sigla, tx_descricao) VALUES ($1, $2)";
const deleteInstituicao = "DELETE FROM instituicao WHERE id_instituicao = $1";
const updateInstituicao = "UPDATE instituicao SET tx_sigla = $1, tx_descricao = $2 WHERE id_instituicao = $3";

module.exports = {
  getInstituicoes,
  getInstituicaoById,
  createInstituicao,
  deleteInstituicao,
  updateInstituicao
}