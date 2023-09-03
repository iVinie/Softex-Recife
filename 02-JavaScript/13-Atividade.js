// Criar um array de objetos pessoa
const pessoas = [
    {
      nome: 'João',
      idade: 22,
      profissão: 'Desenvolvedor',
      cidade: 'Recife'
    },
    {
      nome: 'Maria',
      idade: 25,
      profissão: 'Médica',
      cidade: 'Rio de Janeiro'
    },
    {
      nome: 'Carlos',
      idade: 35,
      profissão: 'Professor',
      cidade: 'Belo Horizonte'
    },
    {
      nome: 'Ana',
      idade: 28,
      profissão: 'Atendente',
      cidade: 'Brasília'
    }
  ]
  
  // Usando 'for of' para percorrer os objetos
  for (const pessoa of pessoas) {
    console.log(`Nome:${pessoa.nome}\nIdade: ${pessoa.idade}\nProfissão: ${pessoa.profissão}\nCidade: ${pessoa.cidade}`)
    console.log('---')
    console.log('---')
  }
  
  // Usando 'for in' para percorrer as propriedades de cada objeto
  for (const pessoa of pessoas) {
    for (const propriedade in pessoa) {
      console.log(`${propriedade}: ${pessoa[propriedade]}`)
    }
    console.log('---')
  }
  