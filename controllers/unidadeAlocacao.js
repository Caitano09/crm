const UnidadeAlocacao = require('../models/unidadeAlocacao')

const index = async(req, res)=>{
    const result = await UnidadeAlocacao.query().select()
    console.log(result)
    res.render('unidadeAlocacao')
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

