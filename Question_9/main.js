const rl = require('./input');
rl.prompt();


let employee_list = new Map();
let show_list = `
____________ Empoyee Register ____________
1- Register a new employee
2- Show the all the registered employees
3- Leave
__________________________________________
`

function main(){
    console.log(show_list);
  
    rl.question("Chose an option: ", (userOption) => {
      const listOptions = {
          '1': registerEmploy,
          '2': showList,
          '3': () => rl.close()
      };
  
      const chosedOption = listOptions[userOption.trim()];
      if (chosedOption) {
          chosedOption();
      } else {
          console.log("Invalid operation. Chose a valid one.\n");
          main();
      }
  });
  }

  function showList(){
    console.log("\n_______________ Registered Empoyees _______________");
      employee_list.forEach((Employ, employName) => {
        const salary = parseFloat(Employ.Salary);
        const position = Employ.Position
        console.log(`The employee "${employName}" acts as "${position}" and earns R$${salary.toFixed(2)}`);
      });
      console.log("___________________________________________________");
      main();
  }

  function registerEmploy(){
    rl.question("Type the name of the employee: ", (employName) => {
        rl.question("Type the employee's position: ", (employPosition)=> {
            rl.question("Type the salary that the employee earns: ", (employSalary) => {
                const salary = parseFloat(employSalary);
                if (!isNaN(salary) && salary >= 0) {
                    employee_list.set(employName, {Position: employPosition, Salary: salary});
                    console.log(`\nThe employee "${employName}" was registered as a "${employPosition}".`);
                    main();
                } else {
                    console.log("\nInvalid number. Please type a valid one.");
                    registerEmploy();
                }
            });
        });
    });
  }

module.exports = { main };