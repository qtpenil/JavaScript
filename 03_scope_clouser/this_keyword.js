
/**
 Correct Understanding

 ✔ Normal function

this does NOT automatically become undefined
It depends on how the function is called

✔ Arrow function

this does NOT get parent class
It gets lexical this (parent scope this)



 */


const user = {
  name: "Penil",
  greet() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

user.greet(); // undefined


const user1 = {
  name: "Penil",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
user1.greet();



// 🔹 Rule 1: Normal Function (this depends on call site)
// Case 1: Normal function called directly

function show() {
  console.log(this);
}

show();
/**
| Mode                    | Output      |
| ----------------------- | ----------- |
| Non-strict              | `window`    |
| Strict (`"use strict"`) | `undefined` |

✔ undefined happens only in strict mode
 */



// Case 2: Normal function as object method

const user3 = {
  name: "Penil",
  show() {
    console.log(this.name);
  }
};

user3.show(); // Penil
// ✔ this → object before dot


// Case 3: Normal function in class
class User {
  show() {
    console.log(this);
  }
}

const u = new User();
u.show(); // User {}
// ✔ this → instance


// 🔹 Rule 2: Arrow Function (this is lexical)

/**
Arrow functions do not have their own this.
They capture this from where they are defined.
 */


// Arrow inside class (Parent context = class instance)

 // undefined
// ❌ Because arrow’s parent scope is global, not object

/**
 "" Normal functions get this based on how they are called (object, constructor, strict mode, etc.). 
 Arrow functions don’t have their own this; they inherit this from their lexical (parent) scope, 
 not specifically from a class. "" 


 */