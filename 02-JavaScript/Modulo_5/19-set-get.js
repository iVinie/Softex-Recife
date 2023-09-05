class Pessoa {
    constructor(nome, idade, altura, peso) {
      this._nome = nome
      this._idade = idade
      this._altura = altura
      this._peso = peso
    }
  
    get nome() {
      return this._nome
    }
  
    set nome(novoNome) {
      this._nome = novoNome
    }
  
    get idade() {
      return this._idade
    }
  
    set idade(novaIdade) {
      if (novaIdade >= 0) {
        this._idade = novaIdade
      } else {
        console.error("Idade não pode ser negativa.")
      }
    }
  
    get altura() {
      return this._altura
    }
  
    set altura(novaAltura) {
      if (novaAltura >= 0) {
        this._altura = novaAltura
      } else {
        console.error("Altura não pode ser negativa.")
      }
    }
  
    get peso() {
      return this._peso
    }
  
    set peso(novoPeso) {
      if (novoPeso >= 0) {
        this._peso = novoPeso
      } else {
        console.error("Peso não pode ser negativo.")
      }
    }
  }
  

  const pessoa1 = new Pessoa("João", 30, 175, 70)

  // Usando os getters para acessar os atributos
  console.log(`Nome: ${pessoa1.nome}`)
  console.log(`Idade: ${pessoa1.idade}`)
  console.log(`Altura: ${pessoa1.altura}`)
  console.log(`Peso: ${pessoa1.peso}`)

  // Usando os setters para modificar os atributos
  pessoa1.nome = "Maria"
  pessoa1.idade = 25
  pessoa1.altura = 160
  pessoa1.peso = 55

  console.log(`Novo nome: ${pessoa1._nome}`)
  console.log(`Nova idade: ${pessoa1.idade}`)
  console.log(`Nova altura: ${pessoa1.altura}`)
  console.log(`Novo peso: ${pessoa1.peso}`)
  