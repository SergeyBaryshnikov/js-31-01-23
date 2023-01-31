// 1 variant
// const MyArrayPrototype = {};
// MyArrayPrototype.push = function (value) {
//   this[this.length] = value;
//   return ++this.length;
// };

//2 variant constructor for prototype
function MyArrayPrototype() {
  this.push = function () {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
      // this.length++;
    }
    return this.length;
  };
  this.pop = function () {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    // this.length--;
    return lastItem;
  };
  this.reverse = function () {
    const myArray = new MyArray();
    for (let index = this.length - 1; index >= 0; index--) {
      myArray.push(this[index]);
    }
    for (let index = this.length - 1; index >= 0; index--) {
      this[index] = myArray[index];
    }
    return myArray;
  };
  this.forEach = function (func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index], index, this);
    }
  };
  this.some = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this)) {
        return true;
      }
    }
    return false;
  };
  this.every = function (func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this) === false) {
        return false;
      }
    }
    return true;
  };
}

function MyArray() {
  this.length = 0;
  for (let index = 0; index < arguments.length; index++) {
    this.push(arguments[index]);
  }
}

MyArray.prototype = new MyArrayPrototype();

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
