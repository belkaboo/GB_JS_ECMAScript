/*
1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, 
найти минимальное число в массиве, решение задание должно состоять из одной строки
*/
const arr = [1, 5, 7, 9]

console.log(Math.min(...arr));


/*
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами:
increment и decrement. Метод increment должен увеличивать значение счетчика на 1, 
а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/


const createCounter = () => {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        }
    };
}

const newCounter = createCounter();
console.log(newCounter.increment());
console.log(newCounter.decrement());


/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM
и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
*/


const findElementByClass = (element, className) => {
    if (element.classList && element.classList.contains(className)) {
        return element;
    }

    for (let child of element.children) {
        const found = findElementByClass(child, className);
        if (found) return found;
    }

    return 'элемент не найден';
}


const rootElement = document.getElementById("root");
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
