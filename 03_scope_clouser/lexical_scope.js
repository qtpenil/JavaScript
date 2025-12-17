/**
 Lexical Scope means that the scope of a variable is determined by where it is written in the source code, 
 not where it is called.


 “Lexical” = location in the code
 */

 let x = 10;

function foo() {
  console.log(x);
}

function bar() {
  let x = 20;
  foo();
}

bar();

// foo is defined where x = 10
// foo does not care where it is called
// JS follows lexical (written) structure



// Nested Functions & Lexical Scope

// This lookup path is called Scope Chain.
let x1 = 5;

function outer() {
  let y1 = 10;

  function inner() {
    let z1 = 15;
    console.log(x1, y1, z1);
  }
  inner();
}
outer();

/*
When JS looks for a variable:

1️⃣ Local scope
2️⃣ Parent scope
3️⃣ Parent’s parent
4️⃣ Global scope
5️⃣ ❌ ReferenceError



Key Points to Remember

✔ Scope is fixed at write time
✔ Functions remember their parent scope
✔ Enables closures
✔ Independent of execution order
✔ Works with var, let, const
 */
