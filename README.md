# Aston Интенсив JS 34

## Занятие  1 - git, github, gitFlow

1. Создайте новый репозиторий на Github.
2. Склонируйте репозиторий на ваш компьютер.
3. Создайте новый файл `app.js` и напишите в нем простую программу на JavaScript, например, функцию для вывода `Привет, мир!` в консоль.
4. Добавьте и закоммитьте изменения.
5. Создайте новую ветку `feature` и внесите изменения в вашу программу, например, добавьте новую функцию или измените текст.
6. Закоммитьте изменения и отправьте их на Github.
7. Создайте pull request для вливания изменений из ветки `feature` в основную ветку.
8. Обновите локальный репозиторий, чтобы получить изменения из основной ветки.
9. Попробуйте изменить программу еще раз, закоммитьте и отправьте изменения на Github.

## Занятие 2 - Сети, JS (Типы данных, приведение типов)

Для выполнения задания создаем новую ветку в вашем репозитории с именованием - `homeWork_01`, после выполнения д/з - прикрепляем ссылку к сдаче задания.

1. Подробно прочитать про метод запроса `OPTIONS` - и кратко его описать, когда вызывается, где используется, что передает и принимает. 
2. Прочитать и описать ключевые особенности "HTTP" Версии 3.0
3. Прочитать про способы отмены запроса, включая объект `AbortController`
3. Написать по 2 примера создания примитивных значений (если есть несколько способов - использовать) `string, number, boolean, null, undefined, symbol, bigInt`
4. Почему, если обратиться к переменным созданным через `let`, `const` до их объявления - мы получаем `ReferenceError`? 
5. Решить: 

```
const res = "B" + "a" + (1 - "hello");
console.log(res); //
```

```
const res2 = (true && 3) + "d";
console.log(res2); //
```

```
const res3 = Boolean(true && 3) + "d";
console.log(res3); //
```

## Занятие 3 - Объекты и функции

Для выполнения задания создаем новую ветку в вашем репозитории с именованием - `homeWork_02`, после выполнения д/з - прикрепляем ссылку к сдаче задания.

1. Создать объект `counter` всеми возможными способами;

2. Скопировать объект `counter` всеми возможными способами;

3. Создать функцию `makeCounter` всеми описанными и возможными способами;

4. прочитать и описать работу глобальной функции `structuredClone()`

Бонус
1. Написать функцию глубокого сравнения двух объектов:

```
const obj1 = { here: { is:
"on", other: "3" }, object: "Y" };
```

```
const obj2 = { here: { is:
"on", other: "2" }, object: "Y" };
```

```
const deepEqual =
(obj1, obj2) => {};
```



Бонус 
2. Развернуть строку в обратном направлении при помощи методов массивов:

```
function reverseStr(str) {
  return …
}
```

## Занятие 4 - Контекст и структуры данных

Для выполнения задания создаем новую ветку в вашем репозитории с именованием - `homeWork_03`, после выполнения д/з - прикрепляем ссылку к сдаче задания

1. Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
2. Привязать контекст объекта к функции logger, чтобы при вызове `this.item` выводило - some value (Привязать через `bind`, `call`, `apply`)

```
function logger() {
    console.log(`I output only external context: ${this.item}`);
}
```

```
const obj = { item: "some value" };
```

3.1 Массивы:

- Создайте массив чисел и найдите его сумму.
- Создайте массив строк и объедините их в одну строку.
- Найдите максимальный и минимальный элементы в массиве чисел.

3.2 Stack (стек):

- Реализуйте стек с использованием массива.

3.3 Queue (очередь):

- Реализуйте очередь с использованием массива.
- Имитируйте работу очереди на примере ожидания на кассе.

Бонус задание: Реализовать полифил (собственную функцию реализующую встроенную в js) метода `bind()`

## Занятие 5 - Сложность алгоритмов, ООП

1. Какие бывают алгоритмы сортировок ? 
2. Прочитать про "Операторы и выражения, циклы в JS"
3. Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.
4. Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.

БОНУС: 
1. Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
```
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]
```

```
const firstSum = (arr, total) => {
      //Решение
}
```

```
firstSum(arr,total)
```

2. Какая сложность у вашего алгоритма ?

## Занятие 6 - Ассинхронность в JS (Promise && EventLoop)

Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли): 

1. Task
```
let promiseTwo = new Promise((resolve, reject) => {
   resolve("a");
});
```

```
promiseTwo
.then((res) => {
   return res + "b";
})
.then((res) => {
   return res + "с";
})
.finally((res) => {
   return res + "!!!!!!!";
})
.catch((res) => {
   return res + "d";
})
.then((res) => {
   console.log(res);
});
```

2. Task
```
function doSmth() {
   return Promise.resolve("123");
}
```

```
doSmth()
.then(function (a) {
   console.log("1", a); //
   return a;
})
.then(function (b) {
   console.log("2", b);
   return Promise.reject("321");
})
.catch(function (err) {
   console.log("3", err);
})
.then(function (c) {
   console.log("4", c);
return c;
});
```

3. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
Входные данные: [10, 12, 15, 21]

4. Прочитать про `Top Level Await` (можно ли использовать await вне функции async)

БОНУС ЗАДАНИЕ 
/* Необходимо реализовать функцию `fetchUrl`, которая будет использоваться следующим образом.
Внутри `fetchUrl` можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
`fetchUrl('https://google/com&#39;)`
`.then(...)`
`.catch(...)` // сatch должен сработать только после 5 неудачных попыток
получить содержимое страницы внутри `fetchUrl`

## Задание 7 - (DOM / BOM)

1. Почитать про принципы программирования KISS, DRY, YAGNI + почитать про "Антипаттерны" Чистого кода
2. Прочитать про способы хранения `LocalStorage`, `SessionStorage` и `Cookie`
3. HTML / CSS - Базовая структура html документа, БЭМ методология
4. Почитать про паттерны функционального программирования + посмотреть примеры использования
5. Способы позиционирования контента на странице
6. Веса селекторов
