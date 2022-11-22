// browser.runtime.onMessage.addListener(message => {
//     console.log("background: onMessage", message);
  
//     // Add this line:
//     return Promise.resolve("Dummy response to keep the console quiet");
//   });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    hamburger.style.display = 'none';
});

close.addEventListener('click' , () => {
    menu.classList.remove('active');
    hamburger.style.display = 'flex';
});



