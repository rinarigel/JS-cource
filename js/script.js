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

// let num = 50;

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// Автоматизируем процесс задачи вопросов пользователю
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

// Вариант с алертами пользователю
// if (numberOfFilms <10) {
//     alert ('Просмотрено достаточно мало фильмов');
// } else if (numberOfFilms > 10 && numberOfFilms < 50) {
//     alert ('Вы классический зритель');
// } else if (numberOfFilms > 50) {
//     alert ('Вы киноман-любитель');
// } else {
//     alert ('Произошла ошибка');
// }

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

}

// Вариант с выводами в консоль
if (personalMovieDB.count <10) {
    console.log('Просмотрено достаточно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 50) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 50) {
    console.log('Вы киноман-любитель');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);