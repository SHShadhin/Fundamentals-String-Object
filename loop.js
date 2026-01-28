const mobile = {
    brand : 'Samsung',
    model : 'Galaxy s23 ultra',
    color : 'Black',
    price : 120000,
    configure : {
        ram : '16gb',
        rom : '128gb', 
        camera : '64mp'
    },
    isNew : true,

}
// for of : array 
// for in : object 

// for (const prop in mobile) {
//     console.log(prop)
//     console.log(mobile[prop])
// }

const key = Object.keys(mobile)
// console.log(key)

for (const keys of key) {
    console.log(keys, mobile[keys])
}


