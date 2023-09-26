import { ListNode } from "./SingleLinkedList";

export function createLinkedListFromArray(
  arr: number[],
): ListNode<number> | null {
  if (arr.length === 0) {
    return null;
  }

  const dummyHead = new ListNode<number>();
  let current = dummyHead;
  for (const val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }

  return dummyHead.next;
}

// Helper function to convert a linked list to an array
export function convertLinkedListToArray(
  head: ListNode<number> | null,
): number[] {
  const result: number[] = [];
  let current = head;

  while (current?.val) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

export function displayLinkedList(head: ListNode<number> | null) {
  let current = head;
  let result = "";

  while (current && current?.val !== null) {
    result = result.concat(`(${current.val}) => `);
    current = current.next;
  }

  console.log(`${result} null`);
}
