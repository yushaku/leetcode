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
  const mapValue = new Map<number, number>();

  nums.forEach((num) => {
    if (mapValue.has(num) && mapValue.get(num) !== undefined) {
      let oldValue = Number(mapValue.get(num));
      mapValue.set(num, ++oldValue);
    } else {
      mapValue.set(num, 1);
    }
  });

  let result: number;
  let max: number;
  for (const result of mapValue) {
    console.log(result);
  }

  return 0;
}

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));
