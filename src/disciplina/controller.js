const pool = require('../../db');
const queries = require('./queries');

const getDisciplinas = (req, res) => {
  pool.query(queries.getDisciplinas, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getDisciplinaById = (req, res) => {
  const id_disciplina = parseInt(req.params.id_disciplina)
  pool.query(queries.getDisciplinaById, [id_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createDisciplina = (req, res) => {
  const { id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria } = req.body
  pool.query(queries.createDisciplina, [id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria], (error, results) => {
    if (error) {
      console.log(error)
      res.status(500).send(error);
    } else {
      res.status(201).send("Disciplina criada com sucesso!")
    }
  })
}

const deleteDisciplina = (req, res) => {
  const id_disciplina = parseInt(req.params.id_disciplina)
  pool.query(queries.getDisciplinaById, [id_disciplina], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("A disciplina com esse id não existe na base.");
    } else {
      pool.query(queries.deleteDisciplina, [id_disciplina], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Disciplina removida com sucesso!")
        }
      })
    }
  })
}

const updateDisciplina = (req, res) => {
  const id_disciplina = parseInt(req.params.id_disciplina)
  const { id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria } = req.body
  pool.query(queries.getDisciplinaById, [id_disciplina], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("A disciplina com esse id não existe na base.");
    } else {
      pool.query(queries.updateDisciplina, [id_curso, id_tipo_disciplina, tx_sigla, tx_descricao, in_periodo, in_carga_horaria, id_disciplina], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Disciplina atualizada com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getDisciplinas,
  getDisciplinaById,
  createDisciplina,
  deleteDisciplina,
  updateDisciplina
}