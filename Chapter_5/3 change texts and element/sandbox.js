// change iner text
const para = document.querySelector('p');

console.log(para.innerText);
para.innerText  += "Shahadat like's codding";
console.log(para.innerText);


const paras = document.querySelectorAll('p');

paras.forEach(pa => {
    console.log(para.innerText);
    pa.innerText += '. added new text. ';
});


console.log('=============================================== \n\n\n')

// change html

const content = document.querySelector('.content');

console.log(content.innerHTML)

content.innerHTML += '<h2> this is new tag <h2>'




const people = ['shahadat', 'hossain', 'raiyan'];
people.forEach( person=> {
    content.innerHTML += `<p> ${person}</p>`
});

