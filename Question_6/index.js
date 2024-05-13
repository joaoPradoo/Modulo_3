const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();

function factorial(x){
    if (x === 0){
        return 1;
    };
    return x * factorial(x-1)
};

console.log("Chose a number to calculate the factorial")
rl.on('line', (answer) => {
    const number = parseInt(answer)
    console.log(`${number}! = ${factorial(number)}`)
    
rl.close();
});