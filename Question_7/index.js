const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();

function fibonacci(x){
    const sequence = [0, 1];
    for(let i = 2; i <= x; i++){
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    };
    return sequence;
};

rl.on('line', (answer) => {
    const number = parseInt(answer);
    console.log(fibonacci(number - 1));
rl.close();
});