/*
 * Given a string s containing text contain pair '(', ')', '{', '}', '[' and ']' and characters , determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s: string): boolean {
  if (s.length < 2) return false;
  const stack: Array<string> = [];
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index);
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    } else {
      const closePair = pair[stack.pop()!];
      if (closePair !== char) return false;
    }
  }

  return stack.length === 0;
}

const s = '((';
console.log(isValid(s));
