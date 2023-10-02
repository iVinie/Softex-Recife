import {Agencia} from './model/agencia.js'
import {Cliente} from './model/cliente.js'
import { Conta } from './model/conta.js'
import {Endereco} from './model/endereco.js'
import { Transacao } from './model/transacao.js'


//Criando um endereço
const endAge = new Endereco('PE', 'Recife', 'Recife', 'Rua da Guia', '1000', 'sala 305', '40050-030')
//Criando uma agencia
const agencia = new Agencia('Softex', 1234, '99999999999', 'emailSoftex@Agencia.com', endAge)
let endCli = new Endereco('PE', 'Recife', 'Cordeiro', 'Rua Desembargador Franscisco Luiz', '81', null, '50711-310')
let cliVini = new Cliente('Vinicius Oliveira', '107.818.314-74', new Date('1997-09-28').toLocaleDateString(), 'RG', 'vinie.oliveira13@gmail.com', '81989213390', endCli)
let contaVini = new Conta(cliVini, Math.random()*1000000, agencia, 0)

contaVini.depositar(1000)
console.log(contaVini)