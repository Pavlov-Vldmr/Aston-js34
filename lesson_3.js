// 1. Создать объект `counter` всеми возможными способами;

let counter1 = new Object(); // конструктор
let counter2 = {}; // литеральная нотация
let counter3 = Object.create({});

let counter4 = { count: 1 };
let counter4assign = Object.assign({}, counter4);

class XY {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
let counter5 = new XY(1, 2);

function TrueOrFalse() {
  this.tOfalse = true;
}
let counter6 = new TrueOrFalse();

let counter7 = Object.create({ count: 1 });
let counter8 = JSON.parse('{"count": 1}');

// 2. Скопировать объект `counter` всеми возможными способами;

let counter = { count: 0 };

let counterCopy1 = new Object(counter);
let counterCopy2 = Object.assign({}, counter);
let counterCopy3 = { ...counter };
let counterCopy4 = JSON.parse(JSON.stringify(counter));
let counterCopy5 = Object.create(
  Object.getPrototypeOf(counter),
  Object.getOwnPropertyDescriptors(counter)
);

let { ...counterCopy6 } = counter;

let counterCopy7 = {};
for (let key in counter) {
  counterCopy7[key] = counter[key];
}

let counterCopy8 = structuredClone(counter);

// 3. Создать функцию `makeCounter` всеми описанными и возможными способами;
let count = 1; //счетчик через глобальную переменную

// Function Declaration
function makeCounter1() {
  return count++;
}

// Function Expression
const makeCounter2 = function () {
  return count++;
};

// Arrow
const makeCounter3 = () => {
  return count++;
};
const makeCounter3_1 = () => count++; // Arrow

// Constuctor
const makeCounter4 = new Function("", "return count++");

// Class Method
class ClassName {
  makeCounter6() {
    return count++;
  }
}
const instance = new ClassName();

// Counter with local wariable
function makeCounter() {
  let count = 0;
  this.up = function () {
    return ++count;
  };
}
// let c = new makeCounter();
// console.log( с.up() );
// console.log( с.up() );

/**
 * 4. прочитать и описать работу глобальной функции `structuredClone()`
 *
 * Копирует без связи по ссылке
 * Может копировать вложенные объекты с сохранением структуры
 * Возвращает новый объект
 * Не может копировать функцияии, сетеры, гетеры, дом элементы
 * Ограничения по версиям браузеров и node.js
 * Прототипная цепочка не клонируется
 */

const person = {
  name: "Jhon",
  birthDate: new Date("1995-07-20"),
  title: "Developer",
  skills: ["JS", "React", "Laravel"],
};

const personCopy = structuredClone(person);

// console.log(personCopy)
//{
// name: 'Jhon',
// birthDate: 1995-07-20T00:00:00.000Z,
// title: 'Developer',
// skills: [ 'JS', 'React', 'Laravel' ]
//}

// Бонус 1. Написать функцию глубокого сравнения двух объектов:
const obj1 = { here: { is: "on", other: "3" }, object: "Y" };

const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true;
  }
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  if (keys1 != keys2) {
    return false;
  }

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if(typeof obj1[key] === 'object' && typeof obj2[key] === 'object' ){

    }
  }

};

// console.log(deepEqual(obj1, obj2));

// Бонус 2. Развернуть строку в обратном направлении при помощи методов массивов:

let testString = '123 45'
function reverseStr(str) {
  return str.split("").reverse().join("");;
}

function reverseStr2(str) {
  let reversedString = "";
  str.split("").forEach((el) => {
    reversedString = el + reversedString;
  });
  return reversedString;
}

function reverseStr3(str) {
  return str
    .split("")
    .map((index, arr) => arr[arr.length - 1 - index])
    .join("");
}

console.log(reverseStr2(testString))
