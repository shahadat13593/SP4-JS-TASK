// object literals

let user = {
    name : 'Shahadat', 
    age: 19,
    email: "shahadat15-13593@diu.ed.bd",
    location: 'Bnagladesh',
    blog: ['why mac & cheese rules', '10 things to make with marmite']

}; 

console.log(user);
// access different property
console.log(user.name);


// update property

user.age = 21;
console.log(user.age);

// another way to access different property
console.log(user['name']);

// another way to update property
user['name'] = 'raiyan';
console.log(user['name']);


// another way to access different property
const key = 'name';
console.log(user[key]);


console.log(typeof user);

