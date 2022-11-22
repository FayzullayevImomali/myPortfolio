// browser.runtime.onMessage.addListener(message => {
//     console.log("background: onMessage", message);
  
//     // Add this line:
//     return Promise.resolve("Dummy response to keep the console quiet");
//   });
'use strict';
const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.close'),
      counter = document.querySelectorAll('.progressbar__container-item-percent'),
      lines = document.querySelectorAll('.rating__line-progress');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
});

close.addEventListener('click' , () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});

counter.forEach( (items , index) => {
    lines[index].style.width = items.innerHTML;
});





