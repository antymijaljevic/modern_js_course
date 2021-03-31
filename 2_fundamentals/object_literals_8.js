const person = {
    firstName: "Steve",
    lastName: "Smith",
    born: 1988,
    email: "steve@aol.com",
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL',
    },
    yearsOld: function(){
        return 2021 - this.born;
    }
}

let val;
val = person;

//get specific value from object
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies[1];
val = person.address.state;
val= person.address['city'];
val = person.yearsOld();


console.log(val);

const people = [
    {name: 'John', age: 30},
    {name: 'Mike', age: 23},
    {name: 'Nenci', age:55}
]

for (let i = 0; i < people.length; i++) {
    console.log(people[i].name);
}