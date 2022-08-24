const readline = require("readline")

const rl =
    readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

function isEven(n) {
    return n % 2 == 0;
}

function isOdd(n) {
    return Math.abs(n % 2) == 1;
}
let number

rl.question('Please enter the number : ', (answer) => {
    number = (+answer)

    if (isEven(number)){
        console.log(number + " is even")
    }
    if (isOdd(number)){
        console.log(number +" is odd")
    }
})
