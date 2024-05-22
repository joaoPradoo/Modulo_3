const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.prompt();

let shopList = new Map();
let list = `
  __________Shop List!__________
  1.Add items to the shop list
  2.Remove items from shop list
  3.Mark an item as purchased
  4.Show list
  5.leave
  _______________________________
  `

Main()

function Main(){
  console.log(list)

  rl.question("Chose an option: ", (userOption) => {
    const listOptions = {
        '1': addList,
        '2': removeList,
        '3': markPurchased,
        '4': showList,
        '5': () => rl.close()
    };

    const chosedOption = listOptions[userOption.trim()];
    if (chosedOption) {
        chosedOption();
    } else {
        console.log("Invalid operation. Chose a valid one.\n");
        Main();
    }
});
}


function addList(){
  rl.question("Type the name of the item: ", (itemName) => {
    rl.question("Type the price of the item: ", (itemPrice) => {
        const price = parseFloat(itemPrice);
        if (!isNaN(price) && price >= 0) {
            shopList.set(itemName, { Price: price, Pruchased: false });
            console.log(`The item "${itemName}" was added to the list.`);
            Main();
        } else {
            console.log("Invalid number. Type a valid one.");
            Main();
        }
    });
});
}

function removeList(){
  rl.question("Type the name of the item that you want to remove: ", (userChose)=>{
    if(shopList.has(userChose)){
      shopList.delete(userChose);
      console.log(`The item "${userChose}" was removed from the list`);
      Main();
    }else{
      console.log(`The item "${userChose}" are not in the list`);
      Main();
    }
  });
}

function markPurchased(){
  rl.question("Type the name of the item that you want to mark as purchased: ", (userChose)=>{
    if(shopList.has(userChose)){
      const item = shopList.get(userChose);
            item.Pruchased = true;
      console.log(`The item "${userChose}" was marked as purchased`);
      Main();
    }else{
      console.log(`The item "${userChose}" are not in the list`);
      Main();
    }
  });
}

function showList(){
  console.log("\n__________Shop List!___________");
    shopList.forEach((item, itemName) => {
      const price = parseFloat(item.price);
      const status = item.Purchased ? " (Purchased)" : "";
      console.log(`${itemName}: R$ ${price.toFixed(2)}${status}`);
    });
    console.log("_______________________________");
    Main();
}