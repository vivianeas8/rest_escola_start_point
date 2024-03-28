const getCursos = "SELECT c.id_curso, c.tx_descricao, i.id_instituicao, i.tx_sigla, i.tx_descricao as instituicao_descricao, tc.id_tipo_curso, tc.tx_descricao as tipo_curso_descricao FROM curso c join instituicao i on c.id_instituicao = i.id_instituicao join tipo_curso tc on c.id_tipo_curso = tc.id_tipo_curso";
const getCursoById = "SELECT c.id_curso, c.tx_descricao, i.id_instituicao, i.tx_sigla, i.tx_descricao as instituicao_descricao, tc.id_tipo_curso, tc.tx_descricao as tipo_curso_descricao FROM curso c join instituicao i on c.id_instituicao = i.id_instituicao join tipo_curso tc on c.id_tipo_curso = tc.id_tipo_curso WHERE id_curso = $1";
const createCurso = "INSERT INTO curso (id_instituicao, id_tipo_curso, tx_descricao) VALUES ($1, $2, $3)";
const deleteCurso = "DELETE FROM curso WHERE id_curso = $1";
const updateCurso = "UPDATE curso SET id_instituicao = $1, id_tipo_curso = $2, tx_descricao = $3 WHERE id_curso = $4";

module.exports = {
  getCursos,
  getCursoById,
  createCurso,
  deleteCurso,
  updateCurso
}