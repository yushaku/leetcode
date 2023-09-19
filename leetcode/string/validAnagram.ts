function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let result = true;
  const dictionary = new Map<string, number>();

  s.split('').forEach((char) => {
    const num = dictionary.get(char) ? dictionary.get(char)! + 1 : 1;
    dictionary.set(char, num);
  });

  const tChars = t.split('');
  for (let index = 0; index < tChars.length; index++) {
    const char = tChars[index];
    if (dictionary.has(char)) {
      const num = dictionary.get(char)! - 1;
      if (num < 0) {
        result = false;
        break;
      } else {
        dictionary.set(char, num);
      }
    } else {
      result = false;
      break;
    }
  }
  return result;
}

// const s = 'anagram',
//   t = 'nagaram';

const s = 'rat',
  t = 'car';
console.log(isAnagram(s, t));
