// objects literals - used to make objects.eg "{}".

const jsUser = {
   name: "Hitesh",
   age: 18 ,
   location:"bhopal",
   email:"avinash@google.com",
   isLogged: false,
   lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["age"]);

jsUser.greeting = function(){
   console.log("hello users");
}
jsUser.greeting2 = function(){
   console.log(`hello,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting2());