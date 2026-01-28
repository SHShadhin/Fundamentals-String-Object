let sentence = 'I am learning web dev'


// reverse type-1

// let reverse = ''
// for (const letter of sentence) {
//     // console.log(letter)
//     reverse = letter + reverse;
// }
// console.log(reverse)



// reverse type-2

// let reversed = ''
// for(i = 0; i <= sentence.length; i++) {
//     // console.log(sentence[i])
//     const letter = sentence[i]
//         reversed = letter + reversed;
// }
// console.log(reversed)


// type-3
// shortcuts
const reverse = sentence.split('').reverse().join('')
console.log(reverse)