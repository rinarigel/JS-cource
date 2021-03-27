const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// };

//Можем назначать несколько событий на кнопку 
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// btn.addEventListener('click', (event) => {
    // // console.log(event.target);
    // event.target.remove();
    // // console.log('Hover');
// });

// const deleteElement = (event) => {
//     console.log(event.target);
// };
let i = 0;
const deleteElement = (event) => {
    // console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

//Всплытие событий это когда элемент сначала срабатывает на вложенном элементе, 
//потом на родителе и так выше и выше

//Отменяем стандартное поведение браузера 
btns.forEach(btn => {
    btn.addEventListener('click',deleteElement, {once:true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});