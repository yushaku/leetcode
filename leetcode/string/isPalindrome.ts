/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

function isPalindrome(s: string): boolean {
  const array = s
    .toLowerCase()
    .replace(/[^A-Za-z0-9]/g, "") // remove non charactor from a-z and 0-9
    .replace(/\s/g, "") // remove space charactor
    .split("");

  const length = array.length;
  for (let index = 0; index < length / 2; index++) {
    const char1 = array[index];
    const char2 = array[length - 1 - index];
    if (char1 !== char2) return false;
  }

  return true;
}

function isPalindrome2(s: string): boolean {
  const ms = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const rs = ms.split("").reverse().join("");
  return rs === ms;
}

const s = "race a car";
console.log(isPalindrome(s));
console.log(isPalindrome2(s));
