// Primitive Data Types

// 7 types: String, Number, Boolean, Null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const isOutsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 345667869892878787676565n



// Reference Data Types/ Non-Premitive

// Array, Objects, Functions

const heros = ["shaktiman", "nagraaj", "doga"];
let myObj = {
    name: "sarwan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);



// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

