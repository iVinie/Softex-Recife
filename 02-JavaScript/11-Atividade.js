const prompt = require("prompt-sync")();
let banco = {
  tipo: function (tipo) {
    this.tipo = tipo;
  },
  saldo: function (saldo) {
    this.saldo = saldo;
  },
  agencia: 1000,
  digito: function (digito) {
    this.digito = digito;
  },
  conta: function (conta) {
    this.conta = conta;
  },
  banco: 2260,
  numeroConta: function () {
    return `${this.conta}-${this.digito}`;
  },
  deposito: function (deposito) {
    this.saldo += deposito;
  },
  saque: function (saque) {
    if (this.saldo < saque) {
      return `Saldo insuficiente`;
    } else {
      this.saldo -= saque;
      return `Saque de ${saque}, realizado com sucesso, novo saldo: ${this.saldo}`;
    }
  },
  buscarSaldo: function () {
    return `Seu saldo é de: ${this.saldo}`;
  },
};
function movimentaConta() {
  console.log(`Bem vindo ao menu da sua conta, o que deseja fazer?
    1-Consultar saldo
    2-Fazer um deposito
    3-Sacar
    4-Verificar as informações da conta
    5-Sair`);
  let op = Number(prompt(""));
  while (op != 5) {
    switch (op) {
      case 1:
        console.log(banco.buscarSaldo());
        break;
      case 2:
        let deposito = Number(prompt("Qual o valor do deposito: "));
        if (!isNaN(deposito) && deposito > 0) {
          banco.deposito(deposito);
        } else {
          throw new Error("Saldo invalido, inicie novamente!");
        }
        break;
      case 3:
        let sacar = Number(prompt("Qual o valor do saque: "));
        if (!isNaN(sacar) && sacar > 0) {
          banco.saque(sacar);
        } else {
          throw new Error("Saque invalido, inicie novamente!");
        }
        break;
      case 4:
        console.log(`Número da conta: ${banco.numeroConta()}\nSaldo: ${banco.buscarSaldo()}\nTipo da conta: ${banco.tipo}\nAgência: ${banco.agencia}
                `);
        break;
      case 5:
        console.log("Finalizando...");
        break;
      default:
        throw new Error("opção invalida, inicie novamente!");
    }
    console.log(`Bem vindo ao menu da sua conta, o que deseja fazer?
    1-Consultar saldo
    2-Fazer um deposito
    3-Sacar
    4-Verificar as informações da conta
    5-Sair`);
    op = Number(prompt(""));
  }
}

function iniciarConta() {
  let tipo = prompt("Qual o tipo da conta: Corrente ou Poupa: ");
  if (tipo.toUpperCase() === "CORRENTE" || tipo.toUpperCase() === "POUPA") {
    banco.tipo(tipo);
    let saldo = parseInt(prompt("Deseja colocar algum saldo: "));
    if (!isNaN(saldo) && saldo >= 0) {
      banco.saldo(saldo);
      banco.conta(parseInt(Math.random() * 1000000));
      banco.digito(parseInt(Math.random() * 100));
    } else {
      throw new Error("Saldo invalido, inicie novamente!");
    }
  } else {
    throw new Error("Tipo de conta incorreto, inicie novamente!");
  }
}
try {
  let iniciar = prompt("Deseja criar uma conta? (SIM ou NÃO): ");
  if (iniciar.toUpperCase() === "SIM") {
    iniciarConta();
    console.log("Conta criada com sucesso!!!");
    movimentaConta();
  } else {
    console.log("Encerrando programa...");
  }
} catch (e) {
  console.log(`${e}\nFinalizando o programa`);
}