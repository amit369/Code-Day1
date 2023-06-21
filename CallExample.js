function greet(name)
{
    console.log(` Hello, ${name}! I'm ${this.role}`);
}
const person = {
    role : 'developer',
}

greet.call(person,'John');