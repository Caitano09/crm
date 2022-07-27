/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('material', table =>{
      table.increments('id')
      table.string('fornecedor')
      table.string('codigo')
      table.string('codigoExterno')
      table.string('nomeProduto')
      table.string('marca')
      table.string('tamanho')  
      table.string('cor')  
      table.float('precoCusto')    
      table.string('descricao')  
      table.string('imagem')  
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('material')
  };
  