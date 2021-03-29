// touchstart - Коснулись экрана
// touchend - Палец убрали
// touchmove - Двигаем пальцем

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.hangedTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });

//touches - Все пальцы которые сейчас взаимодействуют с экраном ("Коснуты" экрана)
//targetTouches - Список пальцев которые взаиможействуют с элементом
//hangedTouches - Список пальцев, которые учавствуют в текущем событии. Если например это событие touchend, 
//то список будет содержать палец который был убран (Даже если остальные 4 пальца до сих пор на экране).


});