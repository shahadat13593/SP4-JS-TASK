// booleans & comarisons
console.log(true, false, "true", "false");

console.log("----------------------------");
// methods can return boleans
let email = 'shahadat15-13593@diu.edu.bd';
let result = email.includes('@');
console.log(result);

result = email.includes('7');
console.log(result);


let names = ['Shahadat', 'Raiyan', 'kamal'];
result = names.includes('Shahadat');
console.log(result);


// comarison operators
console.log("----------------------------");

let age = 25 ;
console.log(age == 25);
console.log(age >  30);
console.log(age <  30);
console.log(age !=  30);
console.log(age <=  25);
console.log(age >=  25);


console.log("----------------------------");

let name1 = 'shahadat';
console.log(name1 == 'shahadat');
console.log(name1 == 'Shahadat');
console.log(name1 < 'shahadathossain');
console.log(name1 > 'Shahadat');