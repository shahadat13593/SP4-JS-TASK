//  Variable & Block scope
const age = 30;


if(true){
   const  age = 40;
   const name = 'Shahadat'
    console.log('Outside 1st code block: ', age, name);

    if(true){
        const age = 50;
      console.log('inside 2nd code block: ', age);
      var test = 'hello'
    }
}




console.log('Outside code block: ', age, name, test);