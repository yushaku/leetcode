// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

import { LinkedList } from "./leetcode/linkedList/LinkedList";

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const merged = new ListNode();
  let tail = merged;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      tail.next = list2;
      list2 = list2.next;
    } else {
      tail.next = list1;
      list1 = list1.next;
    }
    tail = tail.next;
  }
  if (list1) tail.next = list1;
  if (list2) tail.next = list2;
  return merged.next;
}

const list1 = new LinkedList<number>();
const list2 = new LinkedList<number>();

[1, 2, 4].forEach((val) => list1.append(val));
[1, 3, 4].forEach((val) => list2.append(val));

console.log(list1);
console.log(list2);