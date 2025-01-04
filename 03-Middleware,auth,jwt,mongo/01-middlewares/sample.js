const express = require("express");
const app = express();

let requestCount = 0;

function requestCountMiddleware(req,res,next) {
  requestCount++;
  console.log("Number of request made till now are:", requestCount);
  next();
}

app.use(requestCountMiddleware)

app.use("/",(req,res)=>{
    res.json({
        msg:"Hello!"
    })
})

app.listen(3000);
