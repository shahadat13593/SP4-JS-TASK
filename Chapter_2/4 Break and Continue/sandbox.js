const scores = [50, 25, 0, 30, 100, 20, 10];
// break 
for(i=0; i < scores.length; i++){
    if (scores[i] == 100){
        break;
    }
    console.log('Your score: ', scores[i]);

}


console.log('-----------------------------------');
console.log('-----------------------------------');

// continue
for(i=0; i < scores.length; i++){
    if (scores[i] == 100){
        continue;
    }
    console.log('Your score: ', scores[i]);

}