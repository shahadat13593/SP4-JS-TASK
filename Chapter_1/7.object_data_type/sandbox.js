let ninjas = ['Shahadat','raiyan', 'kamal'];

ninjas[1] = 'Hattori Hanzo';
console.log(ninjas[1]);

let ages = [20, 25, 30 ,35];
console.log(ages[2])

let random = ['shaun', 'crystal', 30, 20];
console.log(random);


console.log(random.length);

// array methods

let ninjas_name = ninjas.join(", ");
console.log(ninjas_name);

let index = ninjas.indexOf('Shahadat');
console.log(index);


let arry = ninjas.concat(['ken', 'crystal']);
console.log(arry);

arry = ninjas.push('hi');
console.log(arry);

let arry2 = ninjas.pop();
console.log(arry2);




