/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('cliente', table =>{
      table.increments('id')
      table.string('codigo')
      table.string('classe')
      table.string('convenio')
      table.string('tipo')
      table.string('status')
      table.string('cpf')
      table.string('nome')  
      table.string('telefone')  
      table.string('endereco')    
      table.string('cidade')  
      table.string('bairro')  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('material')
  };
  