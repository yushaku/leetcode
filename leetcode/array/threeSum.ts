/*
Given an integer array nums,
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does notmatter.
*/

function threeSum(nums: number[]): number[][] {
  const result: Array<number[]> = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length; i++) {
    //check case next number like previous number that allready in result
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum > 0) right--;
      else if (sum < 0) left++;
      else {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;

        // check case [0, 0, 0, 0]
        // just return [0, 0,0 ]
        // instead of [[0, 0, 0], [0, 0, 0]]
        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }

  return result;
}

const nums = [-1, 0, 1, 2, -1, -4, -5, 8];
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum(nums));
