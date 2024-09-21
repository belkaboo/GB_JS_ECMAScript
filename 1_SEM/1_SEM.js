`use strict`
/*
1. Создайте функцию mergeArrays, которая принимает два
массива и возвращает новый массив, содержащий все
элементы из обоих массивов. Используйте spread
оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
2, 3, 4, 5, 6]
*/

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
};

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));



/*
2. Создайте функцию removeDuplicates, которая принимает
любое количество аргументов и возвращает новый
массив, содержащий только уникальные значения.
Используйте rest оператор для сбора всех аргументов в
массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
результат: [1, 2, 3, 4, 5]
*/

const removeDuplicates = (...args) => {
    return Array.from(new Set([...args]));
    //return args.filter((val, index) => args.indexOf(val) === index);
};



console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5, 1, 4, 3, 1, 4, 3,));

/*
1. Напишите функцию getEvenNumbers, которая принимает массив
чисел в качестве аргумента и возвращает новый массив,
содержащий только четные числа.
*/

const getEvenNumbers = (arr) => {
    return arr.filter(val => val % 2 === 0);

}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
*/

const calculateAverage = (args) => {
    const avg = args.reduce((acc, element) => acc + element, 0) / args.length
    return avg;

};

console.log(calculateAverage([0, 1, 2, 3, 4, 5, 6]));


/*
3. Напишите функци capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной.
*/

const capitalizeFirstLetter = (string) => {
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    //return string.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() });
}

console.log(capitalizeFirstLetter("йцу йцу йцу"));



/*
1. Напишите функцию createCalculator, которая принимает начальное
значение и возвращает объект с двумя методами: add и subtract.
Метод add должен увеличивать значение на переданное число, а
метод subtract должен уменьшать значение на переданное число.
Значение должно быть доступно только через методы объекта, а не
напрямую.
*/

const createCalculator = (number) => {
    return {
        add(num) {
            return number + num;
        },

        substract(num) {
            return number - num
        }
    };
}

const newNumber = createCalculator(10);
console.log(newNumber.add(5));
console.log(newNumber.substract(5));



/*
1. Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
*/

function createGreeting(nameForGreet) {
    return function greeting() {
        console.log(`Hello, ${nameForGreet}!`);
    }
}


const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"



/*
 Задача: Напишите функцию createPasswordChecker, которая
принимает допустимую длину пароля в качестве аргумента и
возвращает функцию для проверки введенного пароля.
Возвращаемая функция должна принимать пароль и возвращать
true, если его длина соответствует допустимой, и false в противном
случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат:
false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
*/

const createPasswordChecker = (length) => {
    return function isPasswordValid(password) {
        return password.length < length;
    }

}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true




/*
Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9)
*/

const sumDigits = (num) => {
    if (num < 10) {
        return num;
    }
    return num % 10 + sumDigits(Math.floor(num / 10));
}

console.log(sumDigits(123));
console.log(sumDigits(456789));
