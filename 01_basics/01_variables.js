const accountId = 144552;
let accountEmail = "sarwanchweck@gmail.com"
var accountPassword = "12345"
accountCity = "Sirsa"
let accountState;
// accountId = 2.     assignmnet to constant not allowed
accountEmail = "hcss@gmail.com"
accountPassword = "987653"
accountCity = "delhi"

console.log(accountId);

/*
Prefer not to use var because of issue of block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])