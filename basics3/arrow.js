const user ={
    username: "avinash",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username},welcome`);
    }
}

// basic arrow function is: () => {}
const addTwo =(num1 , num2) => ({username:"hitesh"})
// console.log(addTwo(3,4));