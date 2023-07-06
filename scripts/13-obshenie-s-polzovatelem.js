"use strict";

alert('Привет!');

// Спросить о чем то, Булевое значение true/false
const result = confirm('Are You here?');
console.log(result);

// Спросить и получить ответ. Ответ записывается строчным.
const answer = prompt("Сколько вам лет?", "");
console.log(answer);
console.log(typeof (answer));

// Вся информация, которая приходит от пользователя — в формате строки string
// С помощью «+» можно изменить на number

let stringOrNumber = prompt("Сколько вам лет?", "");
console.log(stringOrNumber + 5);

let numberOrString = +prompt("Так сколько лет?", "");
console.log(numberOrString + 5);


const arrayOfAnswers = [];
arrayOfAnswers[0] = prompt("Ваше имя?", "");
arrayOfAnswers[1] = prompt("Ваша фамилия?", "");
arrayOfAnswers[2] = +prompt("Сколько вам лет?", "");

console.log("Вас зовут " + arrayOfAnswers[0] + " " + arrayOfAnswers[1] + " и вам исполнилось " + arrayOfAnswers[2] + " года.");

//Выведем это всё на страницу с помощью document.write

document.write("Вас зовут " + arrayOfAnswers[0] + " " + arrayOfAnswers[1] + " и вам исполнилось " + arrayOfAnswers[2] + " года.");

//Напоминание: массив — это частный случай типа object
console.log(typeof (arrayOfAnswers));

//Официально признанная ошибка: null помечается как object, хотя это отдельный тип
console.log(typeof (null));
