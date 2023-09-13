function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let longest = 0;

  nums.forEach((num) => {
    if (!numsSet.has(num - 1)) {
      let length = 0;
      while (numsSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  });

  return longest;
}

const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
// Output: 9
console.log(longestConsecutive(nums));
