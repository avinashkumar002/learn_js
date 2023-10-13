// function defintion
function Myname(){
    console.log("A");
    console.log("v");
    console.log("I");
}

// Myname()
// parameters are recieved  in functions
function addNumbers(num1 , num2){
    let result = num1+num2;
    return result;
}
// arguments are assed in functions
// addNumbers(3,4);
const result = addNumbers(3,4);
// console.log(result);

function loginUserMessage(username){
    return`${username} just logged in`
}
// console.log(loginUserMessage("avinash"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(2000));

const myNewArray = [200 ,400 ,100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
