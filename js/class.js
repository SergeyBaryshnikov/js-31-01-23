// Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
// Тип данних для кожного поля - number
// Значення за замовчуванням - from=0 і to=10

// Реалізувати методи: setter & getter  для кожного поля
// Реалізувати метод get range, який буде повертати масив з двома полями одразу

// Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

// Обробляти помилки(виключення)
// Використовувати try/catch

class RangeValidator {
  #to;
  constructor(from = 0, to = 10) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value >= this.#to) throw new RangeError("value must be < " + this.#to);
    this._from = value;
  }
  get to() {
    return this.#to;
  }
  set to(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value <= this._from)
      throw new RangeError("value must be > " + this._from);
    this.#to = value;
  }
  get range() {
    return [this._from, this.#to];
  }
  validate(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    return value >= this._from && value <= this.#to;
  }
}

// try {
//   const validator1 = new RangeValidator();
//   console.log(validator1.from + " " + validator1.to);
//   validator1.to = 1;
//   console.log(validator1.range);
//   console.log(validator1.validate(-1));
//   console.log(validator1.validate(0));
//   console.log(validator1.validate(1));
//   console.log(validator1.validate(2));
// } catch (error) {
//   console.log(error);
// }
