const express = require('express')
const router = express.Router()

const unidadeAlocacao = require('../controllers/unidadeAlocacao')

router.get('/', unidadeAlocacao.index)
router.get('/read', unidadeAlocacao.read)
router.get('/create', unidadeAlocacao.create)
router.post('/create', unidadeAlocacao.createPost)
router.get('/delete/:codigo', unidadeAlocacao.deleteOne)
router.get('/update/:codigo', unidadeAlocacao.update)
router.post('/update/:codigo', unidadeAlocacao.updatePost)

module.exports = router
