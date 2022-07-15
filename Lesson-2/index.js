const fs = require("fs");

//writeFile
//appendFile (update)
//readFile (utf-8)
//rename

//unlink (delete)
//exists
fs.exists("demo2.txt", (result) => {
  if (result) {
    console.log("Found");
  } else {
    console.log("Not Found");
  }
});
