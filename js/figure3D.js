// Створити "абстрактний" клас Figure3D з властивістю name (рядок не порожній)
// і методом обчислити об'єм. calculate the volume

// Створити класи нащадки: сфера, куб, циліндр. sphere cube cylinder
// Обов'яково прописати сеттери та геттери для властивостей!
// Не забувати про виброс виключень.

// Використовувати конструкцію try/catch
// Створити по одному екземпляру кожного класу.

// Створити функцію showVolume3DFigure, яка приймає об'єкт і повертає рядок виду "[назва фигури] has volume: [значення об'єму].

function isNumOfRange(
  value,
  from = Number.MIN_SAFE_INTEGER,
  to = Number.MAX_SAFE_INTEGER
) {
  if (Number.isFinite(value) === false)
    throw new TypeError("value must be number");
  if (value <= from || value >= to)
    throw new RangeError(
      "value must be greater than " + from + " and less than " + to
    );
  return true;
}
function isString(value) {
  if (typeof value !== "string") throw new TypeError("value must be string");
  if (value.trim().length === 0)
    throw new RangeError("value length must be greater than 0");
  return true;
}
function showVolume3DFigure(figure3D) {
  if (figure3D instanceof Figure3D)
    return `${figure3D.name} has volume = ${figure3D.calculateVolume()}`;
  throw new TypeError("instance must be extends Figure3D");
}
class Figure3D {
  constructor(name) {
    if (this.constructor === Figure3D) {
      throw new Error("not create insstance from Figure3D");
    }
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (isString(value)) this._name = value;
  }
  calculateVolume() {}
}
class Sphere extends Figure3D {
  constructor(radius) {
    super("sphere");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (isNumOfRange(value, 0)) this._radius = value;
  }
  calculateVolume = () => (4 * Math.PI * Math.pow(this._radius, 3)) / 3;
}
class Cube extends Figure3D {
  constructor(side) {
    super("cube");
    this.side = side;
  }
  get side() {
    return this._side;
  }
  set side(value) {
    if (isNumOfRange(value, 0)) this._side = value;
  }
  calculateVolume = () => this._side * this._side * this._side;
}
class Cylinder extends Figure3D {
  constructor(height, radius) {
    super("cylinder");
    this.height = height;
    this.radius = radius;
  }
  get height() {
    return this._height;
  }
  set height(value) {
    if (isNumOfRange(value, 0)) this._height = value;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (isNumOfRange(value, 0)) this._radius = value;
  }
  calculateVolume = () => Math.PI * Math.pow(this._radius, 2) * this._height;
}
// try {
//   const figureSphere = new Sphere(10);
//   const figureCube = new Cube(10);
//   const figureCylinder = new Cylinder(10, 10);
//   console.log(showVolume3DFigure(figureSphere));
//   console.log(showVolume3DFigure(figureCube));
//   console.log(showVolume3DFigure(figureCylinder));
// } catch (error) {
//   console.log(error);
// }
// try {
//   const test = new Figure3D();
// } catch (error) {
//   console.log(error);
// }
////////////////////////////////////////////////////////////////////
function logPerimetrFigure(figure) {
  if (figure instanceof Figure) {
    console.log(figure.name + " perimetr = ", figure.getPerimetr());
    return;
  }
  throw new TypeError("instance must be extends Figure");
}
class Figure {
  constructor(name) {
    if (this.constructor === Figure) {
      throw new Error("not create insstance from Figure");
    }
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (isString(value)) this._name = value;
  }
  getPerimetr() {}
  getArea() {}
}
class Circle extends Figure {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
  get radius() {
    return this._radius;
  }
  set radius(value) {
    if (isNumOfRange(value, 0)) this._radius = value;
  }
  getPerimetr = () => 2 * Math.PI * this._radius;
  getArea = () => Math.PI * this._radius * this._radius;
}
class Square extends Figure {
  constructor(side) {
    super("square");
    this.side = side;
  }
  get side() {
    return this._side;
  }
  set side(value) {
    if (isNumOfRange(value, 0)) this._side = value;
  }
  getPerimetr = () => this._side * 4;
  getArea = () => this._side * this._side;
}
class Triangular extends Figure {
  constructor(side1, side2, side3) {
    super("triangular");
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  get side1() {
    return this._side1;
  }
  set side1(value) {
    if (isNumOfRange(value, 0)) {
      if (value >= this._side2 + this._side3) {
        throw new RangeError("value must be < " + (this._side2 + this._side3));
      }
      this._side1 = value;
    }
  }
  get side2() {
    return this._side2;
  }
  set side2(value) {
    if (isNumOfRange(value, 0)) {
      if (value >= this._side3 + this._side1) {
        throw new RangeError("value must be < " + (this._side3 + this._side1));
      }
      this._side2 = value;
    }
  }
  get side3() {
    return this._side3;
  }
  set side3(value) {
    if (isNumOfRange(value, 0)) {
      if (value >= this._side2 + this._side1) {
        throw new RangeError("value must be < " + (this._side2 + this._side1));
      }
      this._side3 = value;
    }
  }
  getPerimetr = () => this._side1 + this._side2 + this._side3;
  getArea = () => "formula Gerona";
}
// try {
//   const figure1 = new Circle(10);
//   const figure2 = new Square(10);
//   const figure3 = new Triangular(10, 10, 10);
//   console.log(figure1.getPerimetr());
//   console.log(figure2.getPerimetr());
//   console.log(figure3.getPerimetr());
//   console.log(figure1.getArea());
//   console.log(figure2.getArea());
//   console.log(figure3.getArea());
//   logPerimetrFigure(figure1);
// } catch (error) {
//   console.log(error);
// }
