// Argument & Parameters
 const speek = function(name, time){
     console.log(`Good ${time} ${name}!`);

 };

 speek('shahadat', 'morning');

// another way

 const message = function(name = 'Raiyan', time = "Night"){
    console.log(`Good ${time} ${name}!`);

};

message();
message('shahadat', 'morning')
message('shahadat')