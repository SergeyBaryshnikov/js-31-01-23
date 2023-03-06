class ListIterator {
  constructor(list) {
    this.collection = list;
    this.currentElem = null;
  }
  next() {
    this.currentElem = this.currentElem ? this.currentElem.next : this.collection.head;
    return {
      value: this.currentElem ? this.currentElem.value : undefined,
      done: this.currentElem === null,
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class List {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const value of args) {
      this.push(value);
    }
  }
  push(value) {
    const item = new ListItem(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      item.prev = this.tail;
      this.tail = item;
    }
    return ++this.length;
  }
  unshift(value) {
    const item = new ListItem(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.head.prev = item;
      item.next = this.head;
      this.head = item;
    }
    return ++this.length;
  }
  [Symbol.iterator]() {
    return new ListIterator(this);
  }
}

const list = new List(4, "asd", [1, 2], { prop: 45 }, "qwerty", false);
// console.log(...list);
