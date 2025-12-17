/**
 Scope defines where a variable or function can be accessed in your code.

 In simple words:  “Who can see this variable?”


 Types of Scope in JavaScript

 JavaScript has 3 main scopes:
1️⃣ Global Scope -> A variable declared outside any function or block is in global scope.
                 ->  ✔ Accessible everywhere

2️⃣ Function Scope  -> Variables declared inside a function are accessible only inside that function.
                    -> var is function-scoped , let & const are block-scoped

3️⃣ Block Scope (ES6)  -> A block = {}
                        Examples: if, for, while, switch
                       -> let & const → Block Scoped , var ❌ NOT block scoped


Scope Chain

When JS looks for a variable:
1. Current scope
2. Parent scope
3. Global scope
4. ❌ Not found → ReferenceError

✔ Inner → Outer → Global
➡️ This chain is called Scope Chain



Lexical Scope  ->  Scope is decided at the time of writing code, not execution.

Shadowing  -> When a variable in inner scope has same name as outer scope.
            Example :

            let x = 10;
            function test() {
                let x = 20;
                console.log(x);
            }
            test(); // 20
            ✔ Allowed with let & const

❌ Illegal Shadowing
            let a = 10;
            {
            var a = 20; // ❌ Error
            }

         
| Scope Type | Created By         | Keyword               |
| ---------- | ------------------ | --------------------- |
| Global     | Outside all blocks | `var`, `let`, `const` |
| Function   | Inside function    | `var`, `let`, `const` |
| Block      | `{}`               | `let`, `const`        |
| Lexical    | Code structure     | JS engine             |

*/

// Function Scope  -> A variable is function-scoped if it is accessible anywhere inside the function in which it is declared.
function test() {
  if (true) {
    var x = 10;            // Applies to var
  }
  console.log(x);
}

test(); // 10
// ✔ x is accessible throughout the function, even though declared inside if.


// Block Scope -> A variable is block-scoped if it is accessible only within the {} block where it is declared.
// Created by  :  {} (if, for, while, switch)
// Applies to  : let , const

function test2() {
  if (true) {
    let y = 20;
    const z = 30;
  }
//   console.log(y); // ❌ ReferenceError
//   console.log(z); // ❌ ReferenceError
}

test2();


var x3 = 500
function test3(){

    var x = 200
    var x3 = 800
    if(true){
        console.log(`if x = ${x}`)
        var x3 = 700
        console.log(`if x3 = ${x3}`)
        var x = 100;
    }
    console.log(`fun x = ${x}`)
    console.log(`fun x3 = ${x3}`)
}
test3()

console.log(`x3 = ${x3}`)

/*
 var depends on scope, but var only depends on FUNCTION scope, not BLOCK scope.
So:

if, for, while → ❌ do NOT create scope for var
function → ✅ creates scope for var

 */

