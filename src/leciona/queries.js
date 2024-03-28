const getLeciona = "SELECT p.id_professor, p.id_titulo, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria FROM leciona l JOIN professor p ON l.id_professor = p.id_professor JOIN disciplina d ON d.id_disciplina = l.id_disciplina";
const getLecionaByProfessorId = "SELECT p.id_professor, p.id_titulo, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria FROM leciona l JOIN professor p ON l.id_professor = p.id_professor JOIN disciplina d ON d.id_disciplina = l.id_disciplina WHERE p.id_professor = $1";
const getLecionaByDisciplinaId = "SELECT p.id_professor, p.id_titulo, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, d.id_disciplina, d.id_curso, d.id_tipo_disciplina, d.tx_sigla, d.tx_descricao, d.in_periodo, d.in_carga_horaria FROM leciona l JOIN professor p ON l.id_professor = p.id_professor JOIN disciplina d ON d.id_disciplina = l.id_disciplina WHERE d.id_disciplina = $1";
const createLeciona = "INSERT INTO leciona (id_professor, id_disciplina) VALUES ($1, $2)";
const deleteLeciona = "DELETE FROM leciona WHERE id_professor = $1 AND id_disciplina = $2";
const updateLeciona = "UPDATE leciona SET id_disciplina = $1 WHERE id_professor = $2 AND id_disciplina = $3";

module.exports = {
  getLeciona,
  getLecionaByProfessorId,
  getLecionaByDisciplinaId,
  createLeciona,
  deleteLeciona,
  updateLeciona
}