const accountId = 124
let accountEmail = "nik11@gmail.com"
var accountPwd = "6078" /* Prefer not use var --> because of issue in block issue and functional scope */
accountCity = "gaya" //in this way variable can also be declared , but it is recomended to not use it like this --> #BAD PRACTISE
let accountState;//Agar aap javaScript mein variable ko declare kar ke choor denge without intialize kiye, toh javaScript uski value ko UNDEFINED maan legi

// accountId = 7 //--> not allowed , we can't change variable having keyword const

accountEmail = "bhaskar20@gmail.com"
accountCity = "Bhopal"

console.table([accountId,accountEmail,accountPwd,accountCity,accountState])/*inorder to not write console.log() 
again and again to print the value of more than one variable, we can simply use the console.table([]) once and 
put all variables inside square braces followed by comma which you want to output on console.*/

