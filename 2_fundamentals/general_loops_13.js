//for loop
for(let i = 1;i <= 10; i++){  //i = i + 1
    if(i === 2){
        console.log('2 is my favorite number');
        continue; // will go to next interation without executing rest of the code
    }
    if(i === 5){general_loops_12.js
        console.log('Stop the Loop')
        break; //will break entire loop
    }

    console.log('Number ' + i);
}


//while loop
let x = 0;

while(x < 10){
    console.log('Number ' + x);
    x++;
}

//do while loop
let z = 0;

do {
    console.log('fix number: ' + z)
    z++;
}

while(z > 100); //will always run once, no matter what

//interating through array
const cars = ['Ford', 'Honda', 'VW', 'Tesla'];
for(let s=0;s<cars.length;s++){
    console.log(cars[s]);
}

//foreach
cars.forEach(function(car, index, array){
    console.log(`${index}: ${car}`);
    console.log(array);
});

//map
const users = [
    {id: 1, name:'John'},
    {id: 2, name: 'Sarah'},
    {id: 3, name: 'Karen'},
    {id: 4, name: 'Steve'},
];

const ids = users.map(function(user){
    return user.id;
});

console.log(ids);

//for in loop
const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 40
}

for(let u in user){
    console.log(`${u} : ${user[u]}`);
}