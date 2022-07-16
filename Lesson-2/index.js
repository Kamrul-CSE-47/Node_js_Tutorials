const fs = require("fs");

//writeFile
//appendFile (update)
//readFile (utf-8)
//rename

//unlink (delete)
//exists
fs.rename("demo1.txt", "demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("success");
  }
});
