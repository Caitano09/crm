const express = require('express')
const router = express.Router()

const cliente = require('../controllers/cliente')

router.get('/', cliente.index)
router.get('/read', cliente.read)
router.get('/create', cliente.create)
router.post('/create', cliente.createPost)
router.get('/delete/:codigo', cliente.deleteOne)
router.get('/update/:codigo', cliente.update)
router.post('/update/:codigo', cliente.updatePost)

module.exports = router
