// To string

console.log(typeof(String(null)));
console.log(typeof(String(4)));

console.log(typeof(null + ''));

const num = 5;

console.log('https://example.com/test/' + num);

const fontSize = 26 + 'px';

//To number
console.log(typeof(Number(null)));
console.log(typeof(Number(+'5')));
console.log(typeof(parseInt('guyg','5')));

//To boolean

let swicher = null;

if (swicher) {
    console.log('Working...');
}
console.log(typeof(Boolean(4)));
console.log(typeof(Boolean(!'44444')));

