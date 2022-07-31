const express = require('express')
const router = express.Router()

const material = require('../controllers/material')

router.get('/', material.index)
router.get('/read', material.read)
router.get('/create', material.create)
router.post('/create', material.createPost)
router.get('/delete/:codigo', material.deleteOne)
router.get('/update/:codigo', material.update)
router.post('/update/:codigo', material.updatePost)

module.exports = router
