/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('itemEstoque').del()
  await knex('itemEstoque').insert([
    {codigo: '0325', quantidade: 20, precoUnitario: 365, unidadeAlocacao: 'UA-Recife-Centro', status: 'Cheio'},
    {codigo: '3659', quantidade: 10, precoUnitario: 540, unidadeAlocacao: 'UA-Aracaju-Centro', status: 'Não aplicável'},
    {codigo: '7584', quantidade: 10, precoUnitario: 120, unidadeAlocacao: 'Ua-Recife-JM02102', status: 'Vazio'},
  ]);
};
