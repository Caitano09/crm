const {Model} = require('objection')
const knex = require('../database')

class UnidadeAlocacao extends Model{
    static tableName = 'unidadeAlocacao'
    static idColumn = 'id'
}

UnidadeAlocacao.knex(knex)
module.exports = UnidadeAlocacao