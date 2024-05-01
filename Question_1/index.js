const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();

console.log("Chose the first number:");
rl.once('line', (answer1) => {
    const num1 = parseInt(answer1);

    console.log("Chose the second number:");
    rl.once('line', (answer2) =>{
        const num2 = parseInt(answer2);

        console.log("Now, chose the operation (+, -, *, /):");
        rl.on('line', (answer3) =>{
            const op = answer3.toString().trim();
            if (op == '+'){
                const sum = num1 + num2;
                console.log(`The answer is ${sum}`);
                rl.close();
            }else if (op == '-'){
                const sub = num1 - num2;
                console.log(`The answer is ${sub}`);
                rl.close();
            }else if (op == '*'){
                const mult = num1 * num2;
                console.log(`The answer is ${mult}`);
                rl.close();
            }else if (op == '/'){
                const div = num1 / num2;
                console.log(`The answer is ${div}`);
                rl.close();
            }else{
                console.log("Please chose a valid operation between (+, -, *, /)");
            };
        });
    });
});