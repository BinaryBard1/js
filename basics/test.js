/* Shortcuts- 
1.Comment-  ctrl+/
2.Print multiple variable -  console.table([accountId,accountEmail,accountPassword,accountCity])
3.semicolons can be avoided (And should be)

*/


const accountId = 3 //change nhi kar paoge
let accountEmail = "aniruddha@google.com"// Used now a days as it solves block scope and functional scope issues
var accountPassword = "12345"//not mostly used scope issues
accountCity = "jaipur" // Can be done (But Should not be used)
let accountState; // as value is not assigned it is considered undefined 

//accountId = 2 // not allowed as it is declared as constant
console.log(accountId);

accountEmail = "ani@yahoo.com" // allowed as it is declared as let
accountPassword = "54321"
accountCity = "Mumbai"
console.table([accountId,accountEmail,accountPassword,accountCity]) //prefered way instead of printing one by one

console.log(accountEmail)

console.log("Hi")


// In short use only const and let -- not (var)