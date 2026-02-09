const student = {
    name : "Rajneesh",
    age : 23,
    marks : 86.00,
    city : "Bisalpur"
}

const item = {
    price : 100.99,
    discount : 25,
    color : ["red", "pink"]
}

const obj = {
    1: "a",
    2: "b",
    true: "c",
    null: "d",
    undefined: "e",
}

console.log('obj[1] :>> ', obj[1]);
console.log('obj[2] :>> ', obj[2]);
console.log('obj[null] :>> ', obj[null]);
console.log('obj[undefined] :>> ', obj[undefined]);
console.log('obj[true] :>> ', obj[true]);
// console.log('obj.1 :>> ', obj.1);
console.log('obj.null :>> ', obj.null);
console.log('obj.true :>> ', obj.true);
console.log('obj.undefined :>> ', obj.undefined);

/* Add / Update Item */

console.log('student.city :>> ', student.city);
student.city = "Noida";     //update the key's value
console.log('student.city :>> ', student.city);
console.log('student.gender = "male" :>> ', student.gender = "male");  // Add a new key & value
console.log(student);
student.marks = "A";
console.log(student);
delete student.marks;
delete student.city;
console.log(student);

/* Object of Objects */
const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi"
    },
    shradha : {
        grade : "A",
        city : "Pune"
    },
    karan : {
        grade : "O",
        city : "Mumbai"
    }
}

console.log(classInfo);
console.log(classInfo.shradha);
console.log(classInfo.shradha.city);
classInfo.shradha.city = "Gurgaon"; //Change the existing object's keys value.
console.log(classInfo.shradha);

/* Array of Objects */
const classInfos = [
    {
        name : "aman",
        grade : "A+",
        city : "Delhi"
    },
    {
        name : "shradha",
        grade : "A",
        city : "Pune"
    },
    {
        name : "karan",
        grade : "O",
        city : "Mumbai"
    }
]

console.log(classInfos);
console.log(classInfos[0]);
console.log(classInfos[1]);
console.log(classInfos[2]);
console.log(classInfos[1].name);
console.log(classInfos[1].grade);
console.log(classInfos[1].city);
classInfos[1].gender = "female";
console.log(classInfos[1]);