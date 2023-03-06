class Stack {
  constructor(maxSize, ...args) {
    this.maxSize = maxSize;
    this._size = 0;
    for (const value of args) {
      this.push(value);
    }
  }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(value) {
    if (typeof value !== "number") {
      throw new TypeError("must be number");
    }
    if (value <= 0 || value > MAX_SIZE_STACK) {
      throw new RangeError("must be less" + MAX_SIZE_STACK);
    }
    this._maxSize = value;
  }
  get size() {
    return this._size;
  }
  get isEmpty() {
    return this._size === 0;
  }
  push(value) {
    if (this._size >= this.maxSize) {
      throw new RangeError("stack overflow");
    }
    this[`_${this._size}`] = value;
    return ++this._size;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this._size - 1}`];
    delete this[`_${this._size - 1}`];
    this._size--;
    return lastItem;
  }
  pick() {
    return this[`_${this._size - 1}`];
  }
}

const stack1 = new Stack(5, 1, 2, 3);
// console.log(stack1);

const options = {
  breckets: {
    "(": ")",
    "{": "}",
    "[": "]",
  },
};
/**
 *
 * @param {string} str
 * @param {object} options
 * @param {object} options.breckets
 * @returns
 */
const checkExpression = (str, options) => {
  const stack = new Stack(str.length);
  const closesBrackets = Object.values(options.breckets)
  for (const symbol of str) {
    if (options.breckets[symbol]) {
      stack.push(symbol);
      continue;
    }
    const lastSymbolInStack = stack.pick();
    const correctSymbol = options.breckets[lastSymbolInStack];
    if (symbol === correctSymbol) {
      stack.pop();
    } else if(closesBrackets.includes(symbol)){
      return false;
    }
  }
  return stack.isEmpty;
};

// console.log(checkExpression("(2{3}3[4])", options));
