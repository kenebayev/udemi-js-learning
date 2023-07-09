"use strict";

if (4 == 4) {
    console.log('Ok!');
} else {
    console.log('Error');
};

//Содержимое всегда преобразовывается в булиновое значение true или false

const num = 50;

if (num < 49) {
    console.log("Меньше 49");
} else if (num > 100) {
    console.log('Больше 100');
} else {
    console.log('Ok!');
}

//Тернарный оператор

(num === 50) ? console.log('В точку!') : console.log('Error')

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
        console.log('Мимо');
        break;
    case 50:
        console.log('GOOOD!');
        break;
    default:
        console.log('Не в этот раз...');
        break;
}