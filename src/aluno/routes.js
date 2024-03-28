const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getAlunos)
router.post('/', controller.createAluno)
router.delete('/:id_aluno', controller.deleteAluno)
router.put('/:id_aluno', controller.updateAluno)
router.get('/:id_aluno', controller.getAlunoById)

module.exports = router;