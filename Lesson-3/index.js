// os, path
//const os = require("os");
//const { totalmem, freemem } = require("os");

//os.....
//userInfo()
//homedir()
//hostname()
//totalmem()
//freemem()
//console.log(freemem());

// console.log(__dirname);
// console.log(__filename);

//path
const path = require("path");
const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + "/../views");
console.log(joinName);
