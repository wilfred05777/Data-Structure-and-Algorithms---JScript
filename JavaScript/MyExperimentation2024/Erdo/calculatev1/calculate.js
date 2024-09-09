// https://www.programiz.com/javascript/switch-statementhttps://www.programiz.com/javascript/switch-statement

function calculate() {
    
    let num1 = parseFloat(prompt("Enter the first number: "))
    let num2 = parseFloat(prompt("Enter the second number:"))
    let operation = prompt("Enter the operation (add, subtract, multiply, divide:)")


    let result;


    switch (operation) {
        case 'add':
            result = num1 + num2
            break
        case 'subtract':
            result = num1 - num2
            break
        case 'multiply':
            result = num1 * num2;
            break
        case 'divide':
            result = num1 / num2;
            break; 
        
        default: 
            result = "Invalid operation"
    }

    alert(`The result of ${operation} is: ${result}`)
}

calculate(2,2)

