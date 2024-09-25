const User = require('./User');
const { add, subtract, PI } = require('./mathUtils');
const user1 = new User('edith', 19);
user1.greet(); 
console.log(`Suma: ${add(5, 3)}`); 
console.log(`Resta: ${subtract(10, 4)}`); 
console.log(`Valor de PI: ${PI}`); 
