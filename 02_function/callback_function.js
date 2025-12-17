/**
 A callback function is a function that is passed as an argument to another function and is executed later.

 In simple words:
“Call me back when your work is done.”

1️⃣ Why Callbacks Exist in JavaScript

JavaScript is:
- Single-threaded
- Non-blocking
- Asynchronous

So instead of waiting, JS says: “I’ll continue my work. You call me when you’re ready.”
That “call me” function = callback.
 */

function greet(name , callback) {
    console.log("Hello " + name)
    callback();
}

function sayHello(){
    console.log("Bye!")
}

greet("Penil", sayHello);

/**
 Flow

1. greet runs
2. sayBye is passed
3. sayBye() is executed later

✔ greet → Higher-Order Function
✔ sayBye → Callback Function

 */

// Asynchronous Callback (MOST IMPORTANT)

console.log("Start");

setTimeout(() => {
    console.log("Async callback");
},1000);

console.log("End")
// Callback runs after delay, not immediately.


// Real-World Async Callback Example

function fetchData(callback){
    setTimeout(() => {
        callback("User data received");
    },2000)
}


fetchData((data) => {
    console.log(data);
});

/*
here You are passing this function: 

(data) => {
    console.log(data);
}

as the callback argument.

So internally:  callback = (data) => console.log(data);

===> Execution Flow 

1. fetchData() is called
2. setTimeout is registered (2 seconds)
3. JS continues execution (non-blocking)
4. After 2 seconds:
   → callback("User data received")
5. console.log prints the data

*/

// ********************************** Promise ************************************

/**
 A Promise is an object that represents the future result of an asynchronous operation.

 Think of it like this:
📦 Promise = “I promise I’ll give you the result later”

That result can be:

✅ Success → fulfilled
❌ Failure → rejected
 */