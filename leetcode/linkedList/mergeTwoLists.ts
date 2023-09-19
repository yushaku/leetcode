/*
You are given the heads of two sorted linked lists `list1` and `list2`.
- Merge the two lists into one **sorted** list.
- The list should be made by splicing together the nodes of the first two lists.
- Return _the head of the merged linked list_.

_**Example 1:**_
- **Input:** list1 = `[1, 2, 4]`, list2 = `[1, 3, 4]`
- **Output:** `[1, 1, 2, 3, 4, 4]`
- ![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

_**Example 2:**_
- **Input:** list1 = [], list2 = [0]
- **Output:** [0]
*/

import { ListNode } from "./SingleLinkedList";
class Node extends ListNode<number> {}

function mergeTwoLists(list1: Node | null, list2: Node | null): Node | null {
  const merged = new Node();
  let tail = merged;

  while (list1?.val && list2?.val) {
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
