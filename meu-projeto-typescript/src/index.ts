const add = (a: number, b: number): any => {
  return a + b ;
}

const num1 = 15;
const num2 = 10;

const result = add(num1, num2);

console.log(`A soma de ${num1} e ${num2} é: ${result}`);

interface Pessoa {
  name: string,
  age: number | null,
  weight: string,
  isStudent: boolean
}

const fabio: Pessoa = {
  name: 'Fabio',
  age: 34,
  weight: '90kg',
  isStudent: false
}

const luiz: Pessoa = {
  name: 'Luiz',
  age: null,
  weight: '190kg',
  isStudent: true,
}

console.log(luiz)
