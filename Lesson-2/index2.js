const fs = require("fs");

fs.exists("index.js", (result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found");
  }
});
