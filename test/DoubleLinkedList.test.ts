import { expect, test } from "bun:test";
import { DoubleLinkedList } from "leetcode/linkedList/DoubleLinkedList";

class Foo {
  private val: number;
  constructor(val: number) {
    this.val = val;
  }

  get bar() {
    return this.val;
  }
}

test("should create an empty list #1", () => {
  let values: number[] = [];

  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
});

test("should create an empty list #2", () => {
  // call the constructor without any arguments
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
});

test("should create a DoubleLinkedList with a single value", () => {
  let list = new DoubleLinkedList<number>(4);
  expect(list.length).toEqual(1);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(4);
});

test("should create a DoubleLinkedList with mutiple initial values", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
});

test("should support iterable protocol", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  let index = 0;
  for (let item of list) {
    expect(item).toEqual(values[index++]);
  }
  expect(index).toEqual(values.length);
});

test("should support spread opertor", () => {
  let values: number[] = [0, 1, 2];
  let list = new DoubleLinkedList<number>(...values);
  let count = 0;
  function spreadTest(...args: number[]) {
    for (let i in args) {
      count++;
      expect(args[i]).toEqual(values[i]);
    }
  }
  spreadTest(...list);
  expect(count).toEqual(values.length);
});

test("should support deconstruction", () => {
  let values: number[] = [0, 1, 2];
  let list = new DoubleLinkedList<number>(...values);
  let count = 0;
  let [a, b, c] = list;
  expect(a).toEqual(values[0]);
  expect(b).toEqual(values[1]);
  expect(c).toEqual(values[2]);
});

test("should support iterator protocol", () => {
  let values: number[] = [0, 1, 2];
  let list = new DoubleLinkedList<number>(...values);
  let iterator = list.iterator();
  let iter = iterator.next();
  expect(iter.value).toEqual(0);
  expect(iter.done).toBeFalse();
  iter = iterator.next();
  expect(iter.value).toEqual(1);
  expect(iter.done).toBeFalse();
  iter = iterator.next();
  expect(iter.value).toEqual(2);
  expect(iter.done).toBeFalse();
  iter = iterator.next();
  expect(iter.value).toBeUndefined();
  expect(iter.done).toBeTrue();
});

test('should allow "any" type', () => {
  let values: any[] = [4, { hello: "world" }, "hello"];
  let list = new DoubleLinkedList<any>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual("hello");
});

test("should allow custom types", () => {
  let foo1 = new Foo(4);
  let foo2 = new Foo(5);
  let foo3 = new Foo(6);
  let foo4 = new Foo(7);

  let list = new DoubleLinkedList<Foo>(foo1, foo2, foo3, foo4);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  expect(list.head.bar).toEqual(foo1.bar);
  expect(list.tail.bar).toEqual(foo4.bar);
});

test("should append a value to the end of the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  list.append(7);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
});

test("should append a value to the end of an empty list", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  list.append(1);
  expect(list.length).toEqual(1);
  expect(list.head).toEqual(1);
  expect(list.tail).toEqual(1);
});

test("should prevent duplicates when appending primatives", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.append(5, true);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(result).toBeFalse;
});

test("should prevent duplicates when appending custom types", () => {
  let foo1 = new Foo(4);
  let foo2 = new Foo(5);
  let foo3 = new Foo(6);
  let foo4 = new Foo(7);

  let list = new DoubleLinkedList<Foo>(foo1, foo2, foo3, foo4);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  let result = list.append(foo2, true);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  expect(result).toBeFalse;
});

test("should prepend a value to the beginning of the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  list.prepend(3);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(3);
  expect(list.tail).toEqual(6);
});

test("should prepend a value to the beginning of an emptylist", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  list.prepend(1);
  expect(list.length).toEqual(1);
  expect(list.head).toEqual(1);
  expect(list.tail).toEqual(1);
});

test("should prevent duplicates when prepending primatives", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.prepend(5, true);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(result).toBeFalse;
});

test("should prevent duplicates when prepending custom types", () => {
  let foo1 = new Foo(4);
  let foo2 = new Foo(5);
  let foo3 = new Foo(6);
  let foo4 = new Foo(7);

  let list = new DoubleLinkedList<Foo>(foo1, foo2, foo3, foo4);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  let result = list.prepend(foo2, true);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  expect(result).toBeFalse;
});

test("should remove the first value in the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.removeHead();
  expect(list.length).toEqual(2);
  expect(list.head).toEqual(5);
  expect(list.tail).toEqual(6);
  expect(val).toEqual(4);
});

