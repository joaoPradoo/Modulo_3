const rl = require("./input");
rl.prompt();

let list = new Map([
  ["Pedro", {Age: 19, Course: "Computer Science", Average: 8.0 }],
  ["Joao", {Age: 18, Course: "Animation", Average: 7.3 }],
  ["Marcos", {Age: 19, Course: "Architecture", Average: 6.3 }],
]);

function main() {
  rl.question("Type a key to be found: ", (answer) => {
    const key = answer.toString().trim();
    if (key == "leave") {
      rl.close();
    } else {
      hasKey(key);
    }
  });
}

function hasKey(key) {
  if (list.has(key)) {
    console.log(`Key "${key}" found on the list`);
    main();
  } else {
    console.log(`Key "${key}" not found`);
    main();
  }
  
}

module.exports = { main };
