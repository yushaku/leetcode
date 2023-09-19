/* 
You are given the head of a singly linked-list. The list can be represented as:
* L0 → L1 → … → Ln - 1 → Ln
*
Reorder the list to be on the following form:
* L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

You may not modify the values in the list's nodes. Only nodes themselves may be changed. 
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function reorderList(head: ListNode | null): void {
  if (!head) return;

  // find middle of linked list and split it into 2 linked list
  let slow = head,
    fast = head.next;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }

  // revert second liskend list
  let second: ListNode | null = slow.next;
  slow.next = null;
  let prev: ListNode | null = null;
  while (second) {
    let temp = second.next;
    second.next = prev;
    prev = second;
    second = temp;
  }

  // step 3: merge
  let first: ListNode = head;
  second = prev;
  while (second) {
    let temp1 = first.next;
    let temp2 = second.next;

    first.next = second;
    second.next = temp1;

    first = temp1!;
    second = temp2!;
  }
}
