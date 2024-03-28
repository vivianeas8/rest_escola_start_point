const pool = require('../../db');
const queries = require('./queries');

const getAlunos = (req, res) => {
  pool.query(queries.getAlunos, (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const getAlunoById = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  pool.query(queries.getAlunoById, [id_aluno], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(results.rows);
    }
  })
}

const createAluno = (req, res) => {
  const { tx_nome, tx_sexo, dt_nascimento } = req.body
  pool.query(queries.createAluno, [tx_nome, tx_sexo, dt_nascimento], (error, results) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send("Aluno criado com sucesso!")
    }
  })
}

const deleteAluno = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  pool.query(queries.getAlunoById, [id_aluno], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O aluno com esse id não existe na base.");
    } else {
      pool.query(queries.deleteAluno, [id_aluno], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Aluno removido com sucesso!")
        }
      })
    }
  })
}

const updateAluno = (req, res) => {
  const id_aluno = parseInt(req.params.id_aluno)
  const { tx_nome, tx_sexo, dt_nascimento } = req.body
  pool.query(queries.getAlunoById, [id_aluno], (error, results) => {
    const naoEncontrado = !results.rows.length
    if (naoEncontrado) {
      res.status(404).send("O aluno com esse id não existe na base.");
    } else {
      pool.query(queries.updateAluno, [tx_nome, tx_sexo, dt_nascimento, id_aluno], (error, results) => {
        if (error) {
          res.status(500).send(error);
        } else {
          res.status(200).send("Aluno atualizado com sucesso!")
        }
      })
    }
  })
}

module.exports = {
  getAlunos,
  getAlunoById,
  createAluno,
  deleteAluno,
  updateAluno
}