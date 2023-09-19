function groupAnagrams(strs: string[]): string[][] {
  const dictionary = new Map<string, number>();
  const result: Array<string[]> = [];

  strs.forEach((str) => {
    const sortedStr = str
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join('');

    const index = dictionary.get(sortedStr);
    if (index !== undefined) {
      result[index].push(str);
    } else {
      result.push([str]);
      dictionary.set(sortedStr, result.length - 1);
    }
  });
  return result;
}

const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(strs));