test("should handle removing Head from an empty list", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();

  let val = list.removeHead();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(val).toBeUndefined();
});

test("should handle removing Head from a list with single item", () => {
  let values: number[] = [4];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(1);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(4);
  let val = list.removeHead();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(val).toEqual(4);
});

test("should remove the last value in the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.removeTail();
  expect(list.length).toEqual(2);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(5);
  expect(val).toEqual(6);
});

test("should handle removing Tail from an empty list", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  let val = list.removeTail();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(val).toBeUndefined();
});

test("should handle removing Tail from a list with single item", () => {
  let values: number[] = [4];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(1);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(4);
  let val = list.removeTail();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(val).toEqual(4);
});

test("should remove a specified value from a primative list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.remove(5);
  expect(list.length).toEqual(2);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(val).toEqual(5);
});

test("should remove a specified value from the end of the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.remove(6);
  expect(list.length).toEqual(2);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(5);
  expect(val).toEqual(6);
});

test("should remove a specified value from the beginning of the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.remove(4);
  expect(list.length).toEqual(2);
  expect(list.head).toEqual(5);
  expect(list.tail).toEqual(6);
  expect(val).toEqual(4);
});

test("should handle removing a value from an empty list", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  let val = list.remove(5);
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(val).toBeUndefined();
});

test("should return undefined if the value is not in the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let val = list.remove(7);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(val).toBeUndefined();
});

test("should remove a specified value from a custom type list", () => {
  let foo1 = new Foo(4);
  let foo2 = new Foo(5);
  let foo3 = new Foo(6);
  let foo4 = new Foo(7);

  let list = new DoubleLinkedList<Foo>(foo1, foo2, foo3, foo4);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  let val = list.remove(foo3);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(foo1);
  expect(list.tail).toEqual(foo4);
  expect(val).toEqual(foo3);
});

test("should insert a value after a specified value", () => {
  let values: number[] = [4, 5, 7];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
  let result = list.insert(6, 5);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
  expect(result).toBeTrue();
});

test("should insert a value at the end of the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.insert(7, 6);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
  expect(result).toBeTrue();
});

test("should insert a value at the beginning of the list", () => {
  let values: number[] = [4, 6, 7];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
  let result = list.insert(5, 4);
  expect(list.length).toEqual(4);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(7);
  expect(result).toBeTrue();
});

test("should prevent duplicates when inserting into the list", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.insert(5, 5, true);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(result).toBeFalse;
});

test("should insert into an empty list", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  let result = list.insert(5, 4);
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  expect(result).toBeFalse;
});

test("should not insert when previous cannot be found", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.insert(8, 7);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(result).toBeFalse;
});

test("should convert the list to an array", () => {
  let values: number[] = [4, 5, 6];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  let result = list.toArray();
  expect(list.length).toEqual(3);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(6);
  expect(result).toStrictEqual(values);
  expect(result.length).toEqual(values.length);
});

test("should convert an empty list to an empty array", () => {
  let list = new DoubleLinkedList<number>();
  expect(list.length).toEqual(0);
  expect(list.head).toBeNull();
  expect(list.tail).toBeNull();
  let result = list.toArray();
  expect(result.length).toEqual(0);
});

test("should return the first n values of the list", () => {
  let values: number[] = [4, 5, 6, 7, 8, 9];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(6);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(9);
  let result = list.first(3);
  expect(result.length).toEqual(3);
  expect(result[0]).toEqual(4);
  expect(result[1]).toEqual(5);
  expect(result[2]).toEqual(6);
});

test("should return empty array when n is zero", () => {
  let values: number[] = [4, 5, 6, 7, 8, 9];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(6);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(9);
  let result = list.first(0);
  expect(result.length).toEqual(0);
});

test("should return the lesser of n values or length of list", () => {
  let values: number[] = [4, 5, 6, 7, 8, 9];
  let list = new DoubleLinkedList<number>(...values);
  expect(list.length).toEqual(6);
  expect(list.head).toEqual(4);
  expect(list.tail).toEqual(9);
  let result = list.first(7);
  expect(result.length).toEqual(6);
  expect(result[0]).toEqual(4);
  expect(result[1]).toEqual(5);
  expect(result[2]).toEqual(6);
  expect(result[3]).toEqual(7);
  expect(result[4]).toEqual(8);
  expect(result[5]).toEqual(9);
});
