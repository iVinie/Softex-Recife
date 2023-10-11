// Definindo o objeto Carro
function Carro(modelo, cor) {
    this.modelo = modelo
    this.cor = cor
    this.velocidadeAtual = 0
  
    this.acelerar = function (velocidade) {
      this.velocidadeAtual += velocidade
      console.log(`O carro ${this.modelo} acelerou para ${this.velocidadeAtual} km/h.`)
    }
  
    this.freiar = function () {
      this.velocidadeAtual = 0
      console.log(`O carro ${this.modelo} freou e parou.`)
    }
  
    this.ligar = function () {
      console.log(`O carro ${this.modelo} está ligado.`)
    }
  }
  
  // Criando um objeto Carro
  const meuCarro = new Carro("Toyota", "Azul")
  meuCarro.ligar()
  meuCarro.acelerar(60)
  meuCarro.freiar()
  
  // Definindo o objeto TelefoneCelular
  function TelefoneCelular(marca, sistemaOperacional) {
    this.marca = marca
    this.sistemaOperacional = sistemaOperacional
    this.nivelBateria = 100
  
    this.fazerLigacao = function (numero) {
      console.log(`Ligando para ${numero}...`)
    }
  
    this.enviarMensagem = function (contato, mensagem) {
      console.log(`Enviando mensagem para ${contato}: ${mensagem}`)
    }
  
    this.carregar = function () {
      this.nivelBateria = 100
      console.log(`O telefone ${this.marca} está totalmente carregado.`)
    }
  }
  
  // Criando um objeto TelefoneCelular
  const meuCelular = new TelefoneCelular("Apple", "iOS")
  meuCelular.fazerLigacao("123-456-789")
  meuCelular.enviarMensagem("Amigo", "Olá, como vai?")
  meuCelular.carregar()

  
  // Definindo o objeto ContaBancaria
function ContaBancaria(numero, nomeTitular) {
    this.numeroConta = numero
    this.saldo = 0
    this.nomeTitular = nomeTitular
  
    this.depositar = function (valor) {
      this.saldo += valor
      console.log(`Depósito de R$ ${valor} realizado na conta ${this.numeroConta}. Saldo atual: R$ ${this.saldo}`)
    }
  
    this.sacar = function (valor) {
      if (valor <= this.saldo) {
        this.saldo -= valor
        console.log(`Saque de R$ ${valor} realizado na conta ${this.numeroConta}. Saldo atual: R$ ${this.saldo}`)
      } else {
        console.log(`Saldo insuficiente na conta ${this.numeroConta} para sacar R$ ${valor}`)
      }
    }
  
    this.verificarSaldo = function () {
      console.log(`Saldo da conta ${this.numeroConta}: R$ ${this.saldo}`)
    }
  }
  
  // Criando um objeto ContaBancaria
  const minhaConta = new ContaBancaria("12345", "João")
  minhaConta.depositar(1000)
  minhaConta.sacar(500)
  minhaConta.verificarSaldo()
  
  // Definindo o objeto RedeSocial
  function RedeSocial(nome) {
    this.nome = nome
    this.numeroUsuarios = 0
    this.recursosDisponiveis = []
  
    this.publicarPostagem = function (conteudo) {
      console.log(`Postagem na ${this.nome}: ${conteudo}`)
    }
  
    this.adicionarAmigo = function (usuario) {
      console.log(`Você adicionou ${usuario} como amigo na ${this.nome}.`)
    }
  
    this.verificarNotificacoes = function () {
      console.log(`Você tem ${this.numeroUsuarios} novos seguidores e ${this.recursosDisponiveis.length} novas notificações na ${this.nome}.`)
    }
  }
  
  //Criando um objeto RedeSocial
  const minhaRedeSocial = new RedeSocial("Facebook")
  minhaRedeSocial.publicarPostagem("Olá, mundo!")
  minhaRedeSocial.adicionarAmigo("Amigo1")
  minhaRedeSocial.numeroUsuarios = 10
  minhaRedeSocial.recursosDisponiveis.push("Notificação1", "Notificação2")
  minhaRedeSocial.verificarNotificacoes()