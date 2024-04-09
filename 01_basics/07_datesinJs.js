// Dates

let myDate = new Date()
/*console.log(new Date);
console.log(myDate.toString()); Tue Apr 09 2024 18:05:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  Tue Apr 09 2024
console.log(myDate.toLocaleString());  4/9/2024, 6:05:37 PM
console.log(typeof myDate);*/

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(Date.now);
/*console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000)); in seconds */

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //+1 cause month starts from 0 in js
console.log(newDate.getDay()); 

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})