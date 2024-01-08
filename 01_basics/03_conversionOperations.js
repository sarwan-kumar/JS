let score = "33"

// let score = "33abc".  //it gives NaN (Not a number) because it tries to convert abc in number but not able to convert

// let score = null   // it gives zero after convertion in number that is wrong

// let score = undefined       //it gives NaN (Not a number) because it tries to convert in number but not able to convert

// console.log(typeof score);


let valueInNumber = Number(score)

// console.log(typeof (valueInNumber));
// console.log(valueInNumber);               



// notes

//  "33" => 33
//  "33abc" => NaN.  but type is number
//  true => 1; false => 0

let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
// let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(typeof (booleanIsLoggedIn));
console.log(booleanIsLoggedIn);


//  1 => true
//  0 => false
//  "" => false
//  "sarwan" => true