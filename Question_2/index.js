const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.prompt();

function createTable(number){
    const table = []
    for(let i=1; i<=10;i++){
        table[i] = number * i;
        for(let i=1; i<=table.length;i++)
            table[i]
    }
    return table
}

console.log("Chose a index for the multiplication table")
rl.on('line', (answer) => {
    const num = parseInt(answer)
    const table = createTable(num)

    for(let i in table){
        console.log(`${num} x ${i} = ${table[i]}`)
    }   
rl.close();
});