 //Делегирование полезный инструмент для работы с DOM деревом, отлично подходить когда есть много 
 //элементов с одинаковыми обработчиками (при динамическом изменении так же будет применяться делегирование)

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.add('red'));
// console.log(btns[0].classList.remote('blue'));
// console.log(btns[0].classList.toggle('blue'));

btns[0].addEventListener('click',() => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classLost.add('red');
    // }  else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});

//Назначаем обработчик события
wrapper.addEventListener('click', (event) => {
    //Делегируем событие с родителя на потомков
    // if(event.target && event.target.classList.contains('blue')) {
    // if(event.target && event.target.tagName == 'BUTTON') {
    if(event.target && event.target.matches ("button.red")) {
        console.log('Hello');
    }
});

//Попробуем через forEach
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);