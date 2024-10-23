class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    this.tail = current;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = 0;
      this.tail = 0;
    }

    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = 0;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return null;
    if (index === this.length - 1) return this.tail;
    let current = this.head;
    let counter = 0;
    while (current.next && counter < index) {
      counter++;
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    const valueToChange = this.get(index);
    if (valueToChange) {
      valueToChange.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      console.log(index);

      this.push(val);
      return true;
    }
    let next = this.get(index);
    let prev = this.get(index - 1);
    let newNode = new Node(val);
    newNode.next = next;
    prev ? (prev.next = newNode) : (this.head = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index == this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
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

let list = new SinglyLinkedList();

list.push("hello 0");
list.push("my name 1");
list.push("my name 2");
list.push("my name 3");
list.push("my name 4");
list.push("is dima 5");
//console.log(list.pop());
// console.log(list.unshift("bla"));
// console.log(list.insert(6, "goodbye"), "insert");
console.log(list.reverse());

console.log(list.traverse());
//console.log(list);
