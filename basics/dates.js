let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());


let myCreateDate = new Date(2023 , 0 ,23)
console.log(myCreateDate.toDateString());
let CreateDate = new Date("2023-01-14");
console.log(CreateDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));