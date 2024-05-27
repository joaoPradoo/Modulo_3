const rl = require("./input");
rl.prompt();

let list = new Map([
  ["Pedro", { Age: 19, Email: "Pedro123@gmail.com" }],
  ["Joao", { Age: 18, Email: "Joao456@gmail.com" }],
  ["Marcos", { Age: 19, Email: "Marcos789@gmail.com" }],
]);

function main() {
  rl.question("Type the use email: ", (answer) => {
    const email = answer.toString().trim();

    if (email == "leave") {
      rl.close();
    } else {
      getEmail(email);
    }
  });
}

function getEmail(targetEmail) {
  let userFound = false;

  list.forEach((User, userName) => {
    const email = User.Email.toString();
    if (email == targetEmail) {
      const age = User.Age;
      console.log(`User ${userName} found ,${age} years old ,${email}`);
      userFound = true;
      main();
    }
  });
  if (!userFound) {
    console.log("User not found");
    main();
  }
}

module.exports = { main };
