class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(maxSize = 10) {
    if (typeof maxSize !== 'number' || maxSize <= 0) {
      throw new Error('Invalid maximum size. It must be a positive number.');
    }

    this.top = null;
    this.size = 0;
    this.maxSize = maxSize;
  }

  isEmpty() {
    return this.top === null;
  }

  push(element) {
    if (this.size === this.maxSize) {
      throw new Error('Stack size exceeded');
    }

    const newNode = new Node(element);

    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }

    let temp = this.top;

    this.top = this.top.next;
    this.size--;
    return temp.data;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  toArray() {
    const arr = [];
    let current = this.top;

    while (current !== null) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  static fromIterable(iterable) {
    if (!iterable || typeof iterable[Symbol.iterator] !== 'function') {
      throw new Error(`${iterable} is not iterable`);
    }

    const newStack = new Stack(iterable.length);

    for (const element of iterable) {
      newStack.push(element);
    }
    return newStack;
  }
}
