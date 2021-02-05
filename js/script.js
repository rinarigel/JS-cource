const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box);

//Меняем свойства объекта
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i ++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('I was here');

div.classList.add('black');

// document.body.append(div);
wrapper.appendChild(div);

document.querySelector('.wrapper').append(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0],hearts[0]);

div.innerHTML = '<h1>Hello</h1>';             //так можно сломать верстку

// div.textContent = 'Hello';

div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');