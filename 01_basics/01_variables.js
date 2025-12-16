const accountId = 111
let accountEmail = "qtpenil@gamil.com"
var accountPassword = "12345"
let accountState;



accountCity = "Ahemdabad"

/*
JavaScript creates accountCity as a global variable
JavaScript treats it like:
window.accountCity = "Ahemdabad"; // in browser
So:
Scope → Global
Datatype → string
❌ Dangerous → can cause unexpected bugs
*/

// accountId = 112
accountEmail = "hirapara@gmail.com"
accountPassword = "54321"
accountCity = "Surat"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId , accountEmail , accountPassword , accountCity,accountState);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])