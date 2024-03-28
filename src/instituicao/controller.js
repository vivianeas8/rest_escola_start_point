const pool = require('../../db');
const queries = require('./queries');

const getInstituicoes = (req, res) => {
  pool.query(queries.getInstituicoes, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getInstituicaoById = (req, res) => {
  const id_instituicao = parseInt(req.params.id_instituicao)
  pool.query(queries.getInstituicaoById, [id_instituicao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createInstituicao = (req, res) => {
  const { tx_sigla, tx_descricao } = req.body
  pool.query(queries.createInstituicao, [tx_sigla, tx_descricao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Instituição criada com sucesso!")
    }
  })
}

const deleteInstituicao = (req, res) => {
  const id_instituicao = parseInt(req.params.id_instituicao)
  pool.query(queries.getInstituicaoById, [id_instituicao], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("A instituição com esse id não existe na base.");
    } else {
      pool.query(queries.deleteInstituicao, [id_instituicao], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Instituição removida com sucesso!")
        }
      })
    }
  })
}

const updateInstituicao = (req, res) => {
  const id_instituicao = parseInt(req.params.id_instituicao)
  const { tx_sigla, tx_descricao } = req.body
  pool.query(queries.getInstituicaoById, [id_instituicao], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("A instituição com esse id não existe na base.");
    } else {
      pool.query(queries.updateInstituicao, [tx_sigla, tx_descricao, id_instituicao], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Instituição atualizada com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getInstituicoes,
  getInstituicaoById,
  createInstituicao,
  deleteInstituicao,
  updateInstituicao
}