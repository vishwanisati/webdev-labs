/*
    Hints:
    1. Attach click event handlers to all four of the
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag
       based on the button that was clicked.
*/

const makedesert = (ev) => {
    document.body.classList.add("desert");
    document.getElementById('button').classList.add('desert');
    document.getElementById('content').classList.add('desert');
    document.getElementsByClassName('nav').classList.add('desert');
};

const makeocean = (ev) => {
  document.querySelector('header').style.backgroundColor = '#434a6c';
  document.querySelector('header').style.color = 'white';
  document.querySelector('header').style.fontFamily = 'Montserrat'
  document.querySelector('header').style.borderBottom = 'solid 1px #434a6c';
  document.querySelector('button').style.color = '#434a6c';
  document.querySelector('content').style.color = '#434a6c';
  document.querySelector('content').style.backgroundColor = '#99cccc';
  document.querySelector('content').style.lineHeight = '1.6em';
  document.querySelector('nav').style.borderBottom = 'solid 1px #434a6c';

  /*  document.querySelector('header').classList.add('.ocean header');
    document.querySelector('button').classList.add('.ocean button');
    document.querySelector('content').classList.add('.ocean .content');
    document.querySelector('nav').classList.add('.ocean nav');  */
};
const makehighcontrast = (ev) => {
    document.querySelector('header').classList.add('high-contrast header');
    document.querySelector('button').classList.add('high-contrast button');
    document.querySelector('content').classList.add('high-contrast content');
    document.querySelector('nav').classList.add('high-contrast nav');
};

document.querySelector("#default").addEventListener('click', makedefault);
document.querySelector("#desert").addEventListener('click', makedesert);
document.querySelector("#ocean").addEventListener('click', makeocean);
document.querySelector("#high-contrast").addEventListener('click', makehighcontrast);
