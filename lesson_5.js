/**
 *  1. Какие бывают алгоритмы сортировок?
 * 
 * = Три самых популярных
 * - Сортировка пузырьком O(n^{2}) 
 * - Сортировка выбором O(n^{2}) 
 * - Быстрая сортировка O(n^{2}) 
 *   https://ru.hexlet.io/courses/basic-algorithms/lessons/sorting/theory_unit
 * 
 *   https://medium.com/@aristela.marku/sorting-algorithms-in-javascript-b8a79abfa6a2
 */

// 3.

const person1 = new Object()
person1.name = 'Petr'
person1.phone = 1234

const person = {
    name: 'Vladimir',
    phone: 12345,
    logInfo() {return console.log(`name: ${this.name}, phone: ${this.phone}`)}   
}

const person2 = Object.create(person)
person2.name = 'Olga'
person2.phone = '999'

person.logInfo()
person2.logInfo()
console.log("*****************")
// 4.Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

class PersonThree {
    constructor(name) {
      this.name = name
    }
    setName(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
    getName() {
        return this.name;
    }
  }

const person3 = new PersonThree('John')
person3.setName('Max')
console.log(person3.getName())

class Person extends PersonThree {
    log() {console.log(`extends: ${this.name}`)}
}

const person4 = new Person('Sergey')
person4.log()

console.log("*****************")

// Написать функцию, которая вернет массив с первой парой чисел, 
// сумма которых равна total:

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = [1];

total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    if(arr.length <=1 ){ 
        return 'arr length < 1 !'
    }
    const result = []
    for(let i = 0; i< arr.length - 1; i++){
        for(let j = i+1; j<arr.length; j++){
            if(arr[i] + arr[j] === total){
                result.push(arr[i])
                result.push(arr[j])
                return result
            }

        }
    }
    return result
}
firstSum(arr,total)   //[4, 9]
console.log(firstSum(arr,total))
// O(N^2)