const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();

function converterFfromC(numC){
    const Fare = (numC*9+32)/5;
    return Fare;
}

function converterCfromF(numF){
    const Cel = (numF*9+32)/5;
    return Cel;
}

console.log("Chose a operation")
console.log("1 - C to F")
console.log("2 - F to C")
rl.once('line', (answer) => {
    const chose = answer.toString().trim();

    console.log("Now chose a temperature to be converted");
    rl.once('line', (operation)=>{
    if (chose == "1"){
        const Fare = (operation*9/5)+32;
        console.log(`${operation}C is ${Fare.toFixed(1)}F`);
        rl.close();
    }else if (chose == "2"){
        const Cel = ((operation-32)*5)/9;
        console.log(`${operation}F is ${Cel.toFixed(1)}C`);
        rl.close();
    }});

});