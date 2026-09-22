//  task 1 ---- > 

const val1 = 0 || ("" ?? "Fallback") || 100;
const val2 = false + true + "2";
const val3 = 5 > 3 > 1;

console.log("val1:", val1);  // 100
console.log("val2:", val2);  // 12  -->     (but string type hobe)
console.log("val3:", val3);   // false
 

// task 2 -----> 
let sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  if (i > 7) {
    break;
  }
  sum += i;
}

console.log("sum:", sum);
 /** 
  * 19   --- > ( 1, 2, 4,5,7) == 19    - - > { 1+2=3+4=7+5=12+7=19}
  */


//  task-3 
const cart = [
  { name: "Laptop", price: 1000, category: "Electronics", quantity: 1 },
  { name: "Shirt", price: 50, category: "Clothing", quantity: 2 },
  { name: "Mouse", price: 25, category: "Electronics", quantity: 3 },
  { name: "Pants", price: 70, category: "Clothing", quantity: 1 }
];

// filter & map
const electronics = cart
  .filter(item => item.category === "Electronics")
  .map(item => ({ name: item.name, total: item.price * item.quantity }));

// reduce
const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

// remaining calculation
const remaining = 1200 - totalPrice;

console.log(electronics); // Output: [ { name: 'Laptop', total: 1000 }, { name: 'Mouse', total: 75 } ]
console.log(totalPrice);  // Output: 1245
console.log(remaining);   // Output: -45 
