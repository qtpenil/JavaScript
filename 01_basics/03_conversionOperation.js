let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)

console.log(typeof valueInNumber)

let score2 = "33abc"
let valueInNumber2 = Number(score2)  // retuen NaN (Not a Number)
console.log(typeof valueInNumber2 , valueInNumber2)

let score3 = null
let valueInNumber3 = Number(score3)  // retuen 0
console.log(typeof valueInNumber3 , valueInNumber3)

let score4 = undefined
let valueInNumber4 = Number(score4)  // retuen NaN (Not a Number)
console.log(typeof valueInNumber4 , valueInNumber4)


let score5 = true
let valueInNumber5 = Number(score5)  // retuen 1
console.log(typeof valueInNumber5 , valueInNumber5)

// "33" -> 33
// "33abc" -> NaN
// true -> 1 , false -> 0


let isLoggedIn = 1 
// when value is 1, 100 (any number) , string -> true , 0 & nothing define -> false

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn , booleanIsLoggedIn)


// *************************  OPeration  *********************

let value = 3
let negValue = -value

console.log(negValue);

console.log(2+2 , 2-2 , 2*2 , 2/2 , 2**4 , 2%3)

let str1 = "Penil"
let str2 = "Hirapara"

console.log(str1+str2)


console.log("1"+1)
console.log(1+"2");

console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(+true) // not do like that
console.log(+"") // 0 

let num1 , num2, num3 

num1 = num2 = num3 = 2+2
console.log(num1, num2, num3)

let gameCounter = 120
gameCounter++;
console.log(gameCounter)

++gameCounter
console.log(gameCounter)
