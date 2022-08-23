/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('itemEstoque').del()
  await knex('itemEstoque').insert([
    {codigo: '0325', quantidade: 20, precoUnitario: 365, unidadeAlocacao: 'UA-Recife-Centro', status: 'Cheio'}
  ]);
};
