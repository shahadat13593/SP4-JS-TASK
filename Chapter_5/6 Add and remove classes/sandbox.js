 
const content = document.querySelector('p');

console.log(content.classList);

content.classList.remove('success');
content.classList.add('success');



const para = document.querySelectorAll('p')

para.forEach(p => {
 if(p.textContent.includes('error')){
     p.classList.add('error');
 }

 else{

    p.classList.add("success");
 }
});


const title = document.querySelector('.title');

title.classList.toggle('test')
title.classList.toggle('test')