

const myFunc = (callbackFunc) =>{

    let value = 50;
    callbackFunc(value);
};

myFunc(value =>{

    console.log(value);
});

// callbacks & foreach

let people =['shahadat', 'raiyan', 'hossain', 'korim', 'kamal'];

const logPerson = (person, index) =>{
    console.log(`${index} - Hello ${person}!`);

};

people.forEach(logPerson);