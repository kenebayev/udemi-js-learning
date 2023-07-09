"use strickt"

//Логические и или, не.
const hamburger = true;
const fries = 0;

if (hamburger && fries) {
    console.log('Я сыт!');
} else {
    console.log('Я голодный...')
};

// Результат логической операции логическое булёвое значение правда или лож

console.log((hamburger && fries));

//В ЯваСкрипте существует динамическая типизация. Число может стать строкой, строка числом, а что угодно — в булёвое значение.

//Пять ложных сущностей: ноль, пустая строка, null, undefined, NaN.
//Остальное всегда true.

const hamburger = 3;
const fries = 1;
const cola = 0;

//когда интерпретатор доходит до первой лжи, вычисления прекращаются
//когда при исполнении обнаружится, что колы нет, то всё...
if (hamburger === 3 && cola === 1 && fries) {
    console.log('Мы сытые!');
} else {
    console.log('Ушли в другое кафе...')
};

//Оператор && возвращает либо лож или ноль, либо значение последнего аргумента

console.log(1 && 3); //вернёт последнюю 3
console.log(5 && 10 && 2); //вернёт последнюю 2
console.log(1 && 'string'); //вернёт последнюю string

const hamburger = 3;
const fries = 0;
const cola = 0;

//Оператор или || возвращает true, если хотя бы один из агрументов верный.

if (hamburger || cola || fries) {
    console.log('Мы сытые!');
} else {
    console.log('Ушли в другое кафе...')
};

//Если все аргументы ложные, оператор ИЛИ возвращает значение последнего аргумента.
const hamburger = 0;
const fries = 0;
const cola = -5;

console.log(hamburger || cola || fries);

//Это полезно, когда хотя бы одно условие правдиво.

let johnReport, alexReport, samReport, mariaReport = "Done";

console.log(johnReport || alexReport || samReport || mariaReport);

//Смешиваем логические операции. Нам нужны 3 гамбургера с 2-мя колами или 3 картошки с наггетсами.

const hamburger = 0;
const cola = 1;
const fries = 3;
const nuggets = 0;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Ура, всё есть!');
} else {
    console.log('Уходим в другое кафе');
}

//Оператор НЕ

console.log(!1);