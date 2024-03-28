const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getTitulos)
router.post('/', controller.createTitulo)
router.delete('/:id_titulo', controller.deleteTitulo)
router.put('/:id_titulo', controller.updateTitulo)
router.get('/:id_titulo', controller.getTituloById)

module.exports = router;