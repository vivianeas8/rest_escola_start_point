const pool = require('../../db');
const queries = require('./queries');

const getProfessores = (req, res) => {
  pool.query(queries.getProfessores, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getProfessorById = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  pool.query(queries.getProfessorById, [id_professor], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createProfessor = (req, res) => {
  const { id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone } = req.body
  pool.query(queries.createProfessor, [id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Professor criado com sucesso!")
    }
  })
}

const deleteProfessor = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  pool.query(queries.getProfessorById, [id_professor], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O professor com esse id não existe na base.");
    } else {
      pool.query(queries.deleteProfessor, [id_professor], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Professor removido com sucesso!")
        }
      })
    }
  })
}

const updateProfessor = (req, res) => {
  const id_professor = parseInt(req.params.id_professor)
  const { id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone } = req.body
  pool.query(queries.getProfessorById, [id_professor], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O professor com esse id não existe na base.");
    } else {
      pool.query(queries.updateProfessor, [id_titulo, tx_nome, tx_sexo, tx_estado_civil, dt_nascimento, tx_telefone, id_professor], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Professor atualizado com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getProfessores,
  getProfessorById,
  createProfessor,
  deleteProfessor,
  updateProfessor
}