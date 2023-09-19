/**
 * @param {Array<number>} nums: sorted array of distinct integers
 * @param {number} target
 * @returns {number} index
 * the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * @requires: You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @example: Input: nums = [1,3,5,6], target = 5   => Output: 2
 * @example: Input: nums = [1,3,5,6], target = 7   => Output: 4
 **/

function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  const index = Math.floor((left + right) / 2);
  if (nums[index] > target) {
    return index - 1;
  } else {
    return index + 1;
  }
}

const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 2));
