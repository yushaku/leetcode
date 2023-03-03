/*
 * Given two integer arrays nums1 and nums2,
 * return an array of their intersection.
 * Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

/*
 * Example
 * 1. Input: nums1 = [1,2,2,1], nums2 = [2,2]  => Output: [2,2]
 * 2. Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] => Output: [4,9]
 *    Explanation: [9,4] is also accepted.
 */

// case 1: loop first array and loop check all element of second array => O(n^2)

function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length === 0 || nums2.length === 0) return [];

  const result: Array<number> = [];

  nums1.forEach((item) => {
    const j = nums2.indexOf(item);
    if (nums2.indexOf(item) !== -1) {
      result.push(item);
      nums2.splice(j, 1);
    }
  });
  return result;
}

// case 2: hashmap to count the frequency of each element in both array ==> O(n)
// First, iterate through the first array nums1 and count the frequency of each element using a hash map.
// Then, iterate through the second array nums2, check if the element is present in the hash map, and if so, add it to the result array and decrement its frequency in the hash map.

function intersect2(nums1: number[], nums2: number[]): number[] {
  if (nums1.length === 0 || nums2.length === 0) return [];

  const result: Array<number> = [];
  const hashmapArr1: Record<number, number> = {};

  nums1.forEach((item) => {
    const value = (hashmapArr1[item] || 0) + 1;
    hashmapArr1[item] = value;
  });

  nums2.forEach((item) => {
    if (hashmapArr1[item] > 0) {
      result.push(item);
      hashmapArr1[item]--;
    }
  });

  return result;
}

const nums1 = [4, 9, 5, 5, 4, 9, 5, 5, 5, 5],
  nums2 = [9, 4, 9, 8, 4];

console.log(intersect2(nums1, nums2));
