const pool = require('../../db');
const queries = require('./queries');

const getCursos = (req, res) => {
  pool.query(queries.getCursos, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getCursoById = (req, res) => {
  const id_curso = parseInt(req.params.id_curso)
  pool.query(queries.getCursoById, [id_curso], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createCurso = (req, res) => {
  const { id_instituicao, id_tipo_curso, tx_descricao } = req.body
  pool.query(queries.createCurso, [id_instituicao, id_tipo_curso, tx_descricao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Curso criado com sucesso!")
    }
  })
}

const deleteCurso = (req, res) => {
  const id_curso = parseInt(req.params.id_curso)
  pool.query(queries.getCursoById, [id_curso], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O curso com esse id não existe na base.");
    } else {
      pool.query(queries.deleteCurso, [id_curso], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Curso removido com sucesso!")
        }
      })
    }
  })
}

const updateCurso = (req, res) => {
  const id_curso = parseInt(req.params.id_curso)
  const { id_instituicao, id_tipo_curso, tx_descricao } = req.body
  pool.query(queries.getCursoById, [id_curso], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O curso com esse id não existe na base.");
    } else {
      pool.query(queries.updateCurso, [id_instituicao, id_tipo_curso, tx_descricao, id_curso], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Curso atualizado com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getCursos,
  getCursoById,
  createCurso,
  deleteCurso,
  updateCurso
}