const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTipoDisciplinas)
router.post('/', controller.createTipoDisciplina)
router.delete('/:id_tipo_disciplina', controller.deleteTipoDisciplina)
router.put('/:id_tipo_disciplina', controller.updateTipoDisciplina)
router.get('/:id_tipo_disciplina', controller.getTipoDisciplinaById)

module.exports = router;