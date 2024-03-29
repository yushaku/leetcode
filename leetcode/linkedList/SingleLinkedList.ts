export class ListNode<T> {
  val: T | null;
  next: ListNode<T> | null;
  constructor(val?: T, next?: ListNode<T> | null) {
    this.val = val ?? null;
    this.next = next ?? null;
  }
}

export class SingleLinkedList<T> {
  head: ListNode<T> | null;
  tail: ListNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // insert ListNode at the end of the linked list
  append(val: T) {
    const newListNode = new ListNode(val);
    if (!this.head || !this.tail) {
      this.head = newListNode;
      this.tail = newListNode;
      return;
    }

    let current = this.tail;
    current.next = newListNode;
  }

  // delete the first ListNode that contains the given val
  delete(val: T) {
    if (!this.head) {
      return;
    }
    if (this.head.val === val) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // sort the linked list in ascending order
  sort() {
    if (!this.head || !this.head.next) return;

    let current = this.head;
    while (current) {
      let runner = current.next;

      while (runner) {
        if (current.val! > runner.val!) {
          [current.val, runner.val] = [runner.val, current.val];
        }
        runner = runner.next;
      }
      current = current.next!;
    }
  }

  // print all the ListNodes in the linked list
  traverse() {
    if (!this.head) return;
    let result = "";

    let current = this.head;
    while (current) {
      result = result.concat(`(${current.val}) => `);
      current = current.next!;
    }
    console.log(`${result} null`);
  }
}
