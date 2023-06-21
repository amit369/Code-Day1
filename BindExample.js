const person = {
    name : 'Alice',
    greet : function(message) {
        console.log(`${message}, ${this.name}`);
    },
}
const greetFn = person.greet.bind(person,'Hello');
greetFn();