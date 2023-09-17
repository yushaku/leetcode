class ListNode {
  public value: string;
  public next: ListNode | null;

  constructor(value: string, next: ListNode | null) {
    this.value = value;
    this.next = next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;

  while (head) {
    let ele = head.next;
    head.next = prev;
    prev = head;
    head = ele;
  }
  return prev;
}
