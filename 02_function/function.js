/*
A function is a block of code that:

Can be reused
Can accept inputs (parameters)
Can return output

*/

function greet() {
  console.log("Hello");
}

greet()  // function execution
greet // function reference 


function add(a, b) {
  return a + b;
}


console.log(add(5,10))
/*
Key Characteristics

Hoisted (can be used before it’s defined)
Has a name
Traditional and most common
 */



// This is called a Named Function Expression.
function multiply(a , b){
    console.log(a*b)
    return a * b
}
let fun2 = multiply(2,5)

// console.log("Fun ",fun)

console.log("Fun2 ",fun2)



/*
Functions are first-class citizens
That means:

A function can be stored in a variable
Passed as an argument
Returned from another function
*/


function loginUserMessage(username){
    if(!username){    // similar to (username === undefined)
        console.log("Please enter a usernname")
        return
    }
    return `${username} just logged in`
}

let user = loginUserMessage("Penil")
console.log(user)
console.log(loginUserMessage())




func()  // we can call function befor we declaration but must be function present 
// compiler automatically set it to top 

function func(){
    console.log("Hoisting function")
}

const user1 = {
    username : "Penil",
    age : 22
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user1)


const myNewArray = [200, 400, 100, 900]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))