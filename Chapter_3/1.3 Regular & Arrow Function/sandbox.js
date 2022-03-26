///Regular Function

/*const calArea = function(radius){
    return 3.1416 * radius ** 2;
     
}; */



// Arrow Function
const calArea = radius => 3.1416 * radius ** 2;


const area = calArea(5);
console.log('area is :' , area);


const greet = () => 'Hello Shahadat!';
const result= greet();
console.log(result);