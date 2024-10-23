class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    let removed = this.tail;

    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    let oldHead = this.head;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index === 0) return this.head;
    if (index >= this.length || index < 0) return null;
    if (this.length / 2 > index) {
      let item = this.head;
      let counter = 0;
      while (counter < index) {
        item = item.next;
        counter++;
      }
      return item;
    } else {
      let item = this.tail;
      let counter = this.length - 1;

      while (counter > index) {
        item = item.prev;
        counter--;
      }
      return item;
    }
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
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let removed = this.get(index);
    removed.prev.next = removed.next;
    removed.next.prev = removed.prev;
    removed.prev = null;
    removed.next = null;
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
      current.prev = next;
      prev = current;
      current = next;
    }
    return this;
  }

  traverse() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(
        current.val,
        this.length,
        "prev ---------",
        current.prev,
        "next -------------",
        current.next
      );
      current = current.next;
    }
    return arr;
  }
}

let list = new DoublyLinkedList();
list.push("hello 0");
list.push("my name 1");
list.push("my name 2");
//console.log(list.unshift("hello 000"));
// list.push("hello 0");
list.push("my name 3");
list.push("my name 4");
list.push("is dima 5");
console.log(list.reverse());

console.log(list.traverse());
