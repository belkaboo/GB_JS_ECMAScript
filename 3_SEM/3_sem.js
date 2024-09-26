/*
Напишите функцию getPrototypeChain(obj), которая будет
возвращать цепочку прототипов для заданного объекта
obj. Функция должна вернуть массив прототипов, начиная
от самого объекта и заканчивая глобальным объектом
Object.prototype.
*/

//todo

const getPrototypeChain = (obj) => {
    const currentObject = obj;
    let result = [];
    while (currentObject !== null) {
        result.push(currentObject);
        currentObject = Object.getPrototypeOf(currentObject);
    }

    return result;
}

const obg = {};
const prototypeChain = getPrototypeChain(obj);
console.log((prototypeChain));


/*
Создайте класс Animal, который будет представлять животное. У
класса Animal должны быть следующие свойства и методы:
● Свойство name (строка) - имя животного.
● Метод speak() - выводит в консоль звук, издаваемый животным.
Создайте подкласс Dog, который наследует класс Animal. Для
подкласса Dog добавьте дополнительное свойство и метод:
● Свойство breed (строка) - порода собаки.
● Метод fetch() - выводит в консоль сообщение "Собака [name]
принесла мяч.".
*/

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('blablabla');
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    fetch() {
        console.log(`Собака ${this.name} принесла мяч.`);
    }
}

const animal = new Animal('Animal');
const dog1 = new Dog('Bobik', 'Dvornyaga');
dog1.speak();
console.log(dog1.breed);
dog1.fetch();




/*
Создайте класс Product, который будет представлять товар в магазине.
У товара должны быть следующие свойства:
• name (строка) - имя товара.
• price (число) - цена товара за одну единицу.
Создайте класс ShoppingCart, представляющий корзину интернет-магазина.
Конструктор класса ShoppingCart должен принимать два параметра:
• customerName (строка) - имя покупателя.
(число)
• initialTotalCost (число) - |
(может быть равна 0, если корзина пуста).
начальная общая СТОИМОСТЬ заказа может быть равна 0, корзина пуста
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor(costumerName, initialTotalCost = 0) {
        this.costumerName = costumerName;
        this.initialTotalCost = initialTotalCost;
    }


    addItem(product, quantity = 1) {


    };
    getCurretnTotalCoast() {

    }

    checkout() {
        console.log(`Заказ оформлен для ${this.costumerName}. Общая стоимость заказа ${this.getCurretnTotalCoast()}рублей. Спасибо за покупку`);
    }
}












