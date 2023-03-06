class MyArrayIterator {
  constructor(myArrayInstance) {
    this.collection = myArrayInstance;
    this.currentIndex = 0;
  }
  next() {
    return {
      value: this.collection[this.currentIndex++],
      done: this.currentIndex > this.collection.length,
    };
  }
}

class MyArray {
  constructor() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
  push() {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
      // this.length++;
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    // this.length--;
    return lastItem;
  }
  reverse() {
    const myArray = new MyArray();
    for (let index = this.length - 1; index >= 0; index--) {
      myArray.push(this[index]);
    }
    for (let index = this.length - 1; index >= 0; index--) {
      this[index] = myArray[index];
    }
    return myArray;
  }
  forEach(func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index], index, this);
    }
  }
  some(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this)) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this) === false) {
        return false;
      }
    }
    return true;
  }
  concat(instanceMyArray) {
    if (MyArray.isMyArray(instanceMyArray) === false) {
      throw new TypeError("must be instance MyArray");
    }
    const concatArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      concatArray.push(this[i]);
    }
    for (let i = 0; i < instanceMyArray.length; i++) {
      concatArray.push(instanceMyArray[i]);
    }
    return concatArray;
  }
  flat(depth = 1) {
    let result = new MyArray();
    // for (let index = 0; index < this.length; index++) {
    //   if (MyArray.isMyArray(this[index]) && depth) {
    //     const subResult = this[index].flat(depth - 1);
    //     result = result.concat(subResult);
    //   } else if (this[index] !== undefined) {
    //     result.push(this[index]);
    //   }
    // }
    this.forEach((elem) => {
      if (MyArray.isMyArray(elem) && depth) {
        result = result.concat(elem.flat(depth - 1));
      } else if (elem !== undefined) {
        result.push(elem);
      }
    });
    return result;
  }
  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}

const myArrayNumbers1 = new MyArray(998, 999, 787);
myArrayNumbers1.push(44, 33, 32, 56, 87);
// console.log(myArrayNumbers1);

const arrayNumbers1 = [];
arrayNumbers1.push(555);
// console.log(arrayNumbers1);

const array1 = new MyArray(1, 2, 3, 4, 5, 6);
const array2 = array1.reverse();
// console.log(array1);
// console.log(array2);

// myArrayNumbers1.forEach(function(elem){
//   console.log(elem);
// })

// console.log(
//   myArrayNumbers1.every(function (elem) {
//     return elem > 5;
//   })
// );

const myArr = new MyArray(
  undefined,
  10,
  new MyArray(5, new MyArray(55, 77, 88, new MyArray(555, 757, 858)), 8),
  30,
  40
);
const newMyFlatArr = myArr.flat(2);
// console.log(myArr);
// console.log(newMyFlatArr);
