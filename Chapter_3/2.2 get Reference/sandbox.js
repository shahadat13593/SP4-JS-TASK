// Get a reference to the 'ul'

const ul = document.querySelector('.people');

const people =['shahadat', 'raiyan', 'hossain', 'korim', 'kamal'];

let html = ``;

people.forEach(function(person){
    html += `<li style="color:red">${person}</li>`;

});

console.log(html);

ul.innerHTML = html;