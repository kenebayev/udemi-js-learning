"use strict";

// Конкатенация — операция склеивания объектов линейной структуры. Конкатенация числа со строкой вернёт строку string.

console.log('arr' + " — это объект.");
console.log("При сложении цифры " + 3 + " со строкой — получается строка.");

// Если перед строкой поставить унарный плюс +, то строка превратиться в число.

// Унарный плюс это плюс, который стоит перед элементом, впритык без пробела.

console.log(4 + +'4');

// Но результат может быть непредсказуемым, если строка не является символом цифры.

console.log(15 + +'три');

console.log()


let a = 10,
    b = 10;

// Оператор инкремент «++» увеличивает на 1.
a++;

// Оператор декремент «--» уменьшает на 1.
b--;

console.log(a);
console.log(b);

// Префиксная форма  сразу меняет на 1.
// Постфиксная форма меняет после использования переменной.
// В нашем примере мы запишем постфиксом инкремент и декремент.
// В консоли должно отобратится сначала текущее значение 11 и 9, а после они изменятся.
console.log("Используем сначала постфиксную форму декремента и инкремента. ")
console.log("Вывестись на экран должны цифры без изменения. ")

console.log(a++);
console.log(b--);

// Проверим еще раз, значение должны быть теперь 12 и 8
console.log("А теперь они должны измениться");
console.log(a);
console.log(b);

// Префиксная форма сразу изменяет значение
console.log("Теперь префикс сразу изменит значение на единицу");
console.log(++a);
console.log(--b);

// Инкремент и декремент активно используется в циклах. А пока поехали дальше.

// Знак процента «%» возвращает остаток от деления первого числа на второе

console.log(9 % 2);
console.log(23 % 5);

// Знак равно «=» называется присваиванием.
// Двойной знак равно «==» называется сравнением. Возвращается булевое значение

console.log(2 * 5 == 8); //false
console.log(23 % 5 == 3); //true
console.log(2 + ' яблока' == "2 яблока"); //true
console.log("Яблоко" == "Овощ"); //false

// Сравнить можно и число со строкой. Если значения одинаковые, то будет истина

console.log(2 * 2 == "4"); //true

// Тройной знак равенства «===» это строгое сравнение только однотипных данных.
// Смешать строки и числа не получится

console.log(2 * 2 === "4"); //false
console.log(2 * 2 === 4); //true

// Оператор «и» && (два амперсанда), когда связанные им операции должны быть истиной
// Оператор «или» ||, когда одна из них истина

const isChecked = true,
    isClosed = true,
    isOpen = false,
    isEmpty = false;

console.log(isChecked && isClosed); //true
console.log(isChecked && isOpen); //false
console.log(isClosed || isOpen); //true
console.log(isOpen || isEmpty); //false

// Оператор отрицания «!» меняет значение на противоположное

console.log(isChecked && !isOpen); //true
console.log(isOpen || !isEmpty); // true
console.log(2 != 2); //false

// Приоритеты операторов можно посмотреть в табличке
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table

// Побитовые операции просто для справки. Они требуют глубокого изучения программирования, и на практике почти не встречаются https://learn.javascript.ru/bitwise-operators 