// Método assíncrono que consome a API ViaCEP para buscar dados de endereço com base no CEP
export default async function ConsultarEndereco(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const resposta = await fetch(url);

  if (!resposta.ok) { 
    throw new Error(`Erro ao buscar CEP: ${resposta.status}`);
  }

  const dados = await resposta.json();
  if (dados.erro) {                    // Se a API retornar um campo "erro", o CEP não existe
    throw new Error("CEP não encontrado na base do ViaCEP.");
  }

  // Retorna objeto personalizado com os dados da API
  return {
      CEP: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf,
  }
}
