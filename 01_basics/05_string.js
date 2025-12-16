const name = "Penil"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// another way to define String 
const gameName = new String('Mario-The Super Man')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherStr = gameName.slice(-8,-1)
console.log("anotherStr : ",anotherStr)


const url = "https://penil.com/penil%20hirapara"

console.log(url.replace('%20', '_'))

console.log(gameName.split(" "))