const {Model} = require('objection')
const knex = require('../database')

class ItemEstoque extends Model{
    static tableName = 'itemEstoque'
    static idColumn = 'id'
}

ItemEstoque.knex(knex)
module.exports = ItemEstoque