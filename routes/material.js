const express = require('express')
const router = express.Router()

const material = require('../controllers/material')

router.get('/', material.index)
router.get('/read/:id', material.read)
router.get('/create', material.create)
router.post('/create', material.createPost)
router.get('/delete/:id', material.deleteOne)
router.get('/update/:id', material.update)
router.post('/update/:id', material.updatePost)

module.exports = router
