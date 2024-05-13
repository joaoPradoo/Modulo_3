const { randomInt } = require('crypto');
const readline = require('readline');

console.log("Welcome player!")
console.log("Type a number between 1 and 10:");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();



rl.on('line', (data) => {
    const answer = parseInt(data);
    const number = randomInt(1, 11);

    if (answer == number){
        console.log("Congratulations, you gessed the right number!");
        console.log(`you typed: ${answer}, the number was: ${number}`);
        rl.close();
    }else {
        console.log("You gessed the wrong number!");
        console.log(`you typed: ${answer}, the number was: ${number}`);
    }
    
});
