const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();
function is_Prime(x){
    if(x <= 1){
        return false;
    };
    for (let i=2; i<=Math.sqrt(x); i++){
        if(x % i == 0){
            return false;
        };
    };
    return true;
};

rl.on('line', (answer) => {
    const value = parseInt(answer);
    if (is_Prime(value) == true){
        console.log(`The number ${value} is prime`);
    }else{
        console.log(`The number ${value} isn't prime`);
    };
rl.close();
});