const para = document.querySelector('.error');
console.log(para);

const div= document.querySelector('div.error');
console.log(div);

const paras = document.querySelectorAll('p');
console.log(paras);
console.log(paras[2]);

console.log('==============================================');

paras.forEach(pa => {
    console.log(pa);
});

console.log('==============================================');

const errors = document.querySelectorAll('.error');
console.log(errors);