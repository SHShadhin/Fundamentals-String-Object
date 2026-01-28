const person = {
    name : 'Shadhin',
    age : 27,
    proffession : 'Developer',
    salary : 25000,
    married : true,
}


// dot notation
console.log(person)
console.log(person.age)

const income = person.salary
console.log(income)
const keyPro = 'proffession'
person[keyPro] = 'Frontend'

// bracket notation

console.log(person['married'])



// changes value of object properties

person.salary = 35000;
person['age'] = 25;
const pesha = 'proffession'
// person[pesha] = 'devops'
console.log(person)