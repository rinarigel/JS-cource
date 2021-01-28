// let str = 'some';
// let strObj = new String(str);

// console.log(typeof (str)); //string
// console.log(typeof (strObj)); //object

// console.dir ([1,2,3]);

// const soldier = {
//     health:400,
//     armor:100
// };

// const john = {
//     health:100,
// };

// john.__proto__ = soldier;

// console.log(john.armor);

let randomArray = [
    'смоки','рэд', 'партизан','столовка','зира', 
    'лапшичная','хеппи','пиросмани', 'шеймус',
    'рынок', 'пельменная','покеман', 'суфра',
    'крапива', ' хуанд','фастфуд','китайцы'
 ];
 
let rand = randomArray[Math.floor(Math.random() * randomArray.length)];

console.log(rand);


