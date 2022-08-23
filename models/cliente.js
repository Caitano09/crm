const {Model} = require('objection')
const knex = require('../database')

class Material extends Model{
    static tableName = 'cliente'
    static idColumn = 'id'
}

Material.knex(knex)
module.exports = Material