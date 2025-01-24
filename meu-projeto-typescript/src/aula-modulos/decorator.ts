// Decorador para logar a execução de um método
function logExecution(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value; // Armazenamos a função original do método
  
  // Modificamos o método
  descriptor.value = function (...args: any[]) {
    console.log(`Método ${key} foi chamado com os parâmetros: ${JSON.stringify(args)}`);
    return originalMethod.apply(this, args); // Chamamos o método original
  };
}

class Calculadora {
  // Usamos o decorador para logar a execução deste método
  @logExecution
  somar(a: number, b: number): number {
    return a + b;
  }

  @logExecution
  subtrair(a: number, b: number): number {
    return a - b;
  }
}

// Criando uma instância da classe
const calc = new Calculadora();

// Chamando os métodos
console.log(calc.somar(5, 3)); // Saída no console: Método somar foi chamado com os parâmetros: [5,3]
                               // Resultado: 8
console.log(calc.subtrair(10, 4)); // Saída no console: Método subtrair foi chamado com os parâmetros: [10,4]
                                   // Resultado: 6
