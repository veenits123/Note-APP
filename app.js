console.log("Starting App.");

const fs = require('fs');

const os =require('os');
var user=os.userInfo();

fs.appendFileSync('greetings.txt',`Hello ${user.username}!`);


// const fs=require('fs');
// fs.appendFile('veen.py', 'print("hello world")', (err) => {
//   if (err) throw err;
//   console.log('The "data to append" was appended to file!');
// });


// console.log(user);