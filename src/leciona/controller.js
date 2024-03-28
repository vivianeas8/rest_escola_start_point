const pool = require('../../db');
const queries = require('./queries');

const getLeciona = (req, res) => {
  pool.query(queries.getLeciona, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getLecionaByProfessorId = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  pool.query(queries.getLecionaByProfessorId, [id_professor], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getLecionaByDisciplinaId = (req, res) => {
  const id_disciplina = parseInt(req.params.id_disciplina)
  pool.query(queries.getLecionaByDisciplinaId, [id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createLeciona = (req, res) => {
  const { id_professor, id_disciplina } = req.body
  pool.query(queries.createLeciona, [id_professor, id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Cadastro feito com sucesso!")
    }
  })
}

const deleteLeciona = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  const id_disciplina = parseInt(req.params.id_disciplina)
  pool.query(queries.deleteLeciona, [id_professor, id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Removido com sucesso!")
    }
  })
}

const updateLeciona = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  const old_id_disciplina = parseInt(req.params.id_disciplina)
  const { id_disciplina } = req.body
  pool.query(queries.updateLeciona, [id_disciplina, id_professor, old_id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send("Atualizado com sucesso!")
    }
  })
}

module.exports = {
  getLeciona,
  getLecionaByProfessorId,
  getLecionaByDisciplinaId,
  createLeciona,
  deleteLeciona,
  updateLeciona
}