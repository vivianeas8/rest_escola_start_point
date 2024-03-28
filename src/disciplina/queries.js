const getDisciplinas = "SELECT d.id_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.id_curso, c.id_instituicao, c.id_tipo_curso, c.tx_descricao as curso_descricao, td.id_tipo_disciplina, td.tx_descricao as tipo_disciplina_descricao FROM disciplina d JOIN curso c ON d.id_curso = c.id_curso JOIN tipo_disciplina td ON d.id_tipo_disciplina = td.id_tipo_disciplina";
const getDisciplinaById = "SELECT d.id_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.id_curso, c.id_instituicao, c.id_tipo_curso, c.tx_descricao as curso_descricao, td.id_tipo_disciplina, td.tx_descricao as tipo_disciplina_descricao FROM disciplina d JOIN curso c ON d.id_curso = c.id_curso JOIN tipo_disciplina td ON d.id_tipo_disciplina = td.id_tipo_disciplina WHERE d.id_disciplina = $1";
const createDisciplina = "INSERT INTO disciplina (id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteDisciplina = "DELETE FROM disciplina WHERE id_disciplina = $1";
const updateDisciplina = "UPDATE disciplina SET id_curso = $1, id_tipo_disciplina = $2, tx_sigla = $3, tx_descricao = $4, in_periodo = $5, in_carga_horaria = $6 WHERE id_disciplina = $7";

module.exports = {
  getDisciplinas,
  getDisciplinaById,
  createDisciplina,
  deleteDisciplina,
  updateDisciplina
}