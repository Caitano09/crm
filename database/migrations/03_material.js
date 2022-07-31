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
      table.text('descricao')  
      table.string('imagem')  
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    knex.schema.dropTable('material')
  };
  