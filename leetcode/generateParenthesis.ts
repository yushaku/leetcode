/*

Given n pairs of parentheses,
write a function to generate all combinations of well-formed parentheses.

Example 1:
* Input: n = 3
* Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
* Input: n = 1
* Output: ["()"] 
*/

// only add open paranthesis if open < n
// only add closing paranthesis of close < open
// valid if open === close === n
function generateParenthesis(n: number): string[] {
  const stack: Array<string> = [];
  const result: Array<string> = [];

  function backtrack(nOpen: number, nClose: number) {
    console.table({
      nOpen,
      nClose,
      stack,
      result,
    });

    if (nOpen < n) {
      stack.push("(");
      backtrack(nOpen + 1, nClose);
      stack.pop();
    }

    if (nClose < nOpen) {
      stack.push(")");
      backtrack(nOpen, nClose + 1);
      stack.pop();
    }

    if (nOpen === n && nClose === n) {
      result.push(stack.join(""));
      return;
    }
  }
  backtrack(0, 0);
  return result;
}

console.log(generateParenthesis(2));
