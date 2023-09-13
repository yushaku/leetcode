function topKFrequent(nums: number[], k: number): number[] {
  const hashTable = new Map<number, number>();

  nums.forEach((num) => {
    const count = hashTable.get(num);
    hashTable.set(num, count !== undefined ? count + 1 : 1);
  });

  return Array.from(hashTable)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => key)
    .splice(0, k);
}

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;
// Output: [1, 2]

console.log(topKFrequent(nums, k));
