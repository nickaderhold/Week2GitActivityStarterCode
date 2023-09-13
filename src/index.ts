import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);
const result_sub = calc.subtract(4, 1);
console.log(`result_sub = ${result_sub}`);

const result_multiply = calc.multiply(4, 4);
console.log(`result_multiply = ${result_multiply}`);

