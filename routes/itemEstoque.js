const express = require('express')
const router = express.Router()

const itemEstoque = require('../controllers/itemEstoque')

router.get('/', itemEstoque.index)
router.get('/read', itemEstoque.read)
router.get('/create', itemEstoque.create)
router.post('/create', itemEstoque.createPost)
router.get('/delete/:codigo', itemEstoque.deleteOne)
router.get('/update/:codigo', itemEstoque.update)
router.post('/update/:codigo', itemEstoque.updatePost)

module.exports = router
