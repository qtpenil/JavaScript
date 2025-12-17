/**
 Closures are the most powerful concept built on top of lexical scope.

 A closure is created when a function remembers and continues to access variables from its outer (lexical) scope 
 even after the outer function has finished execution.

 This means an inner function can access variables, parameters, and other functions from its parent function's 
 scope, as well as the global scope, regardless of where the inner function is executed later in the code. 
 */


 // Simple Closure
 function outer() {
  let message = "Hello Penil";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet(); 

/**
 What happened here

1. outer() runs
2. inner() is returned
3. outer() finishes
4. inner() still remembers message

✔ This memory is closure


Why Closure Works (Lexical Scope Connection)

- inner is defined inside outer
- So it lexically binds to outer’s scope
- JavaScript keeps that scope alive in memory
 */



// Practical Example

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const inc = counter();

inc(); // 1
inc(); // 2
inc(); // 3


// Practical Example
function bankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = bankAccount(1000);
account.deposit(500);
console.log(account.getBalance()); // 1500
