const user = {
    username : "Penil",
    age : 22,
    city : "Ahemdabad",
    proffesion : "Softwere Engineer",
    contact_no : 9016167969,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
        
    }
}


// user.welcomeMessage()
// user.username = "Penil Hirapara"
// user.welcomeMessage()

// console.log(this);


// const fun1 = function (){
//     let username = "penil"
//     console.log(this.username);
    
// }



/*
An arrow function is a shorter way to write a function expression.

*/

// arrow function
const fun1 = () => {
    let username = "penil"
    console.log(this.username);
    console.log(this)
    
}
fun1()


// const addTwo = (n1, n2) => {
//     return n1+n2   //  this is explicit return here we need to write return
// }

const addTwo = (n1, n2) =>  n1+n2    // this is implict return no need to write reurn

console.log(addTwo(3,4))



//  🟥 Biggest Difference: this

// Normal function
const obj = {
  name: "Penil",
  sayHi() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

// console.log(obj);
// obj.sayHi()


// Arrow function
const obj2 = {
  name: "Penil",
  sayHi() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};
console.log(obj2);
obj2.sayHi()


/**
 👉 Arrow functions do NOT have their own this
They inherit this from parent

| Feature             | Normal Function | Arrow Function   |
| ------------------- | --------------- | ---------------- |
| `this`              | Own `this`      | Inherited        |
| `arguments`         | Available       | ❌ Not available  |
| Constructor (`new`) | ✅ Yes           | ❌ No             |
| Hoisting            | ✅ (declaration) | ❌                |
| Best use            | General logic   | Callbacks, React |

 */
