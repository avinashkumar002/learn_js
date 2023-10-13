// singleton object eg->
//const tinderUser = new Object()
// non singletonobject eg->
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name ="avi"
tinderUser.isLoggedin = false

// console.log(tinderUser);

const regularUser = {
    email:"avin@google.com",
    fullname:{
        userfullname:{
            firstname:"avinash",
            lastname:"singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


// combining two objects
const obj1= { 1:"a", 2:"b" }
const obj2= {3:"c", 4:"d"}

// const obj3= Object.assign({},obj1 , obj2)
// console.log(obj3);

// using spread operator
const obj3 = {...obj1, ...obj2};
// console.log(obj3);


const course ={
    coursename:"js in hindi",
    price:"99",
    courseInstructor:"avinash"
}

// to access the key =>
// course.courseInstructor 
//      OR
const {courseInstructor} = course
// console.log(courseInstructor);