const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getLeciona)
router.post('/', controller.createLeciona)
router.delete('/:id_professor/:id_disciplina', controller.deleteLeciona)
router.put('/:id_professor/:id_disciplina', controller.updateLeciona)
router.get('/professor/:id_professor', controller.getLecionaByProfessorId)
router.get('/disciplina/:id_disciplina', controller.getLecionaByDisciplinaId)

module.exports = router;