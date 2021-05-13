//destructuring assignment
let a, b;
[a, b] = [100, 200];

//rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({a,b} = {a:100, b:200, c:300, d:400, e:500});

({a,b, ...rest} = {a:100, b:200, c:300, d:400, e:500});

//array destructuring
// const people = ['Marko', 'Pero', 'Sime'];
// const [Person1, Person2, Person3] = people;
// console.log(Person1, Person2, Person3);

//parse array returned from function
// function getPeople(){
//     return ['Mike', 'July', 'Sima']
// }

// let Person1, Person2, Person3;
// [Person1, Person2, Person3] = getPeople();
// console.log(Person1, Person2, Person3);

//object destructuring
const person = {
    name: 'Ante',
    age: 32,
    city: 'Zadar',
    gender: 'Male',
    sayHello: function(){
        console.log('Hello')
    }
};

//old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city,
//     gender = person.gender;

//new ES6
const {name, age, city, gender, sayHello} = person;
console.log(name, age, city,gender);
sayHello();