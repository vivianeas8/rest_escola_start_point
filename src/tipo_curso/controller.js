const pool = require('../../db');
const queries = require('./queries');

const getTipoCursos = (req, res) => {
  pool.query(queries.getTipoCursos, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getTipoCursoById = (req, res) => {
  const id_tipo_curso = parseInt(req.params.id_tipo_curso)
  pool.query(queries.getTipoCursoById, [id_tipo_curso], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createTipoCurso = (req, res) => {
  const { tx_descricao } = req.body
  pool.query(queries.createTipoCurso, [tx_descricao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Tipo de curso criado com sucesso!")
    }
  })
}

const deleteTipoCurso = (req, res) => {
  const id_tipo_curso = parseInt(req.params.id_tipo_curso)
  pool.query(queries.getTipoCursoById, [id_tipo_curso], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O tipo de curso com esse id não existe na base.");
    } else {
      pool.query(queries.deleteTipoCurso, [id_tipo_curso], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Tipo de curso removido com sucesso!")
        }
      })
    }
  })
}

const updateTipoCurso = (req, res) => {
  const id_tipo_curso = parseInt(req.params.id_tipo_curso)
  const { tx_descricao } = req.body
  pool.query(queries.getTipoCursoById, [id_tipo_curso], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O tipo de curso com esse id não existe na base.");
    } else {
      pool.query(queries.updateTipoCurso, [tx_descricao, id_tipo_curso], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Tipo de curso atualizado com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getTipoCursos,
  getTipoCursoById,
  createTipoCurso,
  deleteTipoCurso,
  updateTipoCurso
}