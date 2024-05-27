function main() {
  let cityA = 80000;
  let cityB = 200000;
  calculateYear(cityA, cityB)
}

function calculateYear(x, y) {
  let A = parseInt(x);
  let B = parseInt(y);

  let i = 0;
  while (true) {
    if (A >= B) {
      console.log(`Would need ${i} years to city A pass city B`);
      console.log("City B",B)
      console.log("City A",A)
      break;
    } else {
      i++;
      A += parseInt(A * 0.03);
      B += parseInt(B * 0.015);
      
    }
  }
}

module.exports = { main };