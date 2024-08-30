
let number = [1,2,3,4,5]

for (let i = 0; i < number.length; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz")
    }
    else if (i % 3 ==0) {
        console.log("Fizz")
    } 
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else console.log(i)
}

console.log("Break =========")

function fizzBuzz() {
    for (let i = 0; i < 10; i++){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if (i % 5 == 0) {
           console.log("Buzz") 
        }
        else {
            console.log(i)
        }
    }   
}

fizzBuzz()