class Veiculo {
  constructor(modelo, marca, cor, numRodas) {
    this.modelo = modelo;
    this.marca = marca;
    this.cor = cor;
    this.numRodas = numRodas;
  }


  /* Object.getPrototypeOf(this): Isso obtém o protótipo do objeto atual (this). O protótipo é o objeto a partir do qual o objeto atual foi criado. Em outras palavras, é a classe pai da qual o objeto herda propriedades e métodos.
    Object.create(Object.getPrototypeOf(this)): Isso cria um novo objeto vazio cujo protótipo é definido como o protótipo do objeto atual. Isso basicamente cria um novo objeto que herda as mesmas propriedades e métodos do objeto atual, mas sem copiar os valores das propriedades.
    Object.assign(Object.create(Object.getPrototypeOf(this)), this): O Object.assign() é usado para copiar todas as propriedades enumeráveis do objeto atual (this) para o objeto recém-criado com o mesmo protótipo. Isso cria uma cópia profunda do objeto atual, mantendo a mesma estrutura de herança, mas com valores de propriedades independentes. Isso garante que as propriedades do objeto clonado sejam separadas das do objeto original.
  */
  clone() {
    return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
  }

  represent() {
    return `Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numRodas}`;
  }
}

class Carro extends Veiculo {
  constructor(modelo, marca, cor, numRodas, potencia) {
    super(modelo, marca, cor, numRodas);
    this.potencia = potencia;
  }

  represent() {
    return super.represent() + `, Potência: ${this.potencia} HP`;
  }
}

class Moto extends Veiculo {
  constructor(modelo, marca, cor, numRodas, cilindrada) {
    super(modelo, marca, cor, numRodas);
    this.cilindrada = cilindrada;
  }

  represent() {
    return super.represent() + `, Cilindrada: ${this.cilindrada} cc`;
  }
}

class Aplicacao {
  static criarVeiculos() {
    const carro1 = new Carro("Sedan", "Toyota", "Azul", 4, 150);
    const carro2 = new Carro("Esportivo", "Ferrari", "Vermelho", 4, 700);
    const moto1 = new Moto("Street", "Honda", "Preto", 2, 250);

    return [carro1, carro2, moto1];
  }

  static clonarVeiculos(veiculos) {
    return veiculos.map(veiculo => veiculo.clone());
  }
}

const veiculos = Aplicacao.criarVeiculos();
const clones = Aplicacao.clonarVeiculos(veiculos);

clones.forEach(veiculo => {
  console.log(veiculo.represent());
});
