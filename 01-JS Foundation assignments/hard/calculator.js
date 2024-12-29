/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
    console.log("Initial value of result:-", this.result);
  }
  add(number) {
    this.result += number;
  }
  subtract(number) {
    this.result -= number;
  }
  multiply(number) {
    this.result *= number;
  }
  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
    console.log(
      "Value of result when the clear function is called:-",
      this.result
    );
  }
  getResult() {
    return this.result;
  }

  // Following calculate method is implemented using chatgpt, I have not understood it clearly yet.
  calculate(expression) {
    try {
      // Check for division by zero
      if (/\/\s*0\b/.test(expression)) {
        throw new Error("Division by zero is not allowed.");
      }

      // Evaluate the expression (ensure it's sanitized and safe)
      const sanitizedExpression = expression.replace(/[^0-9+\-*/().\s]/g, "");
      const result = eval(sanitizedExpression); // Avoid eval in production code
      this.result = result;
      return result;
    } catch (error) {
      throw new Error("Invalid expression: " + error.message);
    }
  }
}
let obj1 = new Calculator(); //creates the object of Calculator Calss
obj1.add(26); //call to the add function of the Calculator calss
obj1.add(10); //call to the add function of the Calculator calss
let ansOfAdd = obj1.getResult();
console.log("Addition is:-", ansOfAdd); //36

obj1.subtract(10); //call to the subtract function of the Calculator calss
let ansOfSubtract = obj1.getResult();
console.log("Subtraction is:-", ansOfSubtract); //26

obj1.multiply(10); //call to the add function of the Calculator calss
let ansOfMultiply = obj1.getResult();
console.log("Multiplication is:-", ansOfMultiply); //260

obj1.divide(10); //call to the add function of the Calculator calss
let ansOfDivide = obj1.getResult();
console.log("Division is:-", ansOfDivide); //26

obj1.clear();

try {
  // obj1.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
  obj1.calculate("5 + abc");
  console.log("Answer for the mathematical expression is:-", obj1.getResult()); // Output: 24
} catch (error) {
  console.error(error.message);
}

module.exports = Calculator;
