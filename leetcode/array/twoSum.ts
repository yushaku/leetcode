/*
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.

 * Example 1
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 * Example 2
 * Input: nums = [3,3], target = 6
 * Output: [0,1]

 * algorithms
 * we define a mapValue contain [ needFindNumber => itsNumberIndex ]
 * loop throw the array and let target number subtract current number and store calculated value and current index to mapValue
 *  - example target is 9 and current number is a first number of array and its value is 2 => mapValue [7 => 0]
 * if the next value of an array is existed in mapValue -> that is number and its index we have to fine
 * - example: the second value of array if 7 and 7 is already existed in mapValue -> return [oldIndex, currentIndex]
 * */

function twoSum(nums: number[], target: number): number[] {
  const mapValue = new Map<number, number>();
  let result: Array<number> = [];

  if (!nums.length) return result;

  nums.forEach((num, index) => {
    const needValue = target - num;

    if (!mapValue.has(num)) {
      mapValue.set(needValue, index);
    } else {
      const oldIndex = Number(mapValue.get(num));
      result = [oldIndex, index];
    }
  });

  return result;
}

const nums = [3, 2, 4];
twoSum(nums, 6);
