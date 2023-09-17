/*
 * Given a string s containing text contain pair '(', ')', '{', '}', '[' and ']' and characters , determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */

// function isValid(s: string): boolean {
//   if (s.length < 2) return false;
//   const stack: Array<string> = [];
//   const pair = {
//     '{': '}',
//     '[': ']',
//     '(': ')',
//   };

//   for (let index = 0; index < s.length; index++) {
//     const char = s.charAt(index);
//     if (char === '[' || char === '{' || char === '(') {
//       stack.push(char);
//     } else {
//       const closePair = pair[stack.pop()!];
//       if (closePair !== char) return false;
//     }
//   }

//   return stack.length === 0;
// }

// const s = '((';
// console.log(isValid(s));
class MinStack {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }

  push(val: number): void {
    this.items.push(val);
  }

  pop(): void {
    this.items.pop();
  }

  top(): number {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }

  getMin(): number {
    return this.items.reduce((pre, cur) => {
      return pre > cur ? cur : pre;
    }, this.items[0]);
  }
}

const stack = new MinStack();
stack.getMin();
stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
console.log(stack);
console.log(stack.getMin());
