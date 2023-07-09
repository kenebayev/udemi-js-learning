//Что выведет в консоль код?

console.log(NaN || 2 || undefined); // 2
console.log(NaN && 2 && undefined); // false (на самом деле NaN)
console.log(1 && 2 && 3);  // 3
console.log(!1 && 2 || !3); //false
console.log(25 || null && !3); //25
console.log(NaN || null || !3 || undefined || 5); //5
console.log(NaN || null && !3 && undefined || 5); //5
console.log(5 === 5 && 3 > 1 || 5); //5 (на самом деле true)

//Выполняется ли условие?

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;


if (hamburger === 3 && cola || fries === 3 && nuggets) { //Да
    console.log('Done!')
}

//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) { //Да
    console.log('Done!')
}

//Переменная hamburger задана через let, так как const подразумевает какое-либо начальное значение. С const будет ошибка, можете проверить.
//А без значения там undefined, напоминаю 🙂

//Выполняется ли условие?

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;


if (hamburger && cola || fries === 3 && nuggets) { //Нет, буде false (на самом деле ничего не выведется)
    console.log('Done!')
}