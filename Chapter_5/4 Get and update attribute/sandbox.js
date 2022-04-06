const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://github.com/');

link.innerText = 'GitHub';


const messgage = document.querySelector('p');

console.log(messgage.getAttribute('class'));

messgage.setAttribute('class', 'success');

messgage.setAttribute('style', 'color : Red;');