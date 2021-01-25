function first () {
    setTimeout(function() {
        console.log(1);
    }, 1000);                   //добавили задержку в 1000мс
}

function secoud() {
    console.log(2);
}

first();
secoud();

//Callbak function

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!');         //анонимная функция
// });

function done() {
    console.log('Я прошел этот урок!'); 
}

learnJS('JavaScript', done);