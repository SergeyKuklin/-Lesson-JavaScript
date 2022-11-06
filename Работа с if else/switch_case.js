// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее. Решите
// задачу через switch-case.

let num = 3;

switch (num) {
    case 1:
        console.log('Зима');
        break;
    
    case 2:
        console.log('Весна');
        break;

    case 3:
        console.log('Лето');
        break;

    case value:
        console.log('Осень');
        break;

    default:
        break;
}