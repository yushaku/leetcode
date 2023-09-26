import { ListNode } from "./SingleLinkedList";
import { createLinkedListFromArray, displayLinkedList } from "./helper";

type Node = ListNode<number> | null;

let result = "";
function reverseList(head: Node): Node {
  let prev: Node = null;

  while (head && head.val !== null) {
    result = result.concat(`${head.val} =>`);
    console.log({ result, next: head.next?.val });

    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

const inputArray = [1, 2, 3, 6, 5, 0, 6];
const linkedList = createLinkedListFromArray(inputArray);
displayLinkedList(linkedList);

displayLinkedList(reverseList(linkedList));
