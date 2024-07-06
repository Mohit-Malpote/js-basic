/*There are two types datatypes
1) premitive
2)Reference (Non primitive)*/

const { userone } = require("./userone");

 
// premitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); false

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof anotherId);
// console.log(typeof heros);
// console.log(typeof myObj);

// ******************************

// stack(primitive) 

let myname =  "mohit"

let anothername = myname
anothername = "manu"

// console.log(anothername); //manu//
//  console.log(myname);     //mohit//
//heap(non-primitive)
 let newuser = {
    email: "user@gmail.com",
   username : "momo"
};

let newusertwo = newuser 
newusertwo.email = "mohit@gmail.com"

console.log(newusertwo.email);  //mohit@gmail.com//
console.log(newuserone.email);  //mohit@gmail.com//


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  => object */

       //datatypes are based on memory allocation

    //    *********************************************

/*Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory*/