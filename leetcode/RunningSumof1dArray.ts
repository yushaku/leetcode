/**
 *@param {Array<number>} nums: Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * @Return the running sum of nums.
 */

/**
 * @example:Input: nums = [1,2,3,4] => Output: [1,3,6,10]
 * @example:Input: nums = [1,1,1,1,1] => Output: [1,2,3,4,5]
 */

function runningSum(nums: number[]): number[] {
  for (let index = 1; index < nums.length; index++) {
    nums[index] = nums[index] + nums[index - 1];
  }

  return nums;
}

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
