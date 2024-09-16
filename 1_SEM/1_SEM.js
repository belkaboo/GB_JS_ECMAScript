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
    return arr.filter((val) => val % 2 === 0);

}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

/*
2. Задача: Напишите функцию calculateAverage, которая принимает
массив чисел в качестве аргумента и возвращает среднее значение
этих чисел.
*/

const calculateAverage = (args) => {



    let avg = args.reduce((acc, element) => acc + element, 0) / args.lenght;
    return avg;

};

console.log(calculateAverage([0, 1, 2, 3, 4, 5, 6]));


/*
3. Напишите функци capitalizeFirstLetter, которая принимает строку в
качестве аргумента и возвращает новую строку, в которой первая
буква каждого слова является заглавной.
*/

const capitalizeFirstLetter = (string) => {
    return string.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() });
}

console.log(capitalizeFirstLetter(""));

