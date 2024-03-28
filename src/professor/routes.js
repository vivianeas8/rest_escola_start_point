const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getProfessores)
router.post('/', controller.createProfessor)
router.delete('/:id_professor', controller.deleteProfessor)
router.put('/:id_professor', controller.updateProfessor)
router.get('/:id_professor', controller.getProfessorById)

module.exports = router;