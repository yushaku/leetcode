/*
 * Given an array nums of size n, return the majority element.
 * The majority element is the element that appears more than ⌊n / 2⌋ times.
 * You may assume that the majority element always exists in the array.
 */

/*
 * example
 * Input: nums = [3,2,3] => Output: 3
 * Input: nums = [2,2,1,1,1,2,2] => Output: 2
 */

function majorityElement(nums: number[]): number {
  let cadicate = 0;
  let vote = 0;
  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    if (vote === 0) {
      cadicate = currentValue;
    }

    if (currentValue === cadicate) {
      vote++;
    } else {
      vote--;
    }
  }
  return cadicate;
}

const nums = [2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 5, 2];
console.log(majorityElement(nums));
