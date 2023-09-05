// Classe Pessoa
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome
      this.idade = idade
    }
  
    // Método da classe Pessoa
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
  }
  
  // Classe Funcionario que herda de Pessoa
  class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
      super(nome, idade) // Chama o construtor da classe Pai (Pessoa)
      this.cargo = cargo
      this.salario = salario
    }
  
    // Método da classe Funcionario
    informarCargoSalario() {
      console.log(`Sou ${this.cargo} e ganho R$ ${this.salario.toFixed(2)}.`)
    }
  }
  
  // Criando uma instância da classe Funcionario
  const funcionario1 = new Funcionario("João", 30, "Desenvolvedor", 5000)
  const funcionario2 = new Funcionario("Bianca", 23, "Controladora de pátio", 2271.71)
  // Usando métodos da classe Pessoa (herdados)
  funcionario1.apresentar()
  // Usando métodos da classe Funcionario
  funcionario1.informarCargoSalario()
  //Segunda instância
  console.log('---------')
  funcionario2.apresentar()
  funcionario2.informarCargoSalario()