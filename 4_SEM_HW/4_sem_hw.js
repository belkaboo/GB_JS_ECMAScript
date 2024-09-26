/*
""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента
и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.
Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера.
Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json()
и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе
в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения.
Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

*Подсказка *


saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения.
Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json
и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify().
Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени
*/


// для примера взял сервис Free Fake REST API for Placeholder JSON Data https://dummyjson.com/

const urlApi = 'https://dummyjson.com/users/';


const user = {
    firstName: 'John',
    lastName: 'Smith',
    age: 30,
    email: 'john@example.com'
};


const getUserData = (id) => {
    return fetch(`${urlApi}${id}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error(`Пользователь с ID ${id} не существует`));
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            return Promise.reject(error);
        });
};



getUserData(69)
    .then(user => console.log(user))
    .catch(error => console.error(error.message));

getUserData(400) //для вызова ошибки
    .then(user => console.log(user))
    .catch(error => console.error(error.message));



const saveUserData = (userData) => {
    return fetch(`${urlApi}/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
        .then(response => {
            if (!response.ok) {
                return Promise.reject(new Error('Ошибка при добавлении пользователя'));
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(error => {
            return Promise.reject(error);
        });
};

saveUserData(user)
    .then(() => {
        console.log('User data saved successfully');
    })
    .catch(error => {
        console.log(error.message);
    });



/*
""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента
и время задержки (в миллисекундах) в качестве аргументов.
Функция должна изменить стиль элемента через указанное время.
*/

// Пример использования функции

function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        element.style.backgroundColor = 'lightblue';
        element.style.fontSize = '40px';

    }, delay);
}


changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

