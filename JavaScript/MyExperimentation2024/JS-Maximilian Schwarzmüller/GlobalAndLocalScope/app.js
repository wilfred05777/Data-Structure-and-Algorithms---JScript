const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
   currentResult = currentResult + userInput.value; // .value will get the value of what the user enter in the Browser input

   outputResult(currentResult, '');

   // const result = num1 + num2; // local scope 
   // return result; 
   // return result;
}

addBtn.addEventListener('click', add); // addEventListener => function is buildin the browser

// currentResult = add(1, 2);
// // alert(result) // local scope call will not work

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// experimental
// const outputed = outputResult(currentResult, calculationDescription);
// outputResult(currentResult, calculationDescription);

// console.log(outputed)
