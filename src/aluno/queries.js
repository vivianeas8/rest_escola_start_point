const getAlunos = "SELECT * FROM aluno";
const getAlunoById = "SELECT * FROM aluno WHERE id_aluno = $1";
const createAluno = "INSERT INTO aluno (tx_nome, tx_sexo, dt_nascimento) VALUES ($1, $2, $3)";
const deleteAluno = "DELETE FROM aluno WHERE id_aluno = $1";
const updateAluno = "UPDATE aluno SET tx_nome = $1, tx_sexo = $2, dt_nascimento = $3 WHERE id_aluno = $4";

module.exports = {
  getAlunos,
  getAlunoById,
  createAluno,
  deleteAluno,
  updateAluno
}