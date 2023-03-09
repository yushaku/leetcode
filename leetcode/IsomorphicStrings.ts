/** 
 * @alias: 205. Isomorphic Strings
 * @link https://leetcode.com/problems/isomorphic-strings/description/?envType=study-plan&id=level-1
 * @tags #string

 * @description:
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself..

 * @param {s: string, t:string}
 * @returns {boolean}
*/

/* use hashmap */
function isIsomorphic(s: string, t: string): boolean {
  const sDictionary: Record<string, string> = {};
  const tDictionary: Record<string, string> = {};
  let result: string = '';

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i],
      tChar = t[i];

    if (!sDictionary[sChar] && tDictionary[tChar]) return false;

    if (sDictionary[sChar]) {
      result += sDictionary[sChar];
    } else {
      sDictionary[sChar] = tChar;
      tDictionary[tChar] = sChar;
      result += tChar;
    }
  }

  return result === t;
}

/* use set */
function isIsomorphic2(s: string, t: string): boolean {
  const sDictionary: Record<string, string> = {};
  const tSet = new Set<string>();
  let result: string = '';

  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i],
      tChar = t[i];

    if (!sDictionary[sChar] && tSet.has(tChar)) return false;

    if (sDictionary[sChar]) {
      result += sDictionary[sChar];
    } else {
      sDictionary[sChar] = tChar;
      tSet.add(tChar);
      result += tChar;
    }
  }

  return result === t;
}

const s = 'badc',
  t = 'baba';

const time = () => {
  console.time('time');
  console.log(isIsomorphic(s, t));
  console.timeEnd('time');
};

const time2 = () => {
  console.time('time 2');
  console.log(isIsomorphic2(s, t));
  console.timeEnd('time 2');
};

time();
time2();
