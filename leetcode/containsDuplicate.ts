/*
 * Given an integer array nums,
 * return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/* Example
 * Input: nums = [1,2,3,1]  => Output: true
 * Input: nums = [1,2,3,4] => Output: false
 */

function containsDuplicate(nums: number[]): boolean {
  const hashTable: Record<number, boolean> = {};

  for (let index = 0; index < nums.length; index++) {
    if (hashTable[nums[index]]) {
      return true;
    } else {
      hashTable[nums[index]] = true;
    }
  }

  return false;
}

const numbers = [1, 2, 3, 4];
console.log(containsDuplicate(numbers));
