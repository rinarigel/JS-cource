let randomArray = [
    'смоки', 'рэд', 'партизан', 'столовка', 'зира',
    'лапшичная', 'хеппи', 'пиросмани', 'шеймус',
    'рынок', 'пельменная', 'покеман', 'суфра',
    'крапива', ' хуанд', 'фастфуд', 'китайцы'
];

let rand = randomArray[Math.floor(Math.random() * randomArray.length)];

console.log(rand);
