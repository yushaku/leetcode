/* You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
*/

function operate(a: number, b: number, operation: string): number {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return Math.trunc(a / b);
    default:
      return 1;
  }
}

function evalRPN(tokens: string[]): number {
  const stack: Array<number> = [];

  tokens.forEach((char) => {
    const num = Number(char);

    if (isNaN(num)) {
      const num1 = stack.pop()!;
      const num2 = stack.pop()!;
      const result = operate(num2, num1, char);
      stack.push(result);
    } else {
      stack.push(num);
    }
  });

  return stack.pop()!;
}

const tokens = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];

/* 
((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22 
*/

console.log(evalRPN(tokens));
