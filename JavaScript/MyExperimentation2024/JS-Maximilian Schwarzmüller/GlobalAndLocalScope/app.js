const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
   const result = num1 + num2; // local scope 
   return result; 
}

currentResult = add(1, 2);
// alert(result) // local scope call will not work

let calculationDescription = `(${defaultResult}+10)*3/2-1 `;

const output = outputResult(currentResult, calculationDescription);

// console.log(output)
