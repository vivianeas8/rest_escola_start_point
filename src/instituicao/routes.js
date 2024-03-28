const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getInstituicoes)
router.post('/', controller.createInstituicao)
router.delete('/:id_instituicao', controller.deleteInstituicao)
router.put('/:id_instituicao', controller.updateInstituicao)
router.get('/:id_instituicao', controller.getInstituicaoById)

module.exports = router;