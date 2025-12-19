
const accountId= 1234;
var accountEmail="mayuri@gmail.com";
let accountPassword="12345";
accountCity="pune";
let accountState;

// accountId=10 (not allowed because accountId is a variable of type constant)

/*
  prefer not to use var.
  beacause of issue in block scope and functional scope
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
