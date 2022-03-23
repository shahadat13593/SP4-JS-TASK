const title = 'Best reads of 2022';
const author =  'Shahadat Hossain';
const likes = 1000;

// Concatenation way 

let  message = 'The blog called ' + title + 'by ' + author + 'has ' + likes + ' likes.';
console.log(message)


// Template string way

let message2 = `The blog called ${title} by ${author} has ${likes} likes.`
console.log(message2)


// creating html templates

let html = `
<h1> ${title}  </h1>
<p> ${author} </p>
<span> This blog has ${likes} likes. </span>
` ;

console.log(html);