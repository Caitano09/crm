/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cliente').del()
  await knex('cliente').insert([
    {classe: 'convenio', codigo: '1234', convenio: 'Home Care', tipo: 'Pessoa Física', status: 'ativo', cpf: '12345678910', nome: 'Joao', telefone: '12345678', endereco: 'xxxxx', bairro: 'yyyy', cidade: 'zzzz'}
  ]);
};
