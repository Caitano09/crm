const express = require('express')
const app = express()

const unidadeAlocacao = require('./routes/unidadeAlocacao')

const port = process.env.PORT || 3000

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.json())

app.use('/unidadeAlocacao', unidadeAlocacao)

app.listen(port, ()=>console.log('listening'))