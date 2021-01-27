const arr = [1,2,3,6,8, 22, 10, 6, 7, 77];

// arr.pop();                 //удалить последний элемент
// arr.push(10);              //добавить последний элемент

//Сортировка
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {    //for of работает только с массивоподобными сущностями
//     console.log(value);
// }

//Перебор массива
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//Формируем массив с помощью строки
// const str = prompt('','');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));