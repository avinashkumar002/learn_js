//Primitive
// String , Number , Boolean , null , undefined , symbol(used for making unique variable or value) , BigInt


const  score = 100;
const scorevalue = 100.98

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);
const bigNumber = 999999999n


// Non-Primitive or Reference
// Array , Objects , Functions

const heros = ["shaktiman", "nagraj" , "doga"];

let myObj = {
    name: "avinash",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);




// ++++++++++++++

// stack (Primitive) , Heap(Non-Primitive)
// stack me copy pass hota hai lakin  heap me reference address pass hota hai
   