// let x = 5;
// alert(x++); //будет выведено 5, т.к. x++ это постфикс 

// console.log([] + false - null + true); //NaN, пустые массивы = пустая строка

// let y = 1; let x = y = 2; alert(x);  //2

// console.log([] + 1 + 2);                //12 - строка

// alert('1'[0]);                             //'1' т к обращаемся к нулевому символу

// console.log(2 && 1 && null && 0 && undefined); //null - ложь. И - запинается на лжи, ИЛИ - запинается на true

// console.log(!!(1 && 2) === (1 && 2));               //false т к двойное НЕ (!!) превращает в boolean

// alert(null || 2 && 3 || 4);                             // console.log(2 && 3) == 3, общий вывод = 3


// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);                                    //false т к это разные хранилища данных

// alert( +'Infinity');                                        //Infinity - тип число

// console.log('Eжик' > 'яблоко');                                 //false, нужно смотреть табличку юникода

// console.log(0 || '' || 2 || undefined || true || false);            //споткнулись на правде, на 2