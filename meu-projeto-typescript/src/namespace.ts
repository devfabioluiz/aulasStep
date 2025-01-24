namespace Contabilidade {
  export class ContasAPagar {
    // impostos, tarifas, contas de agua, luz e etc
    pagar() {
      console.log("Contas a pagar");
    }
  }
  export class ContasAReceber {
    receber() {
      console.log("Contas a receber");
    }
  }
}
namespace RecurosHumanos {
  export class ContasAPagar {
    pagar() {
      // folha funcionario, pagar beneficios dos funcionarios
      console.log("Contas a pagar");
    }
  }
}

const contasapagar = new Contabilidade.ContasAPagar();
contasapagar.pagar(); 

const contasareceber = new Contabilidade.ContasAReceber();
contasareceber.receber(); 
