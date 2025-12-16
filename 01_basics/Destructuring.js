/*
Destructuring is a JavaScript feature that lets you extract values from arrays or objects 
and store them into variables in a short, clean way.

Think of it as unpacking data.
*/


// 🟦 Array Destructuring

const arr = [10, 20, 30];
const [a,b,c,d] = arr;
console.log(a ,b, c,d)



// No need to do this :
// let a = arr[0]
// let b = arr[1]


// ⏭️ Skip values
const [first, , third, ...rest] = [1, 2, 3,4,5,6];
console.log(first, third , rest); // 1 3

// 🔁 Default values
const [x = 0, y = 0] = [5];
console.log(x, y); // 5 0


// 🔄 Swap variables (very common)
let a1 = 1, b1 = 2;
console.log(`a1 ${a1} b1 ${b1}`);
[a1, b1] = [b1, a1];
console.log(`a1 ${a1} b1 ${b1}`);


// 🟨 Object Destructuring

const user = {
  name: "Penil",
  age: 22,
  city: "Ahmedabad"
};

// Object destructuring uses property names, not position.
const { name, age } = user;

console.log(name); // Penil

// Rename variables
const { name: fullName, city: location } = user;
console.log(fullName); // Penil


// Default values
const { country = "India" } = user;
console.log(country , name, age); // Penil

// Nested destructuring
const user2 = {
  profile: {
    email: "test@gmail.com"
  }
};

const { profile: { email } } = user2;
console.log(email); 


// Destructuring in Functions

function printUser({name ,age}){
    console.log(name , age)
}

printUser(user);

