// 1.

let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

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

// result =  abc

// 2.

function doSmth() {
  return Promise.resolve("123");
}

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

console.log("***********");
/**
 * 1 123
 * 2 123
 * 3 321
 * 4 undefined
 */

// 3. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

arr = [10, 12, 15, 21];

function indexPrintDelay(arr) {
  arr.map((currElement, index) =>
    setTimeout(() => {
      console.log(index);
    }, 3000 * index)
  );
}

indexPrintDelay(arr);

console.log("***********");

/**
 * 4. Прочитать про `Top Level Await` (можно ли использовать await вне функции async)
 *
 * await верхнего уровня позволяет модульной системе заботиться о разрешении промисов и их взаимодействии между собой.
 * Глобальный await работает только с ES модулями. Используемые зависимости должны быть указаны явно.
 *
 * await // работает только внутри async–функций
 * https://learn.javascript.ru/async-await
 */

// БОНУС ЗАДАНИЕ
function fetchUrl(url) {
  let attemptsLeft = 0;

  return new Promise((resolve, reject) => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network problem");
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        attemptsLeft++;
        if (attemptsLeft < 5) {
          console.log(`Attempts: ${attemptsLeft}`);
          fetchData();
        } else { reject(error) }
      }
    };

    fetchData();
  });
}

fetchUrl("https://google/com&#39")
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error); 
  });
