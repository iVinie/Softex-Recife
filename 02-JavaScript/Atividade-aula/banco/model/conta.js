import { Transacao } from "./transacao.js";
import { TIPOTRANS } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){   
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }
    //depositar da Conta
    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANS.deposito, new Date().toLocaleDateString(), valor, null, '+')
        this.transacoes.push(trans);
    }
    //sacar da Conta
    sacar(valor){
        if(this.saldo < valor){
            throw new Error('saldo insuficiente');
        }else{
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.sacar, new Date().toLocaleDateString(), valor, null, '-')
            this.transacoes.push(trans);
        } 
    }
    //transferir da Conta
    transferir(valor, destino){
        if(this.saldo < valor){
            throw new Error('saldo insuficiente');
        }else{
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.transferencia, new Date().toLocaleDateString(), valor, destino, '-')
            this.transacoes.push(trans);
        } 
    }
    //realizar pagamento da Conta
    pagar(valor){
        if(this.saldo < valor){
            throw new Error('saldo insuficiente');
        }else{
            this.saldo -= valor;
            let trans = new Transacao(TIPOTRANS.pagamento, new Date().toLocaleDateString(), valor, null, '-')
            this.transacoes.push(trans);
        } 
    }
    
}