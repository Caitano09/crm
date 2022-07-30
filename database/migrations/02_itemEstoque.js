/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('itemEstoque', table =>{
      table.increments('id')
      table.integer('codigoMaterial')
      table.integer('quantidade')
      table.float('precoUnitario')
      table.string('unidadeAlocacao')
      table.string('status')    
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('itemEstoque')
  };
  