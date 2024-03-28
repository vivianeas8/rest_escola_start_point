const getProfessores = "SELECT p.id_professor, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, t.id_titulo, t.tx_descricao FROM professor p JOIN titulo t ON p.id_titulo = t.id_titulo";
const getProfessorById = "SELECT p.id_professor, p.tx_nome, p.tx_sexo, p.tx_estado_civil, p.dt_nascimento, p.tx_telefone, t.id_titulo, t.tx_descricao FROM professor p JOIN titulo t ON p.id_titulo = t.id_titulo WHERE p.id_professor = $1";
const createProfessor = "INSERT INTO professor (id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteProfessor = "DELETE FROM professor WHERE id_professor = $1";
const updateProfessor = "UPDATE professor SET id_titulo = $1, tx_nome = $2, tx_sexo = $3, tx_estado_civil = $4, dt_nascimento = $5, tx_telefone = $6 WHERE id_professor = $7";

module.exports = {
  getProfessores,
  getProfessorById,
  createProfessor,
  deleteProfessor,
  updateProfessor
}