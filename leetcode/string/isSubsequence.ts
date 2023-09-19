/**
 * @alias 392. Is Subsequence
 * @link https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
 * @tags #string
 */

/**
 * @description:
 * @param {s: string, t: string}
 * @return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 */

/** @example
 * Input: s = "abc", t = "ahbgdc" => Output: true
 * Input: s = "ace", t = "abcde" => Output: true
 * Input: s = "aec", t = "abcde" => Output: false
 */

/**
 * @solutions
 * The main logic is understood how many times we met each element of the subsequence at the string and compare the number with subsequence's length.
 * If we find equality, we increase the counter. (It means that on the second iteration counter will be 1 and we'll compare second letter of the subsequence with the second letter of the string)
 * If not, just skip this iteration. (It means that on the second iteration counter will be 0 and we'll compare first letter of the subsequence with the second letter of the string)
 */

function isSubsequence(s: string, t: string): boolean {
  let counter = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[counter] === t[i]) counter++;
  }

  // console.log({ counter, s });

  return counter === s.length;
}

const s = 'aaaaaa',
  t = 'bbaaaa';
console.log(isSubsequence(s, t));
