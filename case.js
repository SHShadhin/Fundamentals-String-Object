const school = 'Shanti Niketon Kinder Garten';
console.log(school)
console.log(school.toLowerCase()) // all letters are small 
console.log(school.toUpperCase()) // all letters are big



const subject = 'English'
const book = 'engLish'

if (subject.toUpperCase === book.toUpperCase) {
    console.log('Ami boi porbo')
}
else {
    console.log('Ami ghumabo')
}



// string trim means cut white space from the string.

const drink = ' water';
const drinks = 'water '

//trim type-1

// if(drink.trimStart() === drinks.trimEnd()) {
//     console.log('Pani khabo')
// }
// else{
//     console.log('Mojo khabo')
// }


// trim type-2

if(drink.trim() === drinks.trim()) {
    console.log('Pani khabo')
}
else{
    console.log('Mojo khabo')
}


