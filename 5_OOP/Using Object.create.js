const personPrototypes = {
    greeting: function (){
        return `Hello there ${this.firstName} ${this.lastName}`
    },

    getsMarried: function(newLastName){
        this.lastName = newLastName;
    }
}

const marry = Object.create(personPrototypes);

marry.firstName = 'Marry';
marry.lastName = 'Williams';
marry.age = 30;
marry.getsMarried('Mijaljevic');

console.log(marry);
console.log(marry.greeting());

const brad = Object.create(personPrototypes, {
    firstName: {value: 'Brad'},
    lastName: {value: 'Fukkin'},
    age: {value: 35}
});

console.log(brad);
console.log(brad.greeting());