const express = require('express')
const app = express()

const unidadeAlocacao = require('./routes/unidadeAlocacao')
const itemEstoque = require('./routes/itemEstoque')
const material = require('./routes/material')
//

const port = process.env.PORT || 3000

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) 
app.use(express.json())

app.get('/', async (req, res) => res.render('index', { route: ''}))
app.use('/unidadeAlocacao', unidadeAlocacao)
app.use('/itemEstoque', itemEstoque) 
app.use('/material', material)

app.listen(port, ()=>console.log('listening on port: '+port))