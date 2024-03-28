const getCursa = "SELECT a.id_aluno, a.tx_nome, a.tx_sexo, a.dt_nascimento, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.in_ano, c.in_semestre, c.in_faltas, c.nm_nota1, c.nm_nota2, c.nm_nota3, c.bl_aprovado FROM cursa c JOIN aluno a ON c.id_aluno = a.id_aluno JOIN disciplina d ON c.id_disciplina = d.id_disciplina";
const getCursaByAlunoId = "SELECT a.id_aluno, a.tx_nome, a.tx_sexo, a.dt_nascimento, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria, c.in_ano, c.in_semestre, c.in_faltas, c.nm_nota1, c.nm_nota2, c.nm_nota3, c.bl_aprovado FROM cursa c JOIN aluno a ON c.id_aluno = a.id_aluno JOIN disciplina d ON c.id_disciplina = d.id_disciplina WHERE a.id_aluno = $1";
const createCursa = "INSERT INTO cursa (id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
const deleteCursa = "DELETE FROM cursa WHERE id_aluno = $1 AND id_disciplina = $2";
const updateCursa = "UPDATE cursa SET in_ano = $1, in_semestre = $2, in_faltas = $3, nm_nota1 = $4, nm_nota2 = $5, nm_nota3 = $6, bl_aprovado = $7 WHERE id_aluno = $8 AND id_disciplina = $9";

module.exports = {
  getCursa,
  getCursaByAlunoId,
  createCursa,
  deleteCursa,
  updateCursa
}