/** 
 * @alias: 724. Find Pivot Index
 * @link https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
 * @tags #array #prefix_sum

 * @description:
 * calculate the pivot index of this array.
 * The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

 * @param {Array<number>} nums: 
 * @returns {number} the leftmost pivot index. If no such index exists, return -1.
*/

/**
 * @example:Input: nums = [1,7,3,6,5,6] => Output: 3
 * @description:
 *    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 *    Right sum = nums[4] + nums[5] = 5 + 6 = 11
 *
 * @example:Input: nums = [2,1,-1] => Output: 0
 * @description:
 *    Left sum = 0 (no elements to the left of index 0)
 *    Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

function pivotIndex(nums: number[]): number {
  let leftTotal = 0;
  let rightTotal = nums.reduce((pre, cur) => pre + cur, 0);

  for (let index = 0; index < nums.length; index++) {
    rightTotal -= nums[index];
    if (leftTotal === rightTotal) return index;
    leftTotal += nums[index];
  }
  return -1;
}

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums));
