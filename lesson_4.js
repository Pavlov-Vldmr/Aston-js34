/**
 * 1. Написать ответ - почему массивы в JS являются "неправильными"
 * и совмещают в себе несколько структур данных? Какие ?
 *
 * В "правильных" массивах данные одного типа. Массивы JS могут
 * содержать данные разных типов
 * Массивы наследуются от object, что позволяет вызывать
 * несвойсветвенные "правильным" массивам методы
 *
 * В массивах JS могут отсутствовать определённые индексы
 *  или значение определенных элементов может быть - undefined
 *
 * Массивы JS - стеки, очереди, списки.
 */

// 2. Привязать контекст объекта к функции logger,
// чтобы при вызове `this.item` выводило - some value
// (Привязать через `bind`, `call`, `apply`)

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

const contextBinding = logger.bind(obj);

contextBinding();
logger.call(obj);
logger.apply(obj);
console.log(`******************`)
// 3.1 Массивы

/// - Создайте массив чисел и найдите его сумму.

let arrOfNum = [2, 1, 3, 5, 4];

function sumOfArr(arr) {
  let summ = 0;
  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }
  return summ;
}

console.log("summ of [" + arrOfNum + "] =" + sumOfArr(arrOfNum));
console.log(`******************`)
/// - Создайте массив строк и объедините их в одну строку.

let arrOfString = ['First', ' ', 'thecond', ' ','third.' ];
console.log(arrOfString.join(''))
console.log(`******************`)
/// - Найдите максимальный и минимальный элементы в массиве чисел.

const max = Math.max(...arrOfNum)
const min = Math.min(...arrOfNum)

console.log(`max = ${arrOfNum.sort().slice(-1)}`)
console.log(`min = ${arrOfNum.sort().shift()}`)
console.log(`******************`)
// 3.2 Stack (стек):- Реализуйте стек с использованием массива.

const stack = []

function customStack() {
    this.stack = []

    this.add = (e) => {this.stack.push(e) }
    
    this.del = ()  => {this.stack.pop() ? this.stack : console.log(`stack is empty`)}

    this.isEmpty = () => {this.stack.length > 0 ? 
                          console.log('stack is not empty') : 
                          console.log('stack is empty')}

    this.showAll = () => console.log(this.stack);

    this.showFirst = () => {this.stack[this.stack.length - 1] ?
                            console.log(this.stack[this.stack.length - 1]) :
                            console.log('stack is empty')}
}

// 3.3 Queue (очередь):
///- Реализуйте очередь с использованием массива.



function customQueue() {
    this.queue = []

    this.add = (e) => {this.queue.push(e)}

    this.del = () =>  {this.queue.shift() ? this.queue : console.log(`queue is empty`)}

    this.isEmpty = () => {this.queue.length > 0 ? 
                          console.log('queue is not empty') : 
                          console.log('queue is empty')}

    this.showAll = () => console.log(this.queue);

    this.showFirst = () => {this.queue[this.queue.length - 1] ?
                            console.log(this.queue[this.queue.length - 1]) :
                            console.log('queue is empty')}
}

const cashRegister = new customQueue();

cashRegister.add('Вася') // Петя пришел
cashRegister.add('Катя') // В очередь встала Катя
cashRegister.add('Петя') // И еще подошел Петя
cashRegister.showAll()   // ~ покажем тех кто в очереди ~ [ 'Вася', 'Катя', 'Петя' ]
cashRegister.del()       // Первого в очереди обслужили
cashRegister.showAll()   // ~ покажем тех кто в очереди ~ [ 'Катя', 'Петя' ]

console.log(`******************`)
// Бонус задание: Реализовать полифил (собственную функцию реализующую встроенную в js) метода `bind()`

const person ={ 
    name: 'Vladimir'
}

function persinInfo(phone, email) {
    console.log(`name: ${this.name}, phone: ${phone}, email: ${email}`)
} 

function customBind(fn, context, ...rest) {
    return function(...args){
        const uniqId = Date.now().toString()
        context[uniqId] = fn
        const result =  context[uniqId](...rest.concat(args))
        delete context[uniqId]
        return result
    }
}

customBind(persinInfo, person)('1234',  'v@gmail.com')
customBind(persinInfo, person, '12345' )('v@gmail.com')
customBind(persinInfo, person, '123456', 'v@gmail.com')()
