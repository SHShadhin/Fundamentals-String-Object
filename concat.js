let firstName = 'Shamim'
let middleName = 'Hossain'
let lastName = 'Shadhin'

// type-1
let fullName = firstName + ' ' + middleName + ' ' + lastName
// console.log(fullName)

// type-2 
let fullName2 = firstName.concat(' ').concat(middleName).concat(' ').concat(lastName)
console.log(fullName2)



// includes 
// kono ekta string er vitore kono kisu ache ki na eita janar jonno includes use hoy.

console.log(fullName.includes('h'))
console.log(fullName.includes('X'))