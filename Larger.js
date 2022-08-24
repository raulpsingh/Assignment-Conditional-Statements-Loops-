const readline = require("readline")

const rl =
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })


let number1
let number2
let larger


rl.question('Please enter the first number : ', (answer1) => {
    rl.question('Please enter the second number : ', (answer2) => {
        number1 = (+answer1)
        number2 = (+answer2)

        if (number1<number2){
            larger = number2
        }
           if(number2<number1) {
               larger = number1
           }
console.log(larger)
        rl.close();
    });
});




