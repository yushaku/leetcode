/*
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 */

/*
 * EXAMPLE 1: nums = [3,0,1] => output = 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 * 2 is the missing number in the range since it does not appear in nums.
 *
 * EXAMPLE 2: Input: nums = [9,6,4,2,3,5,7,0,1]  => Output: 8
 * Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
 * 8 is the missing number in the range since it does not appear in nums.
 */

/*
 * algorithm
 * cause array nums [0, n] have distinct numbers in range [0, n]
 * so total index of nums + array length - total value of nums = missing number
 *
 * example [2,3,1,0]
 * array length = 4
 * total index = 0 + 1 + 2 + 3  ==> total index + array length = 8
 * total value = 2 + 3 + 1 + 0 = 4
 * missing number = 4
 */

function missingNumber(nums: number[]): number {
  return nums.reduce((prev, current, index) => {
    console.log(prev);
    return prev - current + index;
  }, nums.length);
}

const nums = [0, 2];
console.log(missingNumber(nums));
