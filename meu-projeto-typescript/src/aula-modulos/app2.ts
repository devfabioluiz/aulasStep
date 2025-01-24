// app.ts
const mathLib = require('./mathLib');

const resultadoSoma = mathLib.soma(5, 3); // TypeScript não sabe o tipo de `soma`
const resultadoSubtracao = mathLib.subtrai(10, 4); // TypeScript não sabe o tipo de `subtrai`

console.log(`Soma: ${resultadoSoma}`);
console.log(`Subtração: ${resultadoSubtracao}`);
