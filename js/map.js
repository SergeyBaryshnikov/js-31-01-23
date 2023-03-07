"use strict";

// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна

//compare('test', 'text') -> false
//compare('Mom', 'omm') -> true
//compare('asd', 'Sad') ->true
//compare('asd', 'ssaadd') ->false
//compare('ssaadd', 'asd') ->false

const createMapFromString = (string) => {
  if (typeof string !== "string") {
    throw new TypeError("must be string");
  }
  const map = new Map();
  for (const key of string.toLowerCase()) {
    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }
  return map;
};

const compare = (str1, str2) => {
  const dict1 = createMapFromString(str1);
  const dict2 = createMapFromString(str2);
  if (dict1.size !== dict2.size) {
    return false;
  }
  for (const key of str1.toLowerCase()) {
    if (dict1.get(key) !== dict2.get(key)) {
      return false;
    }
  }
  return true;
};

console.log(compare("asd", "Sad"));

const compare2 = (str1, str2) => {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    throw new TypeError("must be string");
  }
  return (
    str1.trim().toLowerCase().split("").sort().join("") ===
    str2.trim().toLowerCase().split("").sort().join("")
  );
};

console.log(compare2("asd", "Sad"));

////////////////////////////////////////////////////////////////////////////////////////////

// const compare = (str1, str2) => {
//   const dict1 = new Map();
//   const dict2 = new Map();
//   for (const key of str1.toLowerCase()) {
//     if (dict1.has(key)) {
//       dict1.set(key, dict1.get(key) + 1);
//     } else {
//       dict1.set(key, 1);
//     }
//   }
//   for (const key of str2.toLowerCase()) {
//     if (dict2.has(key)) {
//       dict2.set(key, dict2.get(key) + 1);
//     } else {
//       dict2.set(key, 1);
//     }
//   }
//   if (dict1.size !== dict2.size) {
//     return false;
//   }
//   for (const key of str1.toLowerCase()) {
//     if (dict1.get(key) !== dict2.get(key)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(compare('asd', 'Sad'));

// const obj = { prop: 12 };
// const arr = [];
// const f = () => {};
// const map1 = new Map();
// map1.set(true, "true");
// map1.set(obj, "obj");
// map1.set(arr, "arr");
// map1.set(1, 10000);
// map1.set(f, "func");
// console.log(map1);
// console.log(map1.get(1));
// map1.delete(1);
// console.log(map1.has(1));

// const dictionary = new Map();
// dictionary.set("dog", "пес");
// dictionary.set("cat", "кіт");
// dictionary.set("funny", "веселий");
// dictionary.set("sad", "сумний");
// dictionary.set("and", "і");

// const sentence = "In morning sad Dog and funny Cat go at forest";

// const translate = (str) => {
//   return str
//     .trim()
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (dictionary.has(word) ? dictionary.get(word) : word))
//     .join(" ");
// };

// console.log(translate(sentence));

// const number1 = [1, 2, 3, 4, 5, 6];
// const number2 = [1, 43, 4, 5, 6];

// const uniqArr = [...new Set([...number1, ...number2])];
// console.log(uniqArr);

// console.log(compare("qwerty", "qwerty"));
