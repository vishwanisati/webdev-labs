const makeBigger = (ev) => {
   document.querySelector('div.content').style.fontSize =  "larger";
   document.querySelector('header').style.fontSize =  "larger";
};

const makeSmaller = (ev) => {
  document.querySelector('div.content').style.fontSize =  "smaller";
  document.querySelector('header').style.fontSize = "smaller";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);
