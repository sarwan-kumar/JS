const accountId = 14453;
let accountEmail = "sharvuu@gmail.com";
var accountPassword = "12345";
accountCity = "Sirsa";
let accountState;

// accountId = 2;     // this is not allowed

accountEmail = "hc@gmail.com";
accountPassword = '212121';
accountCity = "Bangaluru";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scpoe and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState]);