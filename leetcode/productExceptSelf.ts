function productExceptSelf(nums: number[]): number[] {
  const left = new Array();
  const lastIndex = nums.length - 1;

  left[0] = 1;
  for (let index = 1; index < nums.length; index++) {
    left[index] = nums[index - 1] * left[index - 1];
  }

  const right = new Array(nums.length);
  right[lastIndex] = 1;
  for (let index = lastIndex - 1; index > -1; index--) {
    right[index] = nums[index + 1] * right[index + 1];
  }

  return left.map((num, index) => num * right[index]);
}

const nums = [1, 2, 3, 4];
// Output: [0,0,9,0,0]
console.log(productExceptSelf(nums));
