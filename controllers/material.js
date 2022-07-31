const Material = require('../models/material')

const index = async(req, res)=>{
    const arr = await Material.query().select()
    res.render('main', {arr, route: 'material'})     
}

const read = async(req, res)=>{
    const arr = await Material.query().select().where({codigo: req.query.codigo.trim()})
    res.render('main', {arr, route: 'material'}) 
}

const create = async(req, res) =>{
    const result = await Material.query().select().first()
    const keys = Object.keys(result)
    keys.shift()
    res.render('create', {keys})     
}

const createPost = async(req, res) =>{
    await Material.query().insert(req.body)
    res.redirect('/material')
}

const deleteOne = async(req, res)=>{
    await Material.query().delete().where({codigo: req.params.codigo.trim()})
    res.redirect('/material')
}

const update = async(req, res) =>{
    const result = await Material.query().select().where({codigo: req.params.codigo.trim()}).first()
    const keys = Object.entries(result)
    res.render('update', {keys})    
}

const updatePost = async(req, res) =>{
    await Material.query().update(req.body).where({id: req.body.id.trim()})
    res.redirect('/material')
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



