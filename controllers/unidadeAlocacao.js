const UnidadeAlocacao = require('../models/unidadeAlocacao')

const index = async(req, res)=>{
    const unidades = await UnidadeAlocacao.query().select()
    res.render('unidadeAlocacao', {unidades}) 
    
}

const read = async(req, res)=>{
    
}

const create = (req, res) =>{

}

const createPost = async(req, res) =>{

}

const deleteOne = async(req, res)=>{
    
}

const update = (req, res) =>{

}

const updatePost = async(req, res) =>{

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


