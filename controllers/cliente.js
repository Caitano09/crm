const Cliente = require('../models/cliente')

const index = async(req, res)=>{
    const arr = await Cliente.query().select()
    res.render('main', {arr, route: 'cliente'})     
}

const read = async(req, res)=>{
    const arr = await Cliente.query().select().where({codigo: req.query.codigo.trim()})
    res.render('main', {arr, route: 'cliente'}) 
}

const create = async(req, res) =>{
    const result = await Cliente.query().select().first()
    const keys = Object.keys(result)
    keys.shift()
    res.render('create', {keys, route: 'cliente'})     
}

const createPost = async(req, res) =>{
    await Cliente.query().insert(req.body)
    res.redirect('/cliente')
}

const deleteOne = async(req, res)=>{
    await Cliente.query().delete().where({codigo: req.params.codigo.trim()})
    res.redirect('/cliente')
}

const update = async(req, res) =>{
    const result = await Cliente.query().select().where({codigo: req.params.codigo.trim()}).first()
    const keys = Object.entries(result)
    res.render('update', {keys, route: 'cliente'})    
}

const updatePost = async(req, res) =>{
    await Cliente.query().update(req.body).where({id: req.body.id.trim()})
    res.redirect('/cliente')
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



