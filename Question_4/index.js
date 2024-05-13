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

        console.log("Chose the third number:");
        rl.on('line', (answer3) =>{
            const num3 = parseInt(answer3);
            if (num1 > num2){
                if (num1 > num3){
                    var biggest = num1
                }else if (num3 > num1){
                    var biggest = num3;
                };
            }else if (num2 > num1){
                if (num2 > num3){
                    var biggest = num2;
                }else if (num3 > num2){
                    var biggest = num3;
                };
            }else if (num1 == num2){
                if(num3 > num2){
                    var biggest = num3;
                }else if(num3 > num1){
                    var biggest = num3;
                };
            }else{
                console.log("Undefined error");
            };
            console.log(`The biggest number is ${biggest}`);
            rl.close();
        });
    });
});