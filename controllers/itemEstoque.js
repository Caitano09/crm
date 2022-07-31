const ItemEstoque = require('../models/itemEstoque')

const index = async(req, res)=>{
    const arr = await ItemEstoque.query().select()
    res.render('main', {arr, route: 'itemEstoque'})     
}

const read = async(req, res)=>{
    const arr = await ItemEstoque.query().select().where({codigo: req.query.codigo.trim()})
    res.render('main', {arr, route: 'itemEstoque'}) 
}

const create = async(req, res) =>{
    const result = await ItemEstoque.query().select().first()
    const keys = Object.keys(result)
    keys.shift()
    res.render('create', {keys, route: 'itemEstoque'})     
}

const createPost = async(req, res) =>{
    await ItemEstoque.query().insert(req.body)
    res.redirect('/itemEstoque')
}

const deleteOne = async(req, res)=>{
    await ItemEstoque.query().delete().where({codigo: req.params.codigo.trim()})
    res.redirect('/itemEstoque')
}

const update = async(req, res) =>{
    const result = await ItemEstoque.query().select().where({codigo: req.params.codigo.trim()}).first()
    const keys = Object.entries(result)
    res.render('update', {keys, route: 'itemEstoque'})    
}

const updatePost = async(req, res) =>{
    await ItemEstoque.query().update(req.body).where({id: req.body.id.trim()})
    res.redirect('/itemEstoque')
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




