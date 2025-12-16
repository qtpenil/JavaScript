"use strict" // treat all JS code as newer version

// alert("hello") // we are using nodejs , not browser

console.log(3
    +
    3) // code readability
    
    
console.log("Penil")

let name ="Penil"
let age = 22
let isLoggedIn = false

// number -> 3 to power 52 or 53

/*
JavaScript is a dynamically typed language, meaning : You don’t declare a data type — it’s decided at runtime.
1️⃣ Two Main Categories

1) Primitive Data Types
Immutable
Stored by value

-> 1️⃣ string , 2️⃣ number, 3️⃣ boolean, 4️⃣ undefined, 5️⃣ null , 6️⃣ symbol (ES6) ,7️⃣ bigint


2) Non-Primitive (Reference) Data Types
Mutable
Stored by reference

-> 8️⃣ object
Common Object Types
| Type     | Example         |
| -------- | --------------- |
| Object   |   {}            |
| Array    |   []            |
| Function | function() {}   |
| Date     |   new Date()    |

Primitives are immutable
Objects are mutable
typeof null is a bug
Arrays are objects
*/

console.log(typeof null)  // Object
console.log(typeof "penil")  // string
console.log(typeof undefined)  // undefined


// define symbol

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId)


// Array
const heroes = ["Iron man","Caption America" , "Groot" ,"Thor"]
console.log(heroes)

let myObj = {
    name : "Penil",
    age : 22
}
console.log(myObj)

const myFunction = function(){
    console.log("Hello Penil")
}

console.log(myFunction)
console.log(typeof(myFunction))



// Stack (primitive ) , Heap (non-primitive)

let myYouTube = "Penil YT Channel"

let anotherName = myYouTube
console.log("myYouTube : ",myYouTube)
console.log("anotherName : ",anotherName)

anotherName = "HP YT Channel"
console.log("myYouTube : ",myYouTube)
console.log("anotherName : ",anotherName)


let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "hp@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)