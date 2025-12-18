/**
 In JavaScript, an object is a collection of key : value pairs.

 👉 If the value is a function, we call it an object method.
 */

const demo = {
  name: "Penil",
  greet: function () {
    console.log("Hello");
  }
};
/**
 Here:
    name → property
    greet → method
 */


// Built-in Object Methods (Object. methods)

//1️⃣ Object.keys()   ➡️ Get all keys
const user = { name: "Penil", age: 24 };

let objKeys = Object.keys(user);    // ["name", "age"]
console.log("objKeys :", objKeys);

// 2️⃣ Object.values()  ➡️ Get all values

let objValues = Object.values(user);   // ["Penil", 24]
console.log("objValues :", objValues);

// 3️⃣ Object.entries()   ➡️ Convert object → array
let objEntries = Object.entries(user);    // [["name","Penil"], ["age",24]]
console.log("objEntries :",objEntries)
// 💡 Very useful with map, filter


// 4️⃣ Object.assign()  ➡️ Copy / merge objects
const a = { x: 1 };
const b = { y: 2 };

const c = Object.assign({}, a, b);   // { x: 1, y: 2 }
console.log("assign :",c);



// 6️⃣ Object.freeze()  ➡️ Make object immutable
Object.freeze(user);

user.name = "Raj"; // ❌ not allowed
console.log(user);

// 7️⃣ Object.seal()  ➡️ Can update existing properties   ➡️ Cannot add/delete
Object.seal(user);
user.name = "Raj";        // ✔
user.city  = "Surat";     // ❌
console.log(user);


// 8️⃣ Object.hasOwn()  ➡️ Check property existence
const hasOwnResult = Object.hasOwn(user, "name"); // true
console.log(hasOwnResult);



// Prototype-based Object methods

// 1️⃣ hasOwnProperty()
console.log(user.hasOwnProperty("name")); // true
console.log(user.hasOwnProperty("city")); // false



// 2️⃣ toString()
console.log(user.toString());  // "[object Object]"



// 3️⃣ valueOf()
console.log(user.valueOf()); // returns object itself);


// Object iteration methods


for (let key in user) {
  console.log(key, user[key]);
}

Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});



// 👉 this depends on how a function is called, not where it is written.

const user1 = {
  name: "Penil",
  greet() {
    console.log(this.name);
  }
};

user1.greet(); // Penil

// Now separate the function:

const greetFn = user1.greet;
greetFn(); // ❌ undefined

/**
Why?
greetFn() is called without object
this → window (or undefined in strict mode)

💡 Solution: Manually control this
➡️ call, apply, bind
 */

// call() – Call function immediately with custom this
//call() invokes the function immediately and sets this explicitly

greetFn.call();




//apply() – Same as call, but arguments as ARRAY
//apply() is exactly like call(), but arguments are passed as an array




// bind() – Create a new function (does NOT execute)
//bind() returns a new function with fixed this

/**
 | Feature              | call          | apply      | bind      |
| -------------------- | ------------- | ---------- | --------- |
| Executes immediately | ✅             | ✅          | ❌         |
| Returns new function | ❌             | ❌          | ✅         |
| Arguments            | Normal        | Array      | Normal    |
| Fixes `this`         | Temporary     | Temporary  | Permanent |
| Common use           | One-time call | Array args | Callbacks |

 */


// Example

const user3 = {
  name: "Penil",
  greet() {
    console.log(this.name);
  }
};

setTimeout(user3.greet, 1000); // ❌ undefined
setTimeout(user3.greet.bind(user), 1000); // ✔ Penil



const user4 = {
  name: "Penil"
};

const user5 = {
  name: "Jenil"
};

function greet() {
  console.log(this.name);
}

greet.call(user4); // Penil
greet.call(user5); // Raj


/*
Important rules you MUST remember

Rule 1
Arrow functions ❌ ignore call/apply/bind

Rule 2

bind() is best for:
Event handlers
setTimeout
Callbacks
React class components


One-line summary (MEMORIZE)

🔹 call → Call now, args normal
🔹 apply → Call now, args array
🔹 bind → Call later, fix this
 */

