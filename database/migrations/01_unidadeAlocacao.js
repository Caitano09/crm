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
      table.string('tipoAlocacao')
      table.string('cidade')
      table.string('estado')
      table.text('detalhe')      
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('unidadeAlocacao')
  };
  