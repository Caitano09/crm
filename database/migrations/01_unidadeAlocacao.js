/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('unidadeAlocacao', table =>{
      table.increments('id')
      table.string('nome')
      table.string('filial')
      table.string('codigo')
      table.enum('tipoAlocacao', ['cliente', 'centroDistribuicao', 'veiculo', 'centroRecarga'])
      table.string('cidade')
      table.string('estado')
      table.text('detalhe')      
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('unidadeAlocacao')
  };
  