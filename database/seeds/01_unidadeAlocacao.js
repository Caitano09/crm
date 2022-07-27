/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('unidadeAlocacao').del()
  await knex('unidadeAlocacao').insert([
    {nome: 'UA-REC-Centro', filial: 'Recife', codigo: 'AAAA', tipoAlocacao: 'centroDistribuicao', cidade: 'Recife', estado: 'PE', detalhe: 'nenhum'},
    {nome: 'UA-REC-JFE0120', filial: 'Recife', codigo: 'BBBB', tipoAlocacao: 'veiculo', cidade: 'Recife', estado: 'PE', detalhe: 'nenhum'},
    {nome: 'UA-ARA-Caxibinha', filial: 'Aracaju', codigo: 'VVVV', tipoAlocacao: 'centroDistribuicao', cidade: 'Aracaju', estado: 'SE', detalhe: 'nenhum'},
  ]);
};
