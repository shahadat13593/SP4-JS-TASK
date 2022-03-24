// type conversion

let score = '100';
console.log(typeof score);
score = Number(score);

console.log(score + 1);
console.log(typeof score);

console.log('----------------------------');

let result = Number('hello');
console.log(result);

let message = String(50);
console.log(message, typeof message);


console.log('----------------------------');


result = Boolean(100); // positive and negetive number are false 
console.log(result, typeof result);



result = Boolean(0); // 0 is flase
console.log(result, typeof result);

result = Boolean('0'); // strings are true
console.log(result, typeof result);


result = Boolean(''); // empty strings are false
console.log(result, typeof result);