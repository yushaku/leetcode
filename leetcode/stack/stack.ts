class MinStack {
  private items: Array<any>;

  constructor() {
    this.items = [];
  }

  push(val: number): void {
    this.items.push(val);
  }

  pop(): void {
    this.items.pop();
  }

  top(): number | null {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1];
  }

  getMin(): number {
    return this.items.reduce((pre, cur) => {
      return pre > cur ? cur : pre;
    }, this.items[0]);
  }
}

const stack = new MinStack();
stack.getMin();
stack.push(2);
stack.push(0);
stack.push(3);
stack.push(0);
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
stack.getMin();
stack.pop();
console.log(stack);
console.log(stack.getMin());
