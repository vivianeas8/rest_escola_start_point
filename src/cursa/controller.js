const pool = require('../../db');
const queries = require('./queries');

const getCursa = (req, res) => {
  pool.query(queries.getCursa, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getCursaByAlunoId = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  pool.query(queries.getCursaByAlunoId, [id_aluno], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createCursa = (req, res) => {
  const { id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado } = req.body
  pool.query(queries.createCursa, [id_aluno, id_disciplina, in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Cadastro feito com sucesso!")
    }
  })
}

const deleteCursa = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  const id_disciplina = parseInt(req.params.id_disciplina)
  pool.query(queries.deleteCursa, [id_aluno, id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Removido com sucesso!")
    }
  })
}

const updateCursa = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  const id_disciplina = parseInt(req.params.id_disciplina)
  const { in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado } = req.body
  pool.query(queries.updateCursa, [in_ano, in_semestre, in_faltas, nm_nota1, nm_nota2, nm_nota3, bl_aprovado, id_aluno, id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Atualizado com sucesso!")
    }
  })
}

module.exports = {
  getCursa,
  getCursaByAlunoId,
  createCursa,
  deleteCursa,
  updateCursa
}