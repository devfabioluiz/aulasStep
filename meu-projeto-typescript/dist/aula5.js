"use strict";
class ContaBancaria {
    constructor(saldoInicial) {
        this.saldo = saldoInicial;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    getSaldo() {
        return this.saldo;
    }
}
const conta = new ContaBancaria(100);
conta.depositar(50);
console.log(conta.getSaldo());
