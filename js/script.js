const box = document.getElementById('box');

console.log(box);

//Два варианта как получить определенный элемент по тэгам

//Первый
//const btns = document.getElementsByTagName('button');   //здесь мы получили псевдомассив
// console.log(btns[1]);

//Второй
const btns = document.getElementsByTagName('button')[1];   //получили определенную кнопку по ее индексу  
console.log(btns);


//Ищем элемент по классу

 const circles = document.getElementsByClassName('circle');
 console.log(circles);

const hearts = document.querySelectorAll('.heart');

console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

//Ищем первый подходящий под селектор элемент 
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);