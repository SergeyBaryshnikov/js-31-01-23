// Створити клас Товар з властивостями: назва, ціна, валюта, кількість,
// і методами: повернути інформацію про товар і купити товар(метод приймає кількість одиниць товару і повертає суму).

// Створити дочірні класи Фізичний товар і Віртуальний товар, обидва походять від класу товар.
// У фізичного товара додається властивість вага.
// У віртуального товара додається властивість розмір пам'яті.
// Зміниться метод повернути інформацію про товар.

const CURRENCY_STORE_ACCEPTS = ["UAH", "USD", "EUR"];

class Product {
  constructor(name, price, currency, number) {
    this.name = name;
    this.price = price;
    this.currency = currency;
    this.number = number;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") throw new TypeError("value must be string");
    if (value.trim().length <= 1)
      throw new RangeError("value must be longer than one character");
    this._name = value;
  }
  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (typeof value !== "string") throw new TypeError("value must be string");
    if (CURRENCY_STORE_ACCEPTS.includes(value.toUpperCase()))
      return (this._currency = value.toUpperCase());
    throw new RangeError("value must be 'UAH' || 'USD' || 'EUR'");
  }
  get price() {
    return this._price;
  }
  set price(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 0) throw new RangeError("value must be >= 0");
    this._price = value;
  }
  get number() {
    return this._number;
  }
  set number(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 0) throw new RangeError("value must be >= 0");
    this._number = value;
  }
  get info() {
    return (
      this._name +
      " price: " +
      this._price +
      this._currency +
      " available: " +
      this._number
    );
  }
  buy(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 1 || value > this._number)
      throw new RangeError("value must be from 1 to " + this._number);
    this._number -= value;
    return this._price * value + this._currency;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, currency, number, weight) {
    super(name, price, currency, number);
    this.weight = weight;
  }
  get weight() {
    return this._weight;
  }
  set weight(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value <= 0) throw new RangeError("value must be > 0");
    this._weight = value;
  }
  get info() {
    return super.info + " weight: " + this._weight + "kg";
  }
}

class VirtualProduct extends Product {
  constructor(name, price, currency, number, memory) {
    super(name, price, currency, number);
    this.memory = memory;
  }
  get memory() {
    return this._memory;
  }
  set memory(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value <= 0) throw new RangeError("value must be > 0");
    this._memory = value;
  }
  get info() {
    return super.info + " memory: " + this._memory + "GB";
  }
}

try {
  const productBasic = new Product("Brochure", 0, "uah", 1000);
  const productPhysical = new PhysicalProduct("Phone", 200, "eur", 25, 0.2);
  const productVirtual = new VirtualProduct("Cloud", 10, "usd", 100, 15);
  console.log(productVirtual.buy(99));
  console.log(productPhysical.info);
  console.log(productVirtual.info);
  console.log(productBasic.info);
} catch (error) {
  console.log(error);
}

const COLORS = ["red", "gray", "colorfull"];
const MAX_DIST_FLY = 90;
const MAX_DIST_FLY_MAGIC = 300;

class Squirell {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (typeof value !== "string") throw new TypeError("value must be string");
    if (value.trim().length < 4 || value.trim().length > 7)
      throw new RangeError("value must be string from 4 to 7 character");
    this._name = value;
  }
  get color() {
    return this._color;
  }
  set color(value) {
    if (typeof value !== "string") throw new TypeError("value must be string");
    if (COLORS.includes(value.toLowerCase()))
      return (this._color = value.toLowerCase());
    throw new RangeError("value must be 'red' || 'gray' || 'colorfull'");
  }
  get jump() {
    return this._name + " is jumping";
  }
}

class FlySquirell extends Squirell {
  constructor(name, color, maxDistFly) {
    super(name, color);
    this.maxDistFly = maxDistFly;
  }
  get maxDistFly() {
    return this._maxDistFly;
  }
  set maxDistFly(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 0 || value > MAX_DIST_FLY)
      throw new RangeError("value must be from 0 to " + MAX_DIST_FLY);
    this._maxDistFly = value;
  }
  fly(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 0 || value > this._maxDistFly)
      throw new RangeError("value must be from 0 to " + this._maxDistFly);
    return this._name + " is fly at " + value;
  }
}

class MagicSquirell extends FlySquirell {
  constructor(name, color, maxDistFly, words) {
    super(name, color, maxDistFly);
    this.words = words;
  }
  set maxDistFly(value) {
    if (typeof value !== "number" || !isFinite(value))
      throw new TypeError("value must be number");
    if (value < 0 || value > MAX_DIST_FLY_MAGIC)
      throw new RangeError("value must be from 0 to " + MAX_DIST_FLY_MAGIC);
    this._maxDistFly = value;
  }
  get words() {
    return this._words;
  }
  set words(value) {
    if (Array.isArray(value) && value.length > 0)
      return (this._words = value.filter(
        (eleement) => typeof eleement === "string" && eleement.trim().length > 0
      ));
    throw new Error("value must be array with length > 0");
  }
  get speak() {
    this._words.forEach((element) => console.log(element));
  }
}

try {
  const words = ["qwe1", "", "qwe2", 54, " ", "qwe3"];
  const magic1 = new MagicSquirell("Belka", "red", 60, words);
  magic1.speak;
  console.log(magic1.fly(1));
  console.log(magic1.jump);
} catch (error) {
  console.log(error);
}
