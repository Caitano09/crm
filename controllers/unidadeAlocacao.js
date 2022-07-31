const UnidadeAlocacao = require('../models/unidadeAlocacao')

const index = async(req, res)=>{
    const arr = await UnidadeAlocacao.query().select()
    res.render('main', {arr, route: 'unidadeAlocacao'})     
}

const read = async(req, res)=>{
    const arr = await UnidadeAlocacao.query().select().where({codigo: req.query.codigo.trim()})
    res.render('main', {arr, route: 'unidadeAlocacao'}) 
}

const create = async(req, res) =>{
    const result = await UnidadeAlocacao.query().select().first()
    const keys = Object.keys(result)
    keys.shift()
    res.render('create', {keys, route: 'unidadeAlocacao'})     
}

const createPost = async(req, res) =>{
    await UnidadeAlocacao.query().insert(req.body)
    res.redirect('/unidadeAlocacao')
}

const deleteOne = async(req, res)=>{
    await UnidadeAlocacao.query().delete().where({codigo: req.params.codigo.trim()})
    res.redirect('/unidadeAlocacao')
}

const update = async(req, res) =>{
    const result = await UnidadeAlocacao.query().select().where({codigo: req.params.codigo.trim()}).first()
    const keys = Object.entries(result)
    res.render('update', {keys, route: 'unidadeAlocacao'})    
}

const updatePost = async(req, res) =>{
    await UnidadeAlocacao.query().update(req.body).where({id: req.body.id.trim()})
    res.redirect('/unidadeAlocacao')
}

module.exports = {
    index,
    read,
    create,
    createPost,
    deleteOne,
    update,
    updatePost
}


