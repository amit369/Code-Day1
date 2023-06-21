const person = [
    {
        name : 'Peter', age : 16 
    },
    {
        name : 'Mark' , age : 18
    },
    {
        name : 'John' , age : 20
    },
    {
        name : 'Tony' , age : 30
    }
]
const fullAge = person.filter ( person => person.age >= 18);
console.log(fullAge);