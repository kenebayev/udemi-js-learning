"use strict"

// В JavaScript есть три вида цикла

let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

let num = 50;

// Второй вариант
do {
    console.log(num);
    num++;
} while (num < 55);

// Третий вариант, наиболее популярный

for (let i = 1; i < 8; i++) {
    console.log(i);
}

let num = 50;

for (let i = 1; i < 8; i++) {
    console.log(num);
    num++;
}

// Если цикл надо прервать по условию, то можно прервать с помощью break 

for (let i = 1; i < 10; i++) {
    if (i === 6) { // прервёт шестой цикл
        break;
    }
    console.log(i);
}

//Если надо пропустить цикл по какому-то условию использут continue
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; // пропустит шестой цикл
    }
    console.log(i);
}

for (let i = 20; i > 10; i--) {
    console.log(i);
    if (i === 13) {
        break;
    }
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let i = 2;

while (i <= 16) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++;
}
