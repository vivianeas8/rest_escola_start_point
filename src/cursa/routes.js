const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCursa)
router.post('/', controller.createCursa)
router.delete('/:id_aluno/:id_disciplina', controller.deleteCursa)
router.put('/:id_aluno/:id_disciplina', controller.updateCursa)
router.get('/:id_aluno', controller.getCursaByAlunoId)

module.exports = router;