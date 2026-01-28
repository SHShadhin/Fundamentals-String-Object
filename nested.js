const college = {
    name : 'Ullapara Science College',
    class : [11, 12],
    scienceFair : ['Bijoy Dibosh', '21 February', '26 March'],
    famous : {
        result : {
            gpa : 'most A+',
            fail : 'No fail'
        },
    holiday : ['Friday', 'Saturday']
    }

}

// console.log(college);
// console.log(college.name);
// console.log(college.famous);

console.log(college.famous.result);
college.famous.result.gpa = 'Most of them A'
console.log(college.famous.result.gpa);

college.scienceFair[1] = '16 December',
console.log(college.scienceFair)