/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('material').del()
  await knex('material').insert([
    {fornecedor: 'Fábrica Saúde e Vida', codigo: 0325, codigoExterno: 1234, nomeProduto: 'Oxigênio Gasoso Medicial 1m3', marca: 'Medicial', tamanho: '1', cor: 'verde', precoCusto: 100, descricao: 'nenhuma', imagem: 'C:/nenhuma'},
    {fornecedor: 'Fábrica Saúde e Vida', codigo: 3659, codigoExterno: 5678, nomeProduto: 'Oxigênio Gasoso Medicial 3,5m3', marca: 'Medicial', tamanho: '3,5', cor: 'cinza', precoCusto: 75, descricao: 'nenhuma', imagem: 'C:/nenhuma'},
    {fornecedor: 'Fábrica Saúde e Vida', codigo: 7584, codigoExterno: 9101, nomeProduto: 'Concentrador de Oxigênio ', marca: 'Medicial', tamanho: 'único', cor: '-', precoCusto: 250, descricao: 'nenhuma', imagem: 'C:/nenhuma'},
  ]);
};
