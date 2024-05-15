/*My first js project from hyperskill.org
*/

const input = require('sync-input');

const d = {"Bubblegum": 202,
"Toffee": 118,
"Ice cream": 2250,
"Milk chocolate": 1680,
"Doughnut": 1075,
"Pancake": 80};

let sum = 0;

console.log("Earned amount:");
for(let key in d) {
  console.log(key + ": $" + d[key]);
  sum += d[key]
};

console.log("\nIncome: $" + sum);
let staff = Number(input("Staff expenses:"));
let other = Number(input("Other expenses:"));

console.log("Net income: $" + (sum - staff - other))

