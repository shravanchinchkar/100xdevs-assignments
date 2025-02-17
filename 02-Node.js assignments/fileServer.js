/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,

  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express"); //imported the express module
const fs = require("fs"); //imported the File System module
const path = require("path"); //imported the path module
const app = express();

//following endpoint is for hello world
app.get("/", (req, res) => {
  res.send("Hello world");
});

//List files
app.get("/files", function (req, res) {
  fs.readdir(path.join(__dirname, "./files/"), (err, data) => {
    //folder is not present
    if (err) {
      return res.status(500).send("Directory not present");
    }
    //folder is present but it dose not contain any files
    if (!data || data.length === 0) {
      return res.status(500).send("Directory has not files");
    }
    //if everything is OK
    return res.status(200).json(data);
  });
});

app.get("/files/:filename", (req, res) => {
  const filePath = path.join(__dirname, "./files/", req.params.filename);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    if (!data || data.length === 0) {
      return res.status(204).send("File is empty");
    }
    return res.status(200).send(data);
  });
});

//for any other routes not defined execute the following code
app.use((req, res) => {
  if (!res.headersSent) {
    res.status(404).send("Route not found");
  }
});


module.exports = app;
