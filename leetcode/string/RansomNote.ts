/*
 * Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true 
*/

function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map();

  magazine.split("").forEach((w) => {
    const num = map.get(w);
    num ? map.set(w, num + 1) : map.set(w, 1);
  });

  for (let i = 0; i < ransomNote.length; i++) {
    const count = map.get(ransomNote[i]);
    if (!count) return false;
    map.set(ransomNote[i], count - 1);
  }

  return true;
}

const ransomNote = "aa",
  magazine = "ab";

console.log(canConstruct(ransomNote, magazine));
