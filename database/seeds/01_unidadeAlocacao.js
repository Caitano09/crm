/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('unidadeAlocacao').del()
  await knex('unidadeAlocacao').insert([
    {nome: 'UA REC Centro', filial: 'Recife', codigo: 'UA-REC-Centro', tipoAlocacao: 'centroDistribuicao', cidade: 'Recife', estado: 'PE', detalhe: 'nenhum'}
  ]);
};
