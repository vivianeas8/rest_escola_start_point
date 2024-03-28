const getTipoCursos = "SELECT * FROM tipo_curso";
const getTipoCursoById = "SELECT * FROM tipo_curso WHERE id_tipo_curso = $1";
const createTipoCurso = "INSERT INTO tipo_curso (tx_descricao) VALUES ($1)";
const deleteTipoCurso = "DELETE FROM tipo_curso WHERE id_tipo_curso = $1";
const updateTipoCurso = "UPDATE tipo_curso SET tx_descricao = $1 WHERE id_tipo_curso = $2";

module.exports = {
  getTipoCursos,
  getTipoCursoById,
  createTipoCurso,
  deleteTipoCurso,
  updateTipoCurso
}