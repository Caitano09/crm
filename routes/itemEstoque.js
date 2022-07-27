const express = require('express')
const router = express.Router()

const itemEstoque = require('../controllers/itemEstoque')

router.get('/', itemEstoque.index)
router.get('/read/:id', itemEstoque.read)
router.get('/create', itemEstoque.create)
router.post('/create', itemEstoque.createPost)
router.get('/delete/:id', itemEstoque.deleteOne)
router.get('/update/:id', itemEstoque.update)
router.post('/update/:id', itemEstoque.updatePost)

module.exports = router
