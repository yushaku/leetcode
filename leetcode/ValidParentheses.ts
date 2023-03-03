/*
 * Given a string s containing text contain pair '(', ')', '{', '}', '[' and ']' and characters , determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */

function isValid(s: string): boolean {
  let status = true;
  const stack: Array<string> = [];
  const closePair = new Set([']', '}', ')']);
  const pair = {
    '{': '}',
    '[': ']',
    '(': ')',
  };

  const arrChars = s.split('');

  for (let index = 0; index < arrChars.length; index++) {
    const char = arrChars[index];

    if (pair[char] !== undefined) {
      // console.log(pair[char]);
      stack.push(pair[char]);
    }

    if (stack.length === 0) {
      closePair.has(char);
      status = false;
      break;
    }

    if (closePair.has(char)) {
      const matchPair = stack.pop();
      // console.log(matchPair);
      if (matchPair !== char) {
        status = false;
        break;
      }
    }
  }

  if (stack.length !== 0) {
    status = false;
  }

  return status;
}

const s = '((haha)[ok khong ne][dc]{haha}))';
console.log(isValid(s));
