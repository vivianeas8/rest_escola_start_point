const pool = require('../../db');
const queries = require('./queries');

const getTitulos = (req, res) => {
  pool.query(queries.getTitulos, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getTituloById = (req, res) => {
  const id_titulo = parseInt(req.params.id_titulo)
  pool.query(queries.getTituloById, [id_titulo], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createTitulo = (req, res) => {
  const { tx_descricao } = req.body
  pool.query(queries.createTitulo, [tx_descricao], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Título criado com sucesso!")
    }
  })
}

const deleteTitulo = (req, res) => {
  const id_titulo = parseInt(req.params.id_titulo)
  pool.query(queries.getTituloById, [id_titulo], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O título com esse id não existe na base.");
    } else {
      pool.query(queries.deleteTitulo, [id_titulo], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Título removido com sucesso!")
        }
      })
    }
  })
}

const updateTitulo = (req, res) => {
  const id_titulo = parseInt(req.params.id_titulo)
  const { tx_descricao } = req.body
  pool.query(queries.getTituloById, [id_titulo], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O título com esse id não existe na base.");
    } else {
      pool.query(queries.updateTitulo, [tx_descricao, id_titulo], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Título atualizado com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getTitulos,
  getTituloById,
  createTitulo,
  deleteTitulo,
  updateTitulo
}