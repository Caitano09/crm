/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('itemEstoque', table =>{
      table.increments('id')
      table.string('codigoLote')
      table.string('codigoMaterial')
      table.integer('quantidade')
      table.float('precoUnitario')
      table.string('unidadeAlocacao')
      table.string('status')    
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('itemEstoque')
  };
  