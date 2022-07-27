const express = require('express')
const router = express.Router()

const unidadeAlocacao = require('../controllers/unidadeAlocacao')

router.get('/', unidadeAlocacao.index)
router.get('/read/:id', unidadeAlocacao.read)
router.get('/create', unidadeAlocacao.create)
router.post('/create', unidadeAlocacao.createPost)
router.get('/delete/:id', unidadeAlocacao.deleteOne)
router.get('/update/:id', unidadeAlocacao.update)
router.post('/update/:id', unidadeAlocacao.updatePost)

module.exports = router
