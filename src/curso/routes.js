const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getCursos)
router.post('/', controller.createCurso)
router.delete('/:id_curso', controller.deleteCurso)
router.put('/:id_curso', controller.updateCurso)
router.get('/:id_curso', controller.getCursoById)

module.exports = router;