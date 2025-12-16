console.log("2" > 1)
console.log("02" > 10)
console.log("2" == 2)

console.log(2 != 1)

/*
the reason is that an equality check == and comparison > < >= <= work differently.
comparison convert null to a number , treating it as 0.
that's why  null >= 0 is true , null > 0 is false
*/
console.log( null > 0)
console.log( null == 0)
console.log( null >= 0)

console.log( undefined < 0)
console.log( undefined == 0)
console.log( undefined <= 0)

// === strinctly check , check value and alos data type

console.log(" '2' === 2 ", "2"===2)
console.log(" 2 === 2 ", 2===2)




// Truthy and Falsy value

/*
In JavaScript, every value is treated as either true or false when used in a boolean context 
(like if, while, logical operators).

❌ Falsy values (ONLY these 7)
false
0
-0
0n          // BigInt zero
""          // empty string
null
undefined
NaN


👉 Anything NOT in falsy value list that is Truthy like
true
"hello"
" "          // space is truthy
1
-5
[]
{}
function(){}
"0"
"false"


*/