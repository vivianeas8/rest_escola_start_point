const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDisciplinas)
router.post('/', controller.createDisciplina)
router.delete('/:id_disciplina', controller.deleteDisciplina)
router.put('/:id_disciplina', controller.updateDisciplina)
router.get('/:id_disciplina', controller.getDisciplinaById)

module.exports = router;