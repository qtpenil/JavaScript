/**
 Spread in JavaScrip

 Spread (...) means : Take something that is grouped (array / object) and open it into individual values.

 Think like this (real-life example)

 Bag example : You have a bag
 Bag = [Apple, Banana, Mango]

 Spread means:
 Apple, Banana, Mango

 The bag is opened and items come out.

 */

 // 🟦 Spread with Array (MOST BASIC)
 const arr = [1, 2, 3];
 console.log(...arr);

// 👉 Without spread → [1, 2, 3]
// 👉 With spread → 1 2 3

// 🟨 Why spread is needed?

// ❌ Without spread
const a = [1, 2];
const b = [a, 3];

console.log(b);  // [ [1, 2], 3 ]



// ✅ With spread

const b1 = [...a, 3];
console.log(b1);  // [1, 2, 3]
// Spread removes the array wrapper


function add(x, y) {
  return x + y;
}

const nums = [5, 10];

add(...nums); // same as add(5, 10)


const user = { name: "Penil", age: 25 };

const copy = { ...user };  // “Create a new object and copy all properties from user into it”



// 🔹 Case 1: Function has 3 parameters, array has MORE values
function add(x, y, z) {
  return x + y + z;
}

const nums2 = [5, 10, 13, 2, 7];
console.log(add(...nums2));
/**
 JavaScript behavior:

x = 5
y = 10
z = 13
Extra values 2, 7 → IGNORED

✅ Result:5 + 10 + 13 = 28
👉 Extra arguments are ignored in JavaScript.
 */


// 🔹 Case 2: Function has MORE parameters, array has LESS values

function add(x, y, z) {
  return x + y + z;
}

const nums3 = [5, 10];

console.log(add(...nums3));

/**
 Assignment:

x = 5
y = 10
z = undefined

Result: 5 + 10 + undefined = NaN ❌

 */


// Rest Operator

/**
 Rest operator means:

Collect multiple values and pack them into a single array.
👉 Spread = open values
👉 Rest = collect values


Simple Real-Life Example

Imagine people coming into a room:

Penil, Vivek, Rohan, Jenil

Rest means:[Penil, Vivek, Rohan, Jenil]

👉 All arguments are collected into an array.

 */

function add1(...numbers) {
  console.log(numbers);
}
add1(1, 2, 3, 4);


// 🟩 Rest with Fixed Parameters

function show(a, b, ...rest) {
  console.log(a);    // 1
  console.log(b);    // 2
  console.log(rest); // [3, 4, 5]
}
// Rest must be the LAST parameter
//❌ Wrong: function test(...a, b) {} // ERROR

show(1, 2, 3, 4, 5);


// 🟧 Rest in Array Destructuring

const nums4 = [1, 2, 13, 14, 15];

const [first, second, ...others] = nums4;
console.log(others); // [3, 4, 5]


// 🟪 Rest in Object Destructuring

const user3 = { name: "Penil", age: 25, city: "Ahmedabad" };

const { name, ...rest } = user3;

console.log(rest);
// { age: 25, city: "Ahmedabad" }


//“The rest operator collects multiple values into a single array or object.”

/**
 🔥 Spread vs Rest (FINAL DIFFERENCE)

| Spread            | Rest                   |
| ----------------- | ---------------------- |
| Expands values    | Collects values        |
| Used when calling | Used in parameters     |
| `add(...arr)`     | `function add(...arr)` |



Q: Can rest be in the middle?
❌ No, must be last.

Q: Is rest same as arguments?
❌ No, rest is real array & modern.

 */