// const user = prompt('What is your name?','');
// alert (`Hello, ${user}`);

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log('Ok');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Too Much');
// } else {
//     console.log('Ok');
// }
// const num = 49;

// switch (num) {
//     case 49:
//         console.log('No');
//         break;
//     case 100:
//         console.log('No');
//         break;
//     case 50:
//         console.log('True');
//         break;
//     default:
//         console.log('Not today');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <55);

// let num = 50;

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }

let num = 50;

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        // break;
        continue;
    }
    console.log(i);
}