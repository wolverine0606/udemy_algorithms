class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    return ++this.length;
  }

  pop() {
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.tail = null;
    }

    this.head = this.head.next;
    this.length--;
    return this.head;
  }

  traverse() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }
}

let stack = new Stack();
console.log(stack.push("one"));
console.log(stack.push("two"));
console.log(stack.push("three"));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.traverse());
