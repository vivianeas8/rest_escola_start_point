const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTipoCursos)
router.post('/', controller.createTipoCurso)
router.delete('/:id_tipo_curso', controller.deleteTipoCurso)
router.put('/:id_tipo_curso', controller.updateTipoCurso)
router.get('/:id_tipo_curso', controller.getTipoCursoById)

module.exports = router;