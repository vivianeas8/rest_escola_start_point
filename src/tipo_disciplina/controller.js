const pool = require('../../db');
const queries = require('./queries');

const getTipoDisciplinas = (req, res) => {
  pool.query(queries.getTipoDisciplinas, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getTipoDisciplinaById = (req, res) => {
  const id_tipo_disciplina = parseInt(req.params.id_tipo_disciplina)
  pool.query(queries.getTipoDisciplinaById, [id_tipo_disciplina], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createTipoDisciplina = (req, res) => {
  const { tx_descricao } = req.body
  pool.query(queries.createTipoDisciplina, [tx_descricao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Tipo de disciplina criada com sucesso!")
    }
  })
}

const deleteTipoDisciplina = (req, res) => {
  const id_tipo_disciplina = parseInt(req.params.id_tipo_disciplina)
  pool.query(queries.getTipoDisciplinaById, [id_tipo_disciplina], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O tipo de disciplina com esse id não existe na base.");
    } else {
      pool.query(queries.deleteTipoDisciplina, [id_tipo_disciplina], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Tipo de disciplina removida com sucesso!")
        }
      })
    }
  })
}

const updateTipoDisciplina = (req, res) => {
  const id_tipo_disciplina = parseInt(req.params.id_tipo_disciplina)
  const { tx_descricao } = req.body
  pool.query(queries.getTipoDisciplinaById, [id_tipo_disciplina], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O tipo de disciplina com esse id não existe na base.");
    } else {
      pool.query(queries.updateTipoDisciplina, [tx_descricao, id_tipo_disciplina], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Tipo de disciplina atualizada com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getTipoDisciplinas,
  getTipoDisciplinaById,
  createTipoDisciplina,
  deleteTipoDisciplina,
  updateTipoDisciplina
}