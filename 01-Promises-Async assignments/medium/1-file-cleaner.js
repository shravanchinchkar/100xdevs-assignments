const fs = require("fs");
fs.readFile("file.txt", "utf-8", (err, data) => {
  let filesData = data.replace(/\s+/g, " ").trim();
  fs.writeFile("file.txt", filesData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File Content Updated!");
    }
  });
});
